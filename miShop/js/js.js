var oBox=document.getElementById("box");
var oBtn=document.getElementById("box_hover");

oBox.onmouseover=function(){
	oBtn.style.display="block";
};
oBox.onmouseout=function(){
	oBtn.style.display="none";
};
