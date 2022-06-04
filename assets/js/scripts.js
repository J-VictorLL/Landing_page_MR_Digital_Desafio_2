var vid = document.getElementById("video")
var bot = document.getElementsByClassName("botao")[0]
var cont2 = document.getElementsByClassName("container_2")[0]

vid.onplay = (event) =>{
    if(vid.currentTime>(vid.duration/2)){
        setTimeout(function(){
            bot.style.filter = "grayscale(0%)";
            bot.style.cursor ="pointer";
            bot.removeAttribute("disabled");
            cont2.style.contentVisibility = "visible";
        },15000);
    }
}