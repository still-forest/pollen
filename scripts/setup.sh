#!/bin/bash

set -e
set -x

# Install dependencies
pnpm install

# Install pre-commit hooks
pnpm pre-commit install
