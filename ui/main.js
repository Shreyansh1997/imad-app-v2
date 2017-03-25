console.log('Loaded!');
//changing element
var element = document.getElementById('main-text');
element.innerHTML="Welcome";

//move img
var img=document.getElementById('madi');
var marginLeft=0;

function moveright()
{
    marginLeft=margintleft + '10';
    img.style.margingLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,100);
};