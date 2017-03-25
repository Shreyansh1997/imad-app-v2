console.log('Loaded!');
//changing element
var element = document.getElementById('main-text');
element.innerHTML="Welcome";

//move img
var img = document.getElementById('madi');
var marginLeft = 0;

function move() {
    Left = Left + 10 ;
    img.style.marginLeft = Left + 'px';
}
img.onclick = function(){
    var interval=setInterval(move, 100);
};