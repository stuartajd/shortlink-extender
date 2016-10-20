var shortlinks = [
    "bit.ly", 
    "goo.gl", 
    "apple.co", 
    "tinyurl.com"
];

var links = document.querySelectorAll("a");
for(var i = 0; i < links.length; i++){
    var URL = links[i].href;
    
    for(var j = 0; j < shortlinks.length; j++){
        if(links[i].href.indexOf(shortlinks[j]) !== -1){
            var data = httpGet("//host.stuartd.co.uk/api.php?url=" + links[i].href);
            links[i].innerHTML = links[i].text + " <span style=\"font-size: 0.7em\">(" + data + ")</span>";
        }
    }
}

// Source: http://stackoverflow.com/a/4033310
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
