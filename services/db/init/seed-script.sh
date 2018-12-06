#!/bin/bash

white="\033[0m"
green="\033[0;32m"
cyan="\033[0;36m"

for file in `ls "$(dirname $0)"/seed/** | sort`; do
  echo -e "\n${green}Running ${cyan} $file db seed scripts${green} on intensely db...${white}"
    psql -U $1 -d intensely --echo-errors -q -f $file
  echo ""
done
