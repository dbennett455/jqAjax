#!/usr/bin/env node

/*
 * This script runs under node.js and will
 * modify our trimmed down jQuery 
 * renaming references to our custom name and removing
 * all references to the global $
 * Author: dbennett@bensoft.com
 */

var customName='jqAjax';

// print process.argv
process.argv.forEach(function (val, index, array) {
  customName=val;
});

var rl = require('readline');

var state = {
  curr: 0,
  CODE: 0,
  COMMENT: 1,
  HEADER: 2,
  LINE_COMMENT: 3,
  NO_CONFLICT: 4
}

// output a header 
process.stdout.write("// NOTE: jQuery references have been changed to "+customName+" to avoid conflicts with existing configurations.\n\n");

rl.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line',function(l){
  // do matching here
  
  // if we are in code look for a header
  if (state.curr === state.CODE) {
    if (l.match(/\/\*/) != null) {
      state.curr=state.HEADER;
    }
  }
  
  // if we are in a header and we see the end of comment then
  // go back to code
  if (state.curr === state.HEADER) {
    if (l.match(/\*\//) != null) {
      state.curr=state.CODE;
    }
  }
  
  // if we are in code and find // then it's a line comment
  if (state.curr === state.CODE) {
    if (l.match(/^\s*\/\//) != null) {
      state.curr=state.LINE_COMMENT;
    }
  }
  
  // look for begining of noConflict
  if (state.curr === state.CODE) {
    if (l.match(/noConflict\s*:/) != null) {
      state.curr=state.NO_CONFLICT;
    }
  }
  
  // show if we are in CODE or HEADER
//  switch (state.curr) {
//    case state.CODE:
//        process.stdout.write('CODE:');
//      break;
//    case state.HEADER:
//        process.stdout.write('HEADER:');
//        break;
//    case state.LINE_COMMENT:
//        process.stdout.write('LINE_COMMENT:');
//      break;
//    case state.NO_CONFLICT:
//        process.stdout.write('NO_CONFLICT:');
//      break;
//    default:
//      break;
//  }

  // custom line replaces
  if (state.curr == state.CODE) {
  
    // comment out _$ definition
    if (l.match(/_\$\s*=\s*window\.\$,/) != null) {
      l = l.replace(/^/,'//');
    }
    
    if (l.match(/window\.jQuery\s*=\s*window\.\$\s*=\s*jQuery/) != null) {
      l = l.replace(/window\.jQuery\s*=\s*window\.\$\s*=\s*jQuery/,'window.jQuery = jQuery');
    }
    
  }

  
  // If we are in code or line_comment the rewrite jQuery references
  if (state.curr == state.CODE || state.curr == state.LINE_COMMENT) {
    l = l.replace(/jQuery/g,customName);
    l = l.replace(/jquery/g,customName.toLowerCase());
  }
  
  
  // output everything but noConflict function
  if (state.curr !== state.NO_CONFLICT) {
    process.stdout.write(l+"\n");
  }

  // look for end of noConflict
  if (state.curr === state.NO_CONFLICT) {
    if (l.match(/},/) != null) {
      state.curr=state.CODE;
    }
  }  
  
  // if state is line comment then next line is code
  if (state.curr === state.LINE_COMMENT)
    state.curr = state.CODE;
    
});
