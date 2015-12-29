//Start by getting jquery
function getCorrectCss() {
    var currentHref = location.href;
    var cssFileName = '';
    if(currentHref.indexOf('bookmarklet') > 0) {
        cssFileName = 'bookmarklet.css';
    }
    if(currentHref.indexOf('rolfsdotter') > 0) {
        cssFileName = 'rolfsdotter.css';
    }
    if (cssFileName === '') {
        return;
    }
    var cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', 'http://cssbookmarklet.azurewebsites.net/bookmarklets/' + cssFileName);
    document.body.appendChild(cssLink);

}
//I'm not even using jQuery right now, but I load it anyway.
var jQueryLink = document.createElement('script');
jQueryLink.setAttribute('src', 'https://code.jquery.com/jquery-2.1.4.min.js');
document.body.appendChild(jQueryLink);
setTimeout(function() { getCorrectCss(); }, 10);