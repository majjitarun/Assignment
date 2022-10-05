//5) Rewrite the previous assignment using async and await keywords

async function myfunction(){
    function GetVideo(){
        console.log("Got video");
    }
    function AddIntro(){
        return console.log("Intro added");
    }
    function AddSummary(){
        return console.log("Summary added");
    
    }
    GetVideo();
    await AddIntro();
    AddSummary();
}
myfunction();
console.log("checking the await function");