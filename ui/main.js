console.log('Loaded!');
//changing element
var element = document.getElementById('main-text');
element.innerHTML="Welcome";

//move img
var img = document.getElementById('madi');
var marginLeft = 0;

function moveright(){
    marginLeft = margintLeft + 10 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval=setInterval(moveright, 100);
};