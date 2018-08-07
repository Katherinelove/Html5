var wenhou="the first time I meet you \n i fill in love with you";
window.alert(wenhou);
document.write("see you again");

var love="katherine";
var num=520;
alert(love+"*-*"+num);

//摄氏度转华氏温度
var ctemp=100;
var htemp=(ctemp*9/5+32);
document.write(ctemp+" degreed "+"="+htemp+" ");


//函数调用
 function doThis()
 {
	alert("doing this");
 }
 function doThat()
 {
	alert("doing that");
 }
 function cube(num)
 {
	alert(num*num*num);
 }
  function cube1(num)
 {
	return num*num*num*num;
 }
 
 function buttonReport(buttonId,buttonName,buttonValue)
 {
	var msg1="button id: "+buttonId+"\n";
	var msg2="button name: "+buttonName+"\n";
    var msg3="button value: "+buttonValue+"\n";
	alert(msg1+msg2+msg3);
 }
 function getTime()
 {
	var mydate=new Date();
	var out="";
	out+="<br/>Date:"+mydate.getDate();
	out+="<br/>Month:"+mydate.getMonth();
	out+="<br/>Fullyear:"+mydate.getFullYear();
	out+="<br/>Hour:"+mydate.getHours();
	out+="<br/>minutes:"+mydate.getMinutes();
	out+="<br/>seconds:"+mydate.getSeconds();
	document.write(out);
	document.write("<br />"+mydate);
	document.write("<br />object created on day number:"+mydate.getDay()+"<br />");
	mydate.setDate(5);
	document.write("after amending date to 5th,the day number is:"+mydate.getDay()+"<br />");
 }
 
function myfc()
{
	var num1=12.55
	mutiple=100   //100倍
	document.write("12.55上取整"+Math.ceil(num1)+"<br/>");
	document.write("12.55下取整"+Math.floor(num1)+"<br/>");
	document.write("12.55四舍五入"+Math.round(num1)+"<br/>");
	document.write("min(1,2,3)"+Math.min(1,2,3)+"<br/>");
	document.write("0-1随机数"+Math.random()+"<br />");
	document.write("1-100随机数"+Math.round(random()*multiline)+"<br/>");   //放大100倍再四舍五入
}

function myString()
{
	var str1="24.5";	
	var num=14;
	document.write("14是不是有限的:"+isFinite(num)+"</br />");
	document.write("parseInt(24.5)"+parseInt(str1)+"<br />");
	document.write("parseFloat(24.5)"+parseFloat(str1)+"<br />");
	
	str="kate hong long time no see!";
	
	document.write(str.indexOf("long")+" length-"+str.length+"<br />");

}
function jionString()
{
	var str1="zeng";
	var str2="shuai";
	document.write("连接"+str1.concat(str2)+"<br />");

}

function detectSpam()
{
	var text1=prompt("请输入一段文字：");
	text1=text1.toLowerCase();
	if(text1.indexOf("long")<0)
		document.write("输入的语句中没有long")
	else
		document.write("输入的语句中有long")
}
