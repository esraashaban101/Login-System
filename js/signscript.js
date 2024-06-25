var inputmail = document.getElementById("inputmail");
var inputpass = document.getElementById("inputpass");
var inputname = document.getElementById("inputname");
var signbtn = document.getElementById("signbtn");
// var loginbtn = document.getElementById("loginbtn");


var users = [];
if(localStorage.getItem('all users')!==null)
users = JSON.parse(localStorage.getItem('all users'));

signbtn.addEventListener('click', function () {
    storeData();
})
function storeData() {
    if (validData() === true) {
        userinfo =
        {
            username: inputname.value,
            email: inputmail.value,
            password: inputpass.value

        }
        if (users.length === 0) {
            users.push(userinfo);
            localStorage.setItem('all users', JSON.stringify(users));
           
        }
        else {
            var founded = false;
            for (var i = 0; i < users.length; i++) {
                if (userinfo.email === users[i].email) {
                    alert("user already exist");
                    founded = true
                    break;
                }
            }
            if (founded === false) {
                users.push(userinfo);
                localStorage.setItem('all users', JSON.stringify(users));
            }
        }
       
        clearData();
        clearmessage();
        
    }
    else 
    {

        clearmessage()
    }
       

       
    }
function clearmessage()
{
    var elements = document.getElementsByClassName('d-none');
    var arr = Array.from(elements);

    if(validData()!==true)
        {
  
        for (var i = 0; i < arr.length; i++) 
            {
            arr[i].classList.replace('d-none','d-block');
           
            }
        }
        else
        clear()
       
}
function clear()
{
    elements = document.getElementsByClassName('d-block');
    arr = Array.from(elements) 
    
    for (var i = 0; i < arr.length; i++) 
        {
           
            arr[i].classList.replace('d-block','d-none');
        } 
}

function clearData() {
    inputname.value = "";
    inputmail.value = "";
    inputpass.value = "";
}


function validData() {
    var regexname = /[a-z]{3,}/
    var text1 = inputname.value;
    var regexmail = /^[a-z]{1,}@gmail\.com$/
    var text2 = inputmail.value;
    var regexpass = /^[a-z]{1,}$/
    var text3 = inputpass.value;
    if (regexname.test(text1) === true && regexmail.test(text2) === true && regexpass.test(text3) === true)
        return true;
    else {

        return false;
    }

}