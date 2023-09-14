#! /usr/bin/bash

docker rmi kickstart-frontend
docker build . -t kickstart-frontend
docker save kickstart-frontend -o kickstart-frontend.tar
scp kickstart-frontend.tar ubuntu@35.234.63.181:tailor-bliss
rm kickstart-frontend.tar
