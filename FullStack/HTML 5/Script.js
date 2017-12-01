
function initiate()
{
	/*var elem=document.getElementById('canvas');
	var canvas=elem.getContext('2d');
	/*canvas.strokeRect(100,150,120,120);
	canvas.fillRect(110,160,100,100);
	canvas.clearRect(130,170,30,30);
	
	var gradient=canvas.createLinearGradient(0, 0, 10, 100);
	gradient.addColorStop(0.5,'#0088FF');
	gradient.addColorStop(1,'#ff0000');
	canvas.fillStyle=gradient;
	
	canvas.fillRect(150, 10, 200, 100);
	
	canvas.fillRect(400, 10, 200, 100);
	
	canvas.fillRect(400, 150, 500, 100);
	
	canvas.beginPath();
	canvas.moveTo(100, 100);
	canvas.quadraticCurveTo(150, 200, 100, 300);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(150, 50);
	canvas.bezierCurveTo(50, 100, 200, 150, 100, 250);
	canvas.lineWidth=5;
	canvas.lineCap="round";
	canvas.stroke();
	
	canvas.font="bold 20px segoe UI, sans-serif"
	canvas.textAlign="start";
	canvas.textBaseline="bottom";
	var message="Hello HTML5!";
	canvas.fillText(message, 200, 220);
	var textSize=canvas.measureText(message);
	canvas.strokeRect(200, 200, textSize.width, 20);*/
	//canvas.lineTo(200, 200);
	//canvas.closePath();
	
	//canvas.stroke();	
	//canvas.fill();
	
	//canvas.clip();
	
	//canvas.beginPath();
	
	/*for (var i = 0; i < 400; i=i+5) {
		canvas.moveTo(0, i);
		canvas.lineTo(500, i);
		
	}*/
	//canvas.arc(200, 200, 75, 0, Math.PI * 2, false);
	/*var radiansFromDegrees= Math.PI / 180 * 60;
	canvas.arc(200, 200, 75, 0, radiansFromDegrees, false);*/
	
	//canvas.stroke();
	
	var saveButton= document.getElementById('save');
	var retrieveButton= document.getElementById('retrieve');
	var deleteButton= document.getElementById('delete');
	var reviewButton= document.getElementById('review');
	var clearButton= document.getElementById('clear');
	
	saveButton.addEventListener("click",saveItem);
	retrieveButton.addEventListener("click",retrieveItem);
	deleteButton.addEventListener("click",deleteItem);
	reviewButton.addEventListener("click",reviewAll);
	clearButton.addEventListener("click",clearAll);
	
	addEventListener("storage",storageReview);
}

function saveItem(){
	var key=document.getElementById('key').value;
	var value=document.getElementById('value').value;
	localStorage[key] = value;
}

function retrieveItem(){
	var data=document.getElementById('data');
	var key=document.getElementById('key').value;
	var value=localStorage[key] ;
	data.innerHTML = '<div>' +key+ ':' + value + '</div>' ;
}

function deleteItem(){
	if(confirm('Delete?')){
		var key=document.getElementById('key').value;
		localStorage.removeItem(key);
		data.innerHTML = '<div>Deleted. </div>' ;
	}
	
}

function clearAll(){
	if(confirm('Clear?')){
		localStorage.clear();
		data.innerHTML = '<div>Cleared. </div>' ;
	}
	
}

function reviewAll(){
	for (var i = 0; i < localStorage.length; i++) {
		var key=localStorage.key(i);
		var value=localStorage[key];
		data.innerHTML += '<div>' +key+ ':' + value + '</div>' ;
		
	}
	
}

function storageReview(e){
	data.innerHTML += '<div>' +
	'key:'+ e.key+ '<br/>' +
	'old vale:'+ e.oldValue+ '<br/>' +
	'new vale:'+ e.newValue+ '<br/>' +
	'url:' + e.url + '<br/>' +
	'storage area:' + e.storageArea + '<br/>' +
	'</div>' ;
}

addEventListener("load",initiate);