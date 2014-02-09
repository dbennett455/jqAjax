jqAjax
======

This is the jQuery AJAX functions only.  Extracted from jQuery 1.8.3.   It is designed for REST SDK developers that want to use the jQuery AJAX interface without conflicting with jQuery versions and plug-ins that may already be in use by their users.

Naruto Shippuden posted a [entry on his blog](http://noypi-linux.blogspot.com/2013/05/build-jquery-with-ajax-only.html) discussing this technique.  It compiles down much smaller than the new jQuery custom build with ajax only (37k smaller).  It contains good support for older browsers and a good implementation of the newer features such as the AJAX promise interface.

There is some hand editing between the extraction from the jquery sources and the compilation of the minified version.  Namely the renaming of jQuery refences to jqAjax to avoid conflicts and the removal of the global $ identifier and the noConflict() method (which is no longer needed).  I have included a patch file that documents the changes.


TODO:
  - write a script to automate the modifications (changing jQuery to jqAjax and removing $ and noConflict()
  - port the ajax portions of the qunit test over.





