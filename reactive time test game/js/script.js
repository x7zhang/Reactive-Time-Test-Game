function getRColor(){
	var items="0123456789ABCDEF".split('');
	var color="#";
	for(var i=0;i!=6;i++){
		color+=items[Math.round(Math.random()*15)];
	}
	return color;
} // Get color of the ball
var theBox=document.getElementById("box"); 
var timeStart=0;
var timeFinish=0;
function apBox(){
	setTimeout(function(){
		theBox.style.backgroundColor=getRColor();
		theBox.style.borderRadius=Math.floor(Math.random()*2)*100+"px";
		theBox.style.left=Math.floor(Math.random()*1000)+"px";
		theBox.style.top=Math.floor(Math.random()*300)+"px";
		theBox.style.display="block";
		timeStart=Date.now();
	},Math.random()*2000);
} // Create the ball
apBox();
theBox.onclick=function(){
	timeFinish=Date.now();
	this.style.display="none";
	document.getElementById("time").innerHTML=timeFinish-timeStart;
	apBox();
} // Caculate the reactive time
