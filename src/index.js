const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg) {
    if (typeof arg === 'string') {
        let nodeList = document.querySelectorAll(arg);
        let arrNodeList = Array.prototype.slice.call(nodeList);
        return new DOMNodeCollection(arrNodeList);
    } else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    }
}