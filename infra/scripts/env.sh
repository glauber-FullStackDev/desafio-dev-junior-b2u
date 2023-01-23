#!/bin/sh

file=`cat .env`
host=`cat .env | grep -w 'BACKEND_HOST=' | cut -d "=" -f 2 | sed 's/\"//g'`
secret=`cat .env | grep -w 'SECRET=' | cut -d "=" -f 2 | sed 's/\"//g'`
port=`cat .env | grep 'BACKEND_PORT=' | cut -d "=" -f 2`
url=`cat .env | grep -w 'BACKEND_URL=' | cut -d "=" -f 2 | sed 's/${//g' | sed 's/}//g'| sed "s/BACKEND_HOST/$host/g" | sed "s/BACKEND_PORT/$port/g"`

pwd
echo "
# File automaticaly genereted. Don´t change this settings
const Config = {
    backend: $url,
    secret: \"$secret\",
}

export default Config;
" > ../../frontend/config.ts