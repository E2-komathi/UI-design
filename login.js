function errorMessage() 
        {
    
        var name = document.getElementById("unerr")
        
        if ((document.getElementById("username").value==""))
        {
            name.textContent = "!Enter your Username"
           
        } 
        else 
        {
             name.textContent = ""
        }
       
    
    }
   
    function errorMsg(){
    
        var upass = document.getElementById("paserr")
        
        if ((document.getElementById("userpass").value==""))
        {
            upass.textContent = "!Enter your password"
          
        }
        else {
            upass.textContent = ""
        } 
    
    }

