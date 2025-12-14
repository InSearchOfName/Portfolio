#!/bin/bash

# Loop through all MP4 files in the current directory
for f in *.mp4; do
  # Skip if no MP4 files exist
  [ -e "$f" ] || continue
  
  echo "Converting: $f"
  ffmpeg -i "$f" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus "${f%.mp4}.webm"
done

echo "Done!"
