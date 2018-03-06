#!/bin/bash

# Providing deployment environment variables from .env.* files.
# .env.local variables will be passed in all environments.

if [ -e .env.local ]; then
  RESULT="$RESULT$(cat .env.local) "
fi
if [ $DEPLOY_ENV ] && [ -e ".env.$DEPLOY_ENV.local" ]; then
  RESULT="$RESULT$(cat ".env.$DEPLOY_ENV.local")"
fi

if [ -n RESULT ]; then
  eval $(echo $RESULT) $@
else
  $@
fi