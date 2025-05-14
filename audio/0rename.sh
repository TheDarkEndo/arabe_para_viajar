#!/bin/sh
# ./0rename.sh AUSDRUCK ERSETZUNG

ALT=$1
NEU=$2
shift
shift

for file in *
do
  new=`echo ${file} | sed s/${ALT}/${NEU}/g`
  mv ${file} $new
done
exit 0
