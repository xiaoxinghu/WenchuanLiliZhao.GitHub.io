#!/usr/bin/env bash

set -euo pipefail

echo '{"version": "'"$(git describe --tags)"'"}'
