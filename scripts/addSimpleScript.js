//Start by getting jquery
function createScriptElement(uri) {
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', uri);
    document.body.appendChild(scriptElement);
    return scriptElement;
}
function addScriptElement(uri) {
    var scriptLink = createScriptElement(uri);
    document.head.appendChild(scriptLink);
}
function addScript() {
    var currentHref = location.href;
    var scriptFileName = '';
    if(currentHref.indexOf('sok.') > 0) {
        scriptFileName = 'sok.js';
    }
    if (scriptFileName === '') {
        return;
    }
    
    addScriptElement('https://cssbookmarklet.azurewebsites.net/bookmarklets/' + scriptFileName);

}

setTimeout(function() { 
    addScript(); 
}, 10);