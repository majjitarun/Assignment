document.querySelector('#image').addEventListener('mouseover',function(){
    document.getElementById('image').height="800";
    document.getElementById('image').weight="800";
});
document.querySelector('#image').addEventListener('mouseout',function(){
    document.getElementById('image').height="200";
    document.getElementById('image').weight="200";
});