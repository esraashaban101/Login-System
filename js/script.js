var inputmail = document.getElementById("inputmail");
var inputpass = document.getElementById("inputpass");
var inputname = document.getElementById("inputname");
var signbtn = document.getElementById("signbtn");
var loginbtn = document.getElementById("loginbtn");
var users = JSON.parse(localStorage.getItem('all users'));
loginbtn.addEventListener('click', function () {
    var email = inputmail.value;
    var password = inputpass.value;
    var founded=false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && password === users[i].password) {
           
           
            window.location.href = 'welcome.html';
            founded=true ;
            clearData()
            break;

        }
        else if(users[i].email === email && password !== users[i].password)
            {
                 document.getElementById("passmessage").classList.remove('d-none');
                  
                  founded = true;
            }
        
    }
       if(founded===false)
        {
            alert("user is not exist");
        }
   
})


function clearData()
{
    
    inputmail.value="";
    inputpass.value = "";
}




