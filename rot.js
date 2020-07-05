var email_username = "fnaql";
var email_domain = "fnaqlnyv.pbz";

function rot13(str) {
	var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	var index     = x => input.indexOf(x);
	var translate = x => index(x) > -1 ? output[index(x)] : x;
	return str.split('').map(translate).join('');
}

function deRotNode(node) {
	data = $(node).data();
	$.each(data, function(key, value) {
		value = rot13(value);
		if (key === "inner") {
			$(node).html(value);
		} else {
			$(node).attr(key, value);
		}
	});
}

$(document).ready(function() {
	// Convert all rot13 nodes
	$.each($(".rot13"), function(i, el) {
		deRotNode(el);
	})
});