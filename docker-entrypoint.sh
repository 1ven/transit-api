#!/bin/sh
yarn run migrate:latest
exec "$@"