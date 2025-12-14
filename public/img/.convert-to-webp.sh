#!/bin/bash

# Convert all JPG/JPEG files in the current directory
for img in *.jpg *.jpeg; do
    # Skip if no files match
    [ -e "$img" ] || continue

    # WebP file path (same directory)
    WEBP_FILE="${img%.*}.webp"

    # Convert to WebP with quality 80
    cwebp -q 80 "$img" -o "$WEBP_FILE"

    echo "Converted: $img → $WEBP_FILE"
done

echo "All JPGs in current directory converted to WebP in place."
