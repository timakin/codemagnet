#!/bin/bash

boot2docker up

docker build -t timakin/codemagnet ./
docker run -it -p 80:3000 --name magnet timakin/codemagnet /bin/bash