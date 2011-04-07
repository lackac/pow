#!/bin/sh

set -e

git show master:README.md |
markdown |
ruby -e 'puts IO.read("manual.html").sub(/(<!--begin-->).*?(<!--end-->)/m) { $1 + $<.read + $2 }' \
> manual.tmp.html

mv manual.tmp.html manual.html