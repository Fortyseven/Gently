#!/usr/bin/bash

# Let's use the creds we already have.
set -a
source <(cat ../.env | sed -e '/^#/d;/^\s*$/d' -e "s/'/'\\\''/g" -e "s/=\(.*\)/='\1'/g")
set +a

read -p "!! WARNING !! This will delete everything in the database. Last chance to bail!"

psql -f cases.sql
