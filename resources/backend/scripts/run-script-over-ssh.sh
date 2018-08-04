#!/usr/bin/env bash

script_loc = $1
user = $2
ip = $3

ssh $user@$ip "sudo MLOC/$script_loc"

exit
