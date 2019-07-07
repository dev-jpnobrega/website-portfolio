#!/usr/bin/env sh

echo 'Inicialize JEST test'

set -x
# npm install --save-dev cross-env
set +x

echo 'runner Jest (https://facebook.github.io/jest/).'

cd ./

set -x
npm test