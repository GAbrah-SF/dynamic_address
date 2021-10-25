#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Esta es mi primer app de Vue.js 3 en GitHub'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/GAbrah-SF/dynamic_address.git master:gh-pages

cd -
