console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}
function imgcompliment() {
	alert('Wowza, "Insert appropiate compliment here"');
}
let form = document.querySelector('#contact');
let img = document.querySelector('img');


form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', imgcompliment);

