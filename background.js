// webRequest api用法参考： http://www.adambarth.com/experimental/crx/docs/webRequest.html

chrome.webRequest.onBeforeRequest.addListener(
    function(){ 
        return {cancel: true}; 
    },
    {
        urls: [
        	"http://my.oschina.net/js/syntax-highlighter-2.1.382/scripts/brush.js",
        	"http://my.oschina.net/js/syntax-highlighter-2.1.382/styles/shCore.css",
            "http://my.oschina.net/js/syntax-highlighter-2.1.382/styles/shThemeDefault.css"
        ],
        types: ["script","stylesheet"]
    },
    ["blocking"]
);