console.log('Loaded!');
//changing element
var element = document.getElementById('main-text');
element.innerHTML="Welcome";

//move img
var img = document.getElementById('madi');
var Left = 0;

function move() {
    marginLeft = Left + 10 ;
    img.style.marginLeft = Left + 'px';
}
img.onclick = function(){
    var interval=setInterval(move, 100);
};