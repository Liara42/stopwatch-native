let timer = document.getElementById("timer");
let startMe = document.getElementById("start");
let stopMe = document.getElementById("stop");

startMe.addEventListener("click",function(){
    sw.start();
})

stopMe.addEventListener("click",function(){
    sw.stop();
})