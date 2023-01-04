#!/bin/sh

echo "start server"
yarn start &
yarn proxy
