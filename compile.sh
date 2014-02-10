#!/bin/bash

customName='jqAjax'
if [[ $# -ne 0 ]] ; then
  customName=$1
fi

baseDir=`dirname $0`

closureDir="$baseDir/closure"

java -jar $closureDir/compiler.jar ${customName}.js --js_output_file ${customName}.min.js
