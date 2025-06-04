#!/bin/bash

set -e
set -x

# Install dependencies
pnpm install
pip install --user pre-commit

# Install pre-commit hooks
pre-commit install
