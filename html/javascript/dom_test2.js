function main()
{
	var newli=document.createElement("li");
	var text=document.createTextNode("katherine");
	newli.appendChild(text);
	var ulelement=document.getElementById("ul1");
	ulelement.insertBefore(newli,ulelement.childNodes[0]);
}
function myfc()
{
	var newH2=document.createElement("H2");
	var title=document.createTextNode("see you again");
	newH2.appendChild(title);
	var divelement=document.getElementById("div1");
	var para2=document.getElementById("para2");
	divelement.insertBefore(newH2,para2);
	//divelement.replaceChild(newH2,para2);
}

function replaceItem()
{
	var newp=document.createElement("p");
	var text1=document.createTextNode("小鸡炖蘑菇");
	newp.appendChild(text1);
	var divelement1=document.getElementById("div1");
	var para1=document.getElementById("para1");
	divelement1.replaceChild(newp,para1);
}

function remove()
{
	var divelement=document.getElementById("div1");
	var para2=document.getElementById("para2");
	divelement.removeChild(para2);
}

