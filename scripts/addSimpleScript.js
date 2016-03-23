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
function addScript() {
    var currentHref = location.href;
    var cssFileName = '';
    if(currentHref.indexOf('sok.') > 0) {
        cssFileName = 'sok.css';
    }
    if (cssFileName === '') {
        return;
    }
    
    addLink('http://cssbookmarklet.azurewebsites.net/bookmarklets/' + cssFileName);

}

setTimeout(function() { 
    addScript(); 
}, 10);