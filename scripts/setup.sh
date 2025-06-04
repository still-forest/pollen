#!/bin/bash

set -e
set -x

# Install dependencies
pnpm install
npm install -g pre-commit

# Install pre-commit hooks
pre-commit install
