function Login(){
    let username=document.getElementById('name').value;
    let password=document.getElementById('password').value;
    let invalidMessage=document.getElementById('invalidMessage');

    if(username==='citiustech' && password==='citiustech'){
        window.open('https://www.google.com/');
    }
    else{
        invalidMessage.innerHTML='invalid credentials <br>username and password';
    }
}