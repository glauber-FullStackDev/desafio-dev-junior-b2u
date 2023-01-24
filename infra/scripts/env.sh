#!/bin/sh

env_file="./frontend/.env"
file=`cat $env_file`
host=`cat $env_file | grep -w 'BACKEND_HOST=' | cut -d "=" -f 2 | sed 's/\"//g'`
frontend=`cat $env_file | grep -w 'FRONTEND_HOST=' | cut -d "=" -f 2 | sed 's/\"//g'`
secret=`cat $env_file | grep -w 'SECRET=' | cut -d "=" -f 2 | sed 's/\"//g'`
port=`cat $env_file | grep 'BACKEND_PORT=' | cut -d "=" -f 2`
url=`cat $env_file | grep -w 'BACKEND_URL=' | cut -d "=" -f 2 | sed 's/${//g' | sed 's/}//g'| sed "s/BACKEND_HOST/$host/g" | sed "s/BACKEND_PORT/$port/g"`

frontend_domain=`cat $env_file | grep -w 'FRONTEND_DOMAIN_NAME' | cut -d "=" -f 2 | sed 's/\"//g'`
backend_domain=`cat $env_file | grep -w 'BACKEND_DOMAIN_NAME=' | cut -d "=" -f 2 | sed 's/\"//g'`


echo "
// File automaticaly genereted. Don´t change this settings
const Config = {
    backend: $url,
    secret: \"$secret\",
}

export default Config;
" > ./frontend/config.ts

echo "
* {
  root * /srv
  file_server
  try_files {path} /index.html
  encode gzip zstd
}
$frontend {
  root * /srv
  file_server
  try_files {path} /index.html
  encode gzip zstd
}
$frontend_domain {
  root * /srv
  file_server
  try_files {path} /index.html
  encode gzip zstd
}

" > ./frontend/Caddyfile

echo "
*:$port {
	reverse_proxy * backend:$port
	encode zstd gzip
}

$backend_domain:$port {
	reverse_proxy * backend:$port
	encode zstd gzip
}

" > ./gateway/Caddyfile