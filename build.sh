#!/bin/bash
# Assemble index.html from parts. No build tooling, no dependencies.
set -euo pipefail
cd "$(dirname "$0")"
P=parts
{
  cat $P/00-head.html
  cat $P/10-style.css
  echo '</style>'
  echo '</head>'
  cat $P/20-body.html
  echo '<script>'
  echo '//<!--DATA_START-->'
  cat $P/30-data.js
  echo '//<!--DATA_END-->'
  cat $P/40-app.js
  echo '</script>'
  echo '</body>'
  echo '</html>'
} > index.html
echo "built index.html  $(wc -c < index.html) bytes"
