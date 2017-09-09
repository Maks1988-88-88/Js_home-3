// Task 1

var m = ['Maks', 1988, 'Igor'];

// Task 2

function masOut() {
	var p = document.getElementById('new');
	var str = "";
	for (var i=0; i<m.length; i++) {
		str += i + ' --- ' + m[i] + '<br>';
	}
	p.innerHTML = str;
}

masOut();

document.getElementById('p0').onclick = masOut2;
function masOut2 () {
	var i1 = document.getElementById('i1').value;
	var i2 = document.getElementById('i2').value;
	m.splice(i1, 0, i2);
	masOut ();
}

function p1() {
	var i1 = document.getElementById('i1').value;
	m.push(i1);
	masOut();
}

function p2() {
	var i1 = document.getElementById('i1').value;
	m.pop(i1);
	masOut();
}

function p3() {
	var i1 = document.getElementById('i1').value;
	m.shift(i1);
	masOut();
}

function p4() {
	var i1 = document.getElementById('i1').value;
	m.unshift(i1);
	masOut();
}