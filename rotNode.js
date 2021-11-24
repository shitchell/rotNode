var rotClass = "rot13";

function rot13(str) {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let index = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

function deRotNode(node) {
    for (const key in node.dataset) {
        value = rot13(node.dataset[key]);
        if (key === "inner") {
            node.innerText = value;
        } else {
            node.setAttribute(key, value);
        }
    }
    node.classList.remove(rotClass);
}

document.addEventListener("DOMContentLoaded", function() {
    let nodes = document.getElementsByClassName(rotClass);
    for (const node of nodes) {
        deRotNode(node);
    }
});
