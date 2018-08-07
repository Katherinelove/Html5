function countlistitems()
{
	var olelement=document.getElementById("toDoList");
	var pelement=document.getElementById("para1");
	var lielement=document.getElementById("li1");
	var divelement=document.getElementById("div");
	
	//document.write(divelement.getAttribute("title"));
	
	document.write("li parentNode type: "+lielement.parentNode.nodeType+"<br />")
	document.write("li parentNode name: "+lielement.parentNode.nodeName+"<br />")
	document.write("li type: "+lielement.nodeType+"<br />")
	document.write("li name: "+lielement.nodeName+"<br />")

	
	document.write("ol  type: "+olelement.nodeType+"<br />")
	document.write("ol  name: "+olelement.nodeName+"<br />")
	
	document.write("ol子节点长度： "+olelement.childNodes.length+"<br />")
	document.write("ol firstChild type："+olelement.firstChild.nodeType+"<br />")      //3
	document.write("ol firstChild name: "+olelement.firstChild.nodeName+"<br />")     
	document.write("ol firstChild value: "+olelement.firstChild.nodeValue+"<br />")     //一般用来返回文本节点里的内容
	
	document.write("ol parentNode type: "+olelement.parentNode.nodeType+"<br />")	
	document.write("ol parentNode name: "+olelement.parentNode.nodeName+"<br />")
	document.write("ol parentNode value: "+olelement.parentNode.nodeValue+"<br />")
	
	document.write("p type: "+pelement.nodeType+"<br />")
	document.write("p name: "+pelement.nodeName+"<br />")
	
	//法1
	var count=0
	for(var i=0;i<olelement.childNodes.length;i++)
	{
		if(olelement.childNodes[i].nodeType==1)
			count++;
	}
	document.write("the odreed list contains "+count+" items!  <br />");
	//法2
	var listitems=olelement.getElementsByTagName("li");
	document.write("the odered list(ol) contains "+listitems.length+" items! <br />");
	
	

	var text="";
	document.write("p子节点的长度： "+pelement.childNodes.length+"<br />")
	for(var i=0;i<pelement.childNodes.length;i++)
	{
		if(pelement.childNodes[i].nodeType==3)
		{
			text+=pelement.childNodes[i].nodeValue;
		}
	}
	document.write("p子节点中的文本节点："+text+"<br />")
	

	//创建节点插入修改节点
	var newtext=document.createTextNode("kate love you!");
	divelement.appendChild(newtext);
	
}