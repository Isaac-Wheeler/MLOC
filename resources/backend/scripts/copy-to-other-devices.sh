#!/usr/bin/env bash

script_loc = $1
user = $2
ip = $3

scp $script_loc $user@$ip:MLOC/

exit
