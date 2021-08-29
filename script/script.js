document.getElementById('section-one-discover').addEventListener('click', function(){
	alert('You Clicked Discover Button.')
})
document.getElementById('email').addEventListener('focus', function(){
	console.log('Email Input Is Focused');
})
document.getElementById('sendButton').addEventListener('click', function(){
	alert('Your Request Is Accepted.')
})

let navigationLeftBlock = document.getElementById('navigation');
let burgerButton = document.getElementById('burger');

burgerButton.addEventListener('click', function(){
	navigationLeftBlock.classList.toggle('burgerBar');
})
