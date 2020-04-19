#!/bin/bash

if [ -z "$1" ]; then
  echo "This script requires a single parameter"
  exit 1
fi

echo "You passed in ${1}"