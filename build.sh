#!/bin/bash

customName='jqAjax'
if [[ $# -ne 0 ]] ; then
  customName=$1
fi

baseDir=`dirname $0`

cd $baseDir
./extract.sh
./modify.js ${customName} < jQuery_ajax_only.js > ${customName}.js
./compile.sh ${customName}
