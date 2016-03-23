# How to add scripts or css to a page
Add bookmarklet in Chrome with the following address:
javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','http://cssbookmarklet.azurewebsites.net/scripts/bookmarklet.js');document.body.appendChild(jsCode);}());
