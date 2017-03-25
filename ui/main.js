console.log('Loaded!');
//changing element
var element = document.getElementById('main-text');
element.innerHTML="Welcome";

//move img
var img=document.getElementById('img');
img.onclick=function()
{
    img.style.marginLeft='100px';
};