#!/bin/bash

baseDir=`dirname $0`

closureDir="$baseDir/closure"

java -jar $closureDir/compiler.jar jqAjax.js --js_output_file jqAjax.min.js
