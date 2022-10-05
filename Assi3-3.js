function addEmailButton(){
    let textbox=document.createElement("input");
    textbox.setAttribute("type","email");
    document.body.appendChild(textbox);
    textbox.placeholder="enter email"
    
    let textbutton=document.createElement("input");
    textbutton.setAttribute("type","button");
    textbox.value="remove email";

    document.body.appendChild(textbutton);
    textbutton.onclick=function(){
        document.body.removeChild(textbox);
        document.body.removeChild(textbutton);
    }
}