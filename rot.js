function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

function deRotNode(node) {
    for (let key in node.dataset) {
        value = rot13(node.dataset[key]);
        if (key === "inner") {
            node.innerText = value;
        } else {
            node.setAttribute(key, value);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var nodes = document.getElementsByClassName("rot13");
    for (let node of nodes) {
        deRotNode(node);
    }
});
