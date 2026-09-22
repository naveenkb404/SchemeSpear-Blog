"""
Remove solid black backgrounds from SchemeSpear logos.
Produces transparent PNGs that work on both dark and light navbars.
"""
from PIL import Image
import os

BRANDING_DIR = os.path.dirname(os.path.abspath(__file__))

def remove_black_background(input_path, output_path, threshold=40):
    """
    Convert near-black pixels to transparent.
    threshold: pixels with all RGB channels <= threshold become transparent.
    """
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # If pixel is very close to black, make it transparent
            if r <= threshold and g <= threshold and b <= threshold:
                # Fade out gradually for anti-aliasing near edges
                # Maximum darkness across channels drives alpha fade
                max_channel = max(r, g, b)
                fade = max_channel / threshold  # 0.0 (pure black) to 1.0 (at threshold)
                pixels[x, y] = (r, g, b, int(a * fade))

    img.save(output_path, "PNG")
    print(f"Saved: {output_path}")


def process_dark_logo():
    """
    Dark logo: silver/white logo on black background.
    Remove the black → silver logo with transparent background.
    Works great on dark navbar (shows silver on dark).
    Also acceptable on light navbar (silver on light).
    """
    inp = os.path.join(BRANDING_DIR, "schemespear-logo-dark.png")
    out = os.path.join(BRANDING_DIR, "schemespear-logo-dark.png")
    remove_black_background(inp, out, threshold=30)
    print("Dark logo processed: black removed, silver mark preserved.")


def process_light_logo():
    """
    Light logo: very dark (near-black) logo mark on black background.
    Strategy: remove the pure-black BG but keep the slightly-lighter dark mark.
    The mark has subtle gray/dark tones, so we use a tighter threshold.
    Then invert for light theme use OR just keep the dark mark transparent-bg'd.
    """
    inp = os.path.join(BRANDING_DIR, "schemespear-logo-light.png")
    img = Image.open(inp).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    # Analyse: find the darkest pixels (background) vs the mark pixels
    # The background is pure black (0,0,0), the mark is slightly lighter dark
    # Use a very tight threshold of 15 to remove only the pure-black background
    BG_THRESHOLD = 15  # pure black background only

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r <= BG_THRESHOLD and g <= BG_THRESHOLD and b <= BG_THRESHOLD:
                max_channel = max(r, g, b)
                fade = max_channel / max(BG_THRESHOLD, 1)
                pixels[x, y] = (r, g, b, int(a * fade))

    img.save(inp, "PNG")
    print("Light logo processed: pure-black BG removed, dark mark preserved.")


if __name__ == "__main__":
    print("Processing SchemeSpear logos...")
    process_dark_logo()
    process_light_logo()
    print("Done. Both logos now have transparent backgrounds.")
