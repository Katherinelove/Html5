function kate()
{
	var jsonObject={"l":"shuai","a":"zeng","s":"wei"};  //json对象不能是数字开头，除下划线和美元符号外，不能使用其他符号
	alert(jsonObject.l);   
}

function json_parse()
{
	var mary='{"height":1.9,"age":20,"eyecoler":"brown"}';
	var myObiect=JSON.parse(mary);
	alert(myObiect);
	var out="";
	for (i in myObiect)
	{
		out+=(i+"="+myObiect[i]+"\n");
	}
	alert(out);
	
	var my_object1=JSON.parse('[1,2,3,4]');
	alert(my_object1);
}

function application()
{
	var booklist={"booklist":[{"title":"Foundation","author":"zengshuai"},
		{"title":"Dune","author":"kathrine"},
		{"title":"Eon","author":"Greg bear"}]
		};
	var out="";
	var books=booklist.booklist
	for(var i=0;i<books.length;i++)
	{
		var booknumber=i+1
		out+="Book "+booknumber+" is: "+books[i].title+" by "+books[i].author+"\n";
	}
	alert(out);
}

function instance()
{
	function class_person(height,age,eyecolor)
	{
		this.height=height;
		this.age=age;
		this.eyecolor=eyecolor
	}
	var person1=new class_person(180,20,"red")
	alert(person1.height)
	alert(JSON.stringify([1,2,3,4]))
	alert(JSON.stringify(person1))
}