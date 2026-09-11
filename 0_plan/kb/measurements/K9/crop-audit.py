#!/usr/bin/env python3
"""K9 crop audit (rework pack, A9): crop every photograph in mockups/shared/img/ to 16:9 and
4:5 about the centre (no per-file object-position, i.e. the naive `object-fit: cover;
object-position: 50% 50%` a browser applies with no --focal override), assemble two contact
sheets, and print the arithmetic per file so a human/AI reviewer can judge from the contact
sheet whether the subject survives at each ratio.

Re-run with: python3 0_plan/kb/measurements/K9/crop-audit.py
from the repo root. Regenerates contact-sheet-16x9.jpg, contact-sheet-4x5.jpg and prints the
per-file crop table (redirect to crop-data.txt if wanted); crop-audit.md's verdicts are this
script's numbers plus a visual read of the two JPEGs via the Read tool, not a face detector —
no face-detection library is installed, only Pillow.
"""
import os
from PIL import Image, ImageDraw, ImageFont

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))
IMG_DIR = os.path.join(REPO, "0_plan", "mockups", "shared", "img")
OUT_DIR = os.path.dirname(os.path.abspath(__file__))

RATIO_16_9 = 16 / 9
RATIO_4_5 = 4 / 5

FILES = sorted(f for f in os.listdir(IMG_DIR) if f.lower().endswith(".webp"))


def center_crop(img, target_ratio):
    """Crop about the centre to target_ratio (width/height). Returns (cropped_img, box,
    frac_width_kept, frac_height_kept)."""
    w, h = img.size
    cur_ratio = w / h
    if cur_ratio > target_ratio:
        # wider than target: keep full height, crop width
        new_w = round(h * target_ratio)
        new_h = h
    else:
        # taller (relatively) than target: keep full width, crop height
        new_w = w
        new_h = round(w / target_ratio)
    left = (w - new_w) // 2
    top = (h - new_h) // 2
    box = (left, top, left + new_w, top + new_h)
    return img.crop(box), box, new_w / w, new_h / h


def load_font(size):
    try:
        return ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
    except OSError:
        return ImageFont.load_default()


def build_sheet(ratio, cell_w, label_h, cols, out_name, quality):
    cell_h = round(cell_w / ratio)
    rows = -(-len(FILES) // cols)  # ceil
    pad = 6
    sheet_w = cols * cell_w + (cols + 1) * pad
    sheet_h = rows * (cell_h + label_h) + (rows + 1) * pad
    sheet = Image.new("RGB", (sheet_w, sheet_h), (255, 255, 255))
    draw = ImageDraw.Draw(sheet)
    font = load_font(11)
    rows_out = []
    for i, fname in enumerate(FILES):
        path = os.path.join(IMG_DIR, fname)
        img = Image.open(path).convert("RGB")
        w, h = img.size
        cropped, box, fw, fh = center_crop(img, ratio)
        thumb = cropped.resize((cell_w, cell_h), Image.LANCZOS)
        col, row = i % cols, i // cols
        x = pad + col * (cell_w + pad)
        y = pad + row * (cell_h + label_h + pad)
        sheet.paste(thumb, (x, y))
        draw.rectangle([x, y, x + cell_w - 1, y + cell_h - 1], outline=(120, 120, 120))
        label = f"{fname}"
        dims = f"{w}x{h} -> kept {fw*100:.1f}%w {fh*100:.1f}%h"
        draw.text((x, y + cell_h + 1), label, fill=(0, 0, 0), font=font)
        draw.text((x, y + cell_h + 13), dims, fill=(60, 60, 60), font=font)
        rows_out.append((fname, w, h, round(fw * 100, 1), round(fh * 100, 1), box))
    out_path = os.path.join(OUT_DIR, out_name)
    sheet.save(out_path, "JPEG", quality=quality, optimize=True)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"{out_name}: {sheet.size[0]}x{sheet.size[1]} px, {size_kb:.1f} KB (quality={quality})")
    return rows_out, size_kb


def main():
    print(f"{len(FILES)} source files in {IMG_DIR}\n")
    r169, kb169 = build_sheet(RATIO_16_9, cell_w=270, label_h=26, cols=5, out_name="contact-sheet-16x9.jpg", quality=72)
    r45, kb45 = build_sheet(RATIO_4_5, cell_w=200, label_h=26, cols=5, out_name="contact-sheet-4x5.jpg", quality=72)

    print("\n## 16:9 centre crop (width kept / height kept)")
    print("| File | Native | 16:9 crop box (l,t,r,b) | Width kept | Height kept |")
    print("|---|---|---|---|---|")
    for fname, w, h, fw, fh, box in r169:
        print(f"| {fname} | {w}x{h} | {box} | {fw}% | {fh}% |")

    print("\n## 4:5 centre crop (width kept / height kept)")
    print("| File | Native | 4:5 crop box (l,t,r,b) | Width kept | Height kept |")
    print("|---|---|---|---|---|")
    for fname, w, h, fw, fh, box in r45:
        print(f"| {fname} | {w}x{h} | {box} | {fw}% | {fh}% |")

    print(f"\ncontact-sheet-16x9.jpg: {kb169:.1f} KB")
    print(f"contact-sheet-4x5.jpg: {kb45:.1f} KB")


if __name__ == "__main__":
    main()
