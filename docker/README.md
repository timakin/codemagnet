Docker Setting
==============

before docker setting, 

## Installation
```
virtual box
boot2docker
fig
```
## Port Forwarding

```
VBoxManage modifyvm "boot2docker-vm" --natpf1 "tcp-port4000,tcp,,4000,,4000";
```

[Port forward setting for docker](https://github.com/boot2docker/boot2docker/blob/master/doc/WORKAROUNDS.md)

## Manage Application

```
fig up -d
// fig logs codemagnet
fig stop
```
