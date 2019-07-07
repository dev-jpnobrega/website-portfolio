#!/usr/bin/env sh

echo 'Inicialize JEST test'

set -x
npm install -g react-scripts
set +x

echo 'runner Jest (https://facebook.github.io/jest/).'

cd ./

ls

react-scripts --version

set -x
npm test