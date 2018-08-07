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
 
 function myArray()
 {
	var myArray1=["Monday","Tuesday","Wednesday"];
	var myArray2=["Thursday","Friday"];
	var myArray3=[8,4,6,3,9];
	document.write("length:"+myArray1.length+"<br />");
	document.write("concat():"+myArray1.concat(myArray2)+"<br />");
	document.write("join():"+myArray1.join()+"<br />");
	document.write("join('-'):"+myArray1.join("-")+"<br />");
	document.write("tostring():"+myArray1.toString()+"<br />");
	document.write("indexOf():"+myArray1.indexOf("Tuesday")+"<br />");
	document.write("slice():"+myArray1.slice(0,2)+"<br />");
	document.write("sort():"+myArray3.sort()+"<br />");
	myArray1.splice(1,0,"love")
	document.write("splice():"+myArray1+"<br />");
 }
 
 function ifApplication(input)
 {
	document.write(">64 too higher;>40 middle;else too lower"+"<br />");
	if (input>64)
	{
		msg="temp is too higher";
	}
	else if(input>40)
	{
		msg="middle";
	}
	else
	{
		msg="too lower";
	}
	return msg
 }
 
 function mySwitch(input_color)
 {
	 switch(input_color)
	 {
		 case "red":msg1="the color is red!";
		 case "green":msg1="the color is green";
		 case "white":msg1="the color is white";
	     default:msg1="invalue color";
	 }
	 return msg1;
 }
 function myFor1()
 {
	document.write("sum1 100)：")
	var sum=0
	for(var i=1;i<101;i++)
	{
		sum+=i;
	}
	document.write(sum) 
 }
 
 function hide(element_id)
 {
	 document.getElementById(element_id).style.display="none";
 }
 
 function Car(make,year,color)
 {
	 this.make=make
	 this.year=year
	 this.color=color
	 this.change_color=function (new_color)
	 {
		 this.color=new_color
	 }	 
 }
 
 function usingClass()
 {
	 mycar=new Car("changan","2017","white");
	 Car.prototype.sayhello=function ()
	 {
		 alert("hello");
	 }
	 document.write(mycar.color);mycar.change_color("green");
	 document.write(mycar.color);
	 mycar.sayhello();
 }

 
 function Pet()
 {
	 this.animal="";
	 this.name="";
	 this.setanimal=function (newanimal)
	 {
		 this.animal=newanimal;
	 }
	 this.setname=function (newname)
	 {
		 this.name=newname;
	 }
 }
 
 function Dog()
 {
	 this.breed="";
	 this.setbreed=function (newbreed)
	 {
		 this.breed=newbreed;
	 }
 }
 
 function app1()
 {
	 Dog.prototype=new Pet();
	 var mydog=new Dog();
	 mydog.setname("kate");
	 mydog.setbreed("greyhound");
	 document.write(mydog.name+"------"+mydog.breed);
 }
 
 
 //逆序输出，利用prototype扩展内置对象
 function app2()
 {
	 String.prototype.backword=function ()
	 {
		 out="";
		 for(var i=this.length-1;i>=0;i--)
		 {
			 out+=this.substr(i,1);
		 }
		 return out;
	 }
	 var str=prompt("enter a sting to reverse this:");
	 document.write(str.backword());
 }
 
