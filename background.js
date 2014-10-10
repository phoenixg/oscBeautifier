// webRequest api用法参考： http://www.adambarth.com/experimental/crx/docs/webRequest.html

// chrome.webRequest.onBeforeRequest.addListener(
//     function(){ 
//         return {cancel: true}; 
//     },
//     {
//         urls: [
//          "http://my.oschina.net/js/syntax-highlighter-2.1.382/scripts/brush.js",
//          "http://my.oschina.net/js/syntax-highlighter-2.1.382/styles/shCore.css",
//             "http://my.oschina.net/js/syntax-highlighter-2.1.382/styles/shThemeDefault.css"
//         ],
//         types: ["script","stylesheet"]
//     },
//     ["blocking"]
// );

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {redirectUrl: chrome.runtime.getURL("brush.js") };
    },
    {
        urls: [
            "http://my.oschina.net/js/syntax-highlighter-2.1.382/scripts/brush.js"
        ],
        types: ["script"]
    },
    ["blocking"]
);






/* google -> useso */
chrome.webRequest.onBeforeRequest.addListener(replaceWithUseso,
    {urls: ["<all_urls>"]},
    ["blocking"]
);

function replaceWithUseso(data){
    var url = data.url;
    var domain = url.match(/^(http|https)\:\/\/([a-zA-Z0-9\.\-])+/g);
    var judge = domain && domain[0].match(/googleapis/g);

    if(judge){
        //for useso do not support https...
        url = url.replace(/^https/, 'http').replace('googleapis', 'useso')
        return {redirectUrl: url};
    }
}