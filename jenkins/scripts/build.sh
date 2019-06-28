#!/usr/bin/env sh

echo 'Inicialize Build React'

set -x
npm run build --prefix src
set +x
