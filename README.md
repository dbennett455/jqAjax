jqAjax
======

This is the jQuery AJAX functions only.  Extracted from jQuery 1.8.3.   It is designed for REST SDK developers that want to use the jQuery AJAX interface without conflicting with jQuery versions and plug-ins that may already be in use by their users.

Naruto Shippuden posted a [entry on his blog](http://noypi-linux.blogspot.com/2013/05/build-jquery-with-ajax-only.html) discussing this technique.  It compiles down much smaller than the new jQuery custom build with ajax only (37k smaller).  It contains good support for older browsers and a good implementation of the newer features such as the AJAX promise interface.

The renaming of jQuery refences to jqAjax and the removal of the global $ identifier and the noConflict() method (which is no longer needed).
is handled by the modify.js script which runs under node.js.

Required to build:
  - Build is dependent on Linux system.  Cygwin or other Unix might work but hasn't been tested
  - You will need to check out the jquery source from github and 1.8.3 version tag.
  - extract.sh expects jquery source to be in ../jquery
  - You will need to have node.js installed to run modify.js to modify the source referneces.

To Build:

```
  ./build.sh {optional script base name}
```

TODO:
  - port the ajax portions of the qunit test over.





