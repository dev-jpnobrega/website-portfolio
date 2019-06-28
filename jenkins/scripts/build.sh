#!/usr/bin/env sh

echo 'Inicialize Build React'

set -x
npm config set prefix /var/lib/jenkins/workspace/react-pipeline
npm run build
set +x
