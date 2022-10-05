
//4) Consider the following scenario: 
// There are 3 functions, namely, GetVideo(), AddIntro() and AddSummary(). Each method returns a Promise. The Promise when resolved must return a string after 3 seconds like this: 
GetVideo()          //à returns Got Video 
AddIntro()         //à returns Intro Added 
AddSummary()      //à returns Summary Added 
 
// Invoke the GetVideo() function. The final result must be displayed as: 
// Got Video, Intro Added, Summary Added 

function GetVideo(){
    return new Promise(()=>{
        setTimeout(()=>{
            console.log("Get video");
        },5000)
    })
}
function AddIntro(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Intro added");
        },5000)
    })
}
function AddSummary(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Summary added");
        },5000)
    })
}
GetVideo();
AddIntro();
AddSummary();