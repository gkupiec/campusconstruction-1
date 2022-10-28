// JavaScript Document



function cenMap() {
	document.getElementById("medmap").style.opacity = "0";
	document.getElementById("wcmap").style.opacity = "0";
	document.getElementById("athmap").style.opacity = "0";
}

function xcenMap() {
	document.getElementById("medmap").style.opacity = "1";
	document.getElementById("wcmap").style.opacity = "1";
	document.getElementById("athmap").style.opacity = "1";
}

function medMap() {
	document.getElementById("cenmap").style.opacity = "0";
	document.getElementById("wcmap").style.opacity = "0";
	document.getElementById("athmap").style.opacity = "0";
}

function xmedMap() {
	document.getElementById("cenmap").style.opacity = "1";
	document.getElementById("wcmap").style.opacity = "1";
	document.getElementById("athmap").style.opacity = "1";
}

function wcMap() {
	document.getElementById("cenmap").style.opacity = "0";
	document.getElementById("medmap").style.opacity = "0";
	document.getElementById("athmap").style.opacity = "0";
}

function xwcMap() {
	document.getElementById("cenmap").style.opacity = "1";
	document.getElementById("medmap").style.opacity = "1";
	document.getElementById("athmap").style.opacity = "1";
}

function athMap() {
	document.getElementById("cenmap").style.opacity = "0";
	document.getElementById("medmap").style.opacity = "0";
	document.getElementById("wcmap").style.opacity = "0";
}

function xathMap() {
	document.getElementById("cenmap").style.opacity = "1";
	document.getElementById("medmap").style.opacity = "1";
	document.getElementById("wcmap").style.opacity = "1";
}

document.getElementById("cc").addEventListener("mouseover", cenMap);
document.getElementById("cc").addEventListener("mouseout", xcenMap);
document.getElementById("mc").addEventListener("mouseover", medMap);
document.getElementById("mc").addEventListener("mouseout", xmedMap);
document.getElementById("wc").addEventListener("mouseover", wcMap);
document.getElementById("wc").addEventListener("mouseout", xwcMap);
document.getElementById("ac").addEventListener("mouseover", athMap);
document.getElementById("ac").addEventListener("mouseout", xathMap);

function lawGal(){
	const gallery = document.createElement('div');
	gallery.classList.add('gallery');
	gallery.id = 'gallery';
	cdetail.appendChild(gallery);
	const close = document.createElement('div');
	close.classList.add('close');
	close.id = 'close';
	gallery.appendChild(close);
	close.addEventListener('click', removeGal);
	const container = document.createElement('div');
	container.classList.add('container');
	container.id = 'container';
	gallery.appendChild(container);
	const lawCap = document.createElement('div');
	lawCap.classList.add('lawcap');
	lawCap.innerText = "40,000 gross square feet were renovated to convert a former dormitory into graduate residences and meeting spaces.";
	container.appendChild(lawCap);
	const picOne = document.createElement('img');
	picOne.classList.add('projPic');
	picOne.id = 'pic-one';
	picOne.src="Images/central/law_web.jpg"; 
	container.appendChild(picOne);
	const picTwo = document.createElement('img');
	picTwo.classList.add('projPic');
	picTwo.id = 'pic-two';
	picTwo.src="Images/central/law_ext_web.jpg"; 
	container.appendChild(picTwo);
	const picThree = document.createElement('img');
	picThree.classList.add('projPic');
	picThree.id = 'pic-three';
	picThree.src="Images/central/law_rm_web.jpg"; 
	container.appendChild(picThree);
}

function removeGal(){
	var gallery = document.getElementById('gallery');
	gallery.parentNode.removeChild(gallery);
}

function somGal(){
	const gallery = document.createElement('div');
	gallery.classList.add('gallery');
	gallery.id = 'gallery';
	cdetail.appendChild(gallery);
	const close = document.createElement('div');
	close.classList.add('close');
	close.id = 'close';
	gallery.appendChild(close);
	close.addEventListener('click', removeGal);
}

function removeGal(){
	var gallery = document.getElementById('gallery');
	gallery.parentNode.removeChild(gallery);
}
