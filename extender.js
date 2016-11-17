/**
 * Shortlink Extender
 * Developer: StuartD - www.stuartd.co.uk
 */

var shortlinks = [
    "bit.ly",
    "goo.gl",
    "tinyurl.com",
    "7.ly",
    "adf.ly",
    "bit.do",
    "fur.ly",
    "is.gd",
    "tiny.cc",
    "tny.im",
    "v.gd",
    "y2u.be",
    "git.io"
];

var links = document.querySelectorAll("a");

for(var i = 0; i < links.length; i++){
    for(var j = 0; j < shortlinks.length; j++){
        if(links[i].href.indexOf(shortlinks[j]) !== -1){
            var endID = links[i].href.split(shortlinks[j].slice(-1))[1].substring(1);
            if(endID !== ""){
                var data = httpGet("//host.stuartd.co.uk/api.php?url=" + links[i].href);
                links[i].innerHTML = links[i].text + '<span style="margin-left: 0.5em;display: inline-block;border-radius: 2px;padding: 0.2em 0.5em;background-color: #1099ad;color: white;font-size: 0.8em;">' + data + '</span>';
            }
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
