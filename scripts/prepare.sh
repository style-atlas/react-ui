#!/bin/bash

rm -rf ./lib/* ./lib/.npmignore ./lib/.yarnignore 

babel -s inline -d lib src --ignore __tests__,test.js,stories.js

cp ./package.json ./lib/package.json
cp ./README.md ./lib/README.md
cp ./LICENSE ./lib/LICENSE
cp ./yarn.lock ./lib/yarn.lock
echo "node_modules" >> ./lib/.npmignore
echo "node_modules" >> ./lib/.yarnignore

cd ./lib
yarn --production --ignore-scripts