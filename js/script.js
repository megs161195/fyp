var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'megs.txt', false);
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {
		var div = document.getElementById('update');
		div.innerHTML = xhr.responseText;
	}
}
xhr.send();