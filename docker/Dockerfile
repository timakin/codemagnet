FROM ubuntu:12.04

MAINTAINER timakin

# Update apt-get sources AND install packages
RUN     apt-get update
RUN     apt-get install curl git man python make gcc g++ bzip2 -yy wget build-essential


# NODE V0.10.26
RUN       wget http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz
RUN       tar -zxvf node-v0.10.26.tar.gz
RUN       rm node-v0.10.26.tar.gz
WORKDIR   node-v0.10.26

# INSTALL NODE
RUN       ./configure
RUN       make
RUN       make install

# CLEAN UP NODE INSTALLATION
WORKDIR   ..
RUN       rm -r node-v0.10.26

RUN npm install -g grunt-cli gulp webpack bower

EXPOSE 4000

CMD ["bash"]

WORKDIR /codemagnet
CMD ["gulp", "serve"]