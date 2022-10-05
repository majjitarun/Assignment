
document.addEventListener('keydown', function(event)
{
  var code = event.keyCode || event.which;
  if (code === 9) {  

    let userName = document.getElementById("idTextBox").value;
    let password = document.getElementById("passwordTextBox").value;

    if (userName.toUpperCase() != 'CITIUSTECH' && userName !=''){
                 document.getElementById("span1").textContent = "invalid id"
                 document.getElementById('span2').style.display = 'none'
             }
    else if(password.toUpperCase() != 'CITIUSTECH' &&  password != ''){
                 document.getElementById("span2").textContent = "invalid password"
                 document.getElementById('span1').style.display = 'none'
        }
  }

  if(document.getElementById("idTextBox").value != "" &&
      document.getElementById("passwordTextBox").value != "" ){
        document.getElementById("submitButton").style.display = 'inline'
    }

    else{
        document.getElementById("submitButton").style.display = 'none'
    }

});

document.addEventListener('keydown',function(space){

    var blankSpace = space.keyCode || event.which;
    if (blankSpace === 32){
        alert("cannot have space")
    }
})
  
document.getElementById("submitButton").addEventListener('click',function(){
    let userName = document.getElementById("idTextBox").value;
     let password = document.getElementById("passwordTextBox").value;
 
     if (userName.toUpperCase()  == 'CITIUSTECH' && password.toUpperCase()  == 'CITIUSTECH'){
         window.open("https://www.google.com/")
     }
     else if (userName == 'citiustech'){
         document.getElementById("span2").textContent = "invalid password"
     }
     else{
         document.getElementById("span1").textContent = "invalid id"
     }
 })
