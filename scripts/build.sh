#!/bin/bash

ROOT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $(dirname "$ROOT")

rm -rf ./content
mkdir -p ./content
cp -r /root/.local/share/nokable/haova/blog ./content
rm -rf ./content/blog/index.md
printf "%s\ntitle: 'Blog'\n%s" "---" "---" >> ./content/blog/_index.md
hugo