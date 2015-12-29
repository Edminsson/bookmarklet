//Start by getting jquery
function createLink(uri) {
    var cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', uri);
    return cssLink;
}
function addLink(uri) {
    var cssLink = createLink(uri);
    //document.body.appendChild(cssLink);
    document.head.appendChild(cssLink);
}
function getCorrectCss() {
    var currentHref = location.href;
    var cssFileName = '';
    if(currentHref.indexOf('bookmarklet') > 0) {
        cssFileName = 'bookmarklet.css';
    }
    if(currentHref.indexOf('rolfsdotter') > 0) {
        cssFileName = 'rolfsdotter.css';
    }
    if(currentHref.indexOf('opendata') > 0) {
        cssFileName = 'opendata.css';
    }
    if (cssFileName === '') {
        return;
    }
    
    addLink('http://cssbookmarklet.azurewebsites.net/bookmarklets/' + cssFileName);

}
function getCustomGoogleFonts() {
    var fontUri = 'https://fonts.googleapis.com/css?family=Damion|Alegreya:400,700,400italic|Alegreya+SC:400,700|Lato:400,300,700,400italic,300italic';
    addLink(fontUri);
}

//I'm not even using jQuery right now, but I load it anyway.
var jQueryLink = document.createElement('script');
jQueryLink.setAttribute('src', 'https://code.jquery.com/jquery-2.1.4.min.js');
document.body.appendChild(jQueryLink);
setTimeout(function() { 
    getCustomGoogleFonts(); 
}, 100);
setTimeout(function() { 
    getCorrectCss(); 
}, 10);