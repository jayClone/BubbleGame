var time=30;
var hits=0;
var score=0;
function bubble(){
var burst="";
for (var i = 0; i < 192; i++) {
    var num=Math.floor(Math.random()*10)
    burst += `<div class="bubble">${num}</div>`
}
document.querySelector("#plateBottom").innerHTML=burst;
}
function runtimer(){
var timer = setInterval(function(){
    if(time>0){
    time--;
    document.querySelector("#timeint").textContent=time;
    }
    else{
        clearInterval(time);
        document.querySelector("#plateBottom").innerHTML=`<h1>GAME  KHATAM  LODU</h1>`
    }
},1000)
}
function scoring(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function hit(){
    hits= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hits;
}
document.querySelector("#plateBottom").addEventListener("click",function(detail){
    var clicked=(Number(detail.target.textContent))
    if (clicked===hits) {
        scoring();
        bubble();
        hit();
    }
})
bubble();
runtimer();
hit();