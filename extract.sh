#!/bin/bash

# extract necessary stuff from jQuery

baseDir=`dirname $0`

# jquery 1.8.3 (1.9+ will not work)
jqueryBase="$baseDir/../jquery"

cat \
	$jqueryBase/src/intro.js \
	$jqueryBase/src/core.js  \
	$jqueryBase/src/callbacks.js \
	$jqueryBase/src/deferred.js \
	$jqueryBase/src/support.js \
	$jqueryBase/src/data.js \
	$jqueryBase/src/event.js \
	$jqueryBase/src/serialize.js \
	$jqueryBase/src/ajax.js \
	$jqueryBase/src/ajax/xhr.js \
	$jqueryBase/src/ajax/script.js \
	$jqueryBase/src/ajax/jsonp.js \
	$jqueryBase/src/exports.js \
	$jqueryBase/src/outro.js \
> jQuery_ajax_only.js
