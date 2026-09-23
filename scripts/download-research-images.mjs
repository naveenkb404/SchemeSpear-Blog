/**
 * download-research-images.mjs
 * Downloads real photographic images from stable CDN URLs into
 * /public/images/research/ for the SchemeSpear Research page.
 *
 * Sources: Pexels (free, no-API-key required for direct image URLs)
 * and Unsplash CDN direct links.
 *
 * Run with: node scripts/download-research-images.mjs
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'images', 'research');

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
console.log(`\nOutput directory: ${OUTPUT_DIR}`);

/**
 * Download a URL to a local file, following up to maxRedirects redirects.
 */
function downloadFile(url, destPath, maxRedirects = 8) {
  return new Promise((resolve, reject) => {
    const attempt = (currentUrl, redirectsLeft) => {
      const mod = currentUrl.startsWith('https') ? https : http;
      const req = mod.get(currentUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SchemeSpear-ImageDownloader/1.0)',
          'Accept': 'image/webp,image/jpeg,image/*,*/*;q=0.8',
        }
      }, (res) => {
        // Follow redirects
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (redirectsLeft <= 0) {
            reject(new Error('Too many redirects'));
            return;
          }
          const next = new URL(res.headers.location, currentUrl).toString();
          attempt(next, redirectsLeft - 1);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} from ${currentUrl}`));
          return;
        }

        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(destPath);
          if (stats.size < 10000) {
            fs.unlinkSync(destPath);
            reject(new Error(`Downloaded file too small (${stats.size} bytes) — likely not a real image`));
          } else {
            resolve(stats.size);
          }
        });
        fileStream.on('error', reject);
      });
      req.on('error', reject);
      req.setTimeout(30000, () => {
        req.destroy(new Error('Request timed out'));
      });
    };
    attempt(url, maxRedirects);
  });
}

/**
 * Try multiple URLs in order, use the first that succeeds.
 */
async function downloadWithFallbacks(urls, destPath, label) {
  for (const url of urls) {
    try {
      console.log(`  Trying: ${url}`);
      const bytes = await downloadFile(url, destPath);
      console.log(`  ✓ ${label} — saved (${(bytes / 1024).toFixed(0)} KB) → ${path.basename(destPath)}`);
      return true;
    } catch (err) {
      console.log(`  ✗ Failed: ${err.message}`);
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    }
  }
  console.log(`  ✗ All URLs failed for: ${label}`);
  return false;
}

const images = [
  {
    filename: 'research-public-assistance.jpg',
    label: 'Image 1 — Public Assistance / Beneficiary Access',
    alt: 'People accessing a public assistance service or community guidance desk',
    urls: [
      // Pexels CDN direct links (very stable, no API key required for direct image URLs)
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  {
    filename: 'research-rural-entrepreneur.jpg',
    label: 'Image 2 — Rural / Small Entrepreneur',
    alt: 'Rural small business entrepreneur managing a local enterprise',
    urls: [
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2253877/pexels-photo-2253877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  {
    filename: 'research-application-process.jpg',
    label: 'Image 3 — Documentation / Application Process',
    alt: 'Person reviewing documentation and handling administrative paperwork for a scheme application',
    urls: [
      'https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  {
    filename: 'research-financial-inclusion.jpg',
    label: 'Image 4 — Community / Financial Inclusion',
    alt: 'Community-level small business and market activity representing financial inclusion',
    urls: [
      'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6893956/pexels-photo-6893956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  }
];

(async () => {
  console.log('\n=== SchemeSpear Research Image Downloader ===\n');
  let successCount = 0;
  const results = [];

  for (const img of images) {
    console.log(`\n${img.label}`);
    const destPath = path.join(OUTPUT_DIR, img.filename);
    const ok = await downloadWithFallbacks(img.urls, destPath, img.label);
    if (ok) {
      successCount++;
      results.push({ filename: img.filename, status: 'OK', alt: img.alt });
    } else {
      results.push({ filename: img.filename, status: 'FAILED', alt: img.alt });
    }
  }

  console.log(`\n=== SUMMARY: ${successCount}/${images.length} images downloaded ===`);
  results.forEach(r => {
    const icon = r.status === 'OK' ? '✓' : '✗';
    console.log(`  ${icon} ${r.filename}`);
  });

  // List what is now in the output directory
  console.log('\nFiles in /public/images/research/:');
  const files = fs.readdirSync(OUTPUT_DIR);
  files.forEach(f => {
    const sz = fs.statSync(path.join(OUTPUT_DIR, f)).size;
    console.log(`  ${f} (${(sz / 1024).toFixed(0)} KB)`);
  });

  if (successCount < images.length) {
    console.log('\n⚠  Some downloads failed. Check internet connection or URL availability.');
    process.exit(1);
  } else {
    console.log('\n✓ All images downloaded successfully.\n');
  }
})();
