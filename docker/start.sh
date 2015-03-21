#!/bin/bash

boot2docker up
fig up -d
#docker build -t timakin/codemagnet ./
#docker run -it -p 80:3000 --name magnet timakin/codemagnet /bin/bash
