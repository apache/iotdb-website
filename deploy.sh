#!/bin/sh

nvm use v9.11.2
git pull
npm install
npm run build
