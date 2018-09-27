
setTimeout(function(){pupup.style.display = "block"}, 10000)

setTimeout(function(){pupup.style.display = "none"}, 20000)

function openModal(){
	pupup.style.display = 'block';
	setTimeout(function(){pupup.style.display = "none"}, 20000)
}

function closepopup(){
	pupup.style.display = 'none'
}

setTimeout(openModal(), 100);