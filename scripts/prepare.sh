#!/bin/bash

rm -rf ./lib/* ./lib/.npmignore

babel -s inline -d lib src --ignore __tests__,test.js,stories.js

cp ./package.json ./lib/package.json
cp ./README.md ./lib/README.md
cp ./LICENSE ./lib/LICENSE
touch ./lib/.npmignore