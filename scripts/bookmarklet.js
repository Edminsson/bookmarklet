//Start by getting jquery
function getCorrectCss() {
    var currentHref = location.href;
    if(currentHref.indexOf('bookmarklet') > 0) {
        //load css for bookmarklet
        var cssLink = document.createElement('link');
        cssLink.setAttribute('rel', 'stylesheet');
        cssLink.setAttribute('href', 'bookmarklets/bookmarklet.css');
        document.body.appendChild(cssLink);
    }
}
//I'm not even using jQuery right now, but I load it anyway.
var jQueryLink = document.createElement('script');
jQueryLink.setAttribute('src', 'https://code.jquery.com/jquery-2.1.4.min.js');
document.body.appendChild(jQueryLink);
setTimeout(function() { getCorrectCss(); }, 10);