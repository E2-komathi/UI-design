function addElement() {
	var Uname=document.getElementById('text').value;
    const Name = {
        Uname: Uname,     //array
	}

	if(Uname=="")
	{
		alert("Please Enter the UserName");
	}
	else{
		var li = document.createElement("li"); //add the child to the list
		var inVal = document.getElementById("text").value;
		var t = document.createTextNode(inVal);
		li.appendChild(t);        
		document.getElementById("myUL").appendChild(li); 

		window.localStorage.setItem(Uname,JSON.stringify(Name)); //local storage

		document.getElementById("text").value = "";

	}
 }

 
 // to remove the  user
  function removeItem()
  {
  var dlt = document.getElementById('myUL'); //delete the last element

  var Uname = document.getElementById('removeKey').value;
  localStorage.removeItem(Uname)

  dlt.removeChild(dlt.lastElementChild);
  alert("Sure you want to delete the User !");

  document.getElementById("removeKey").value = "";
 } 