var vid = document.getElementById("video")
var bot = document.getElementsByClassName("botao")[0]
var cont2 = document.getElementsByClassName("container_2")[0]

vid.onended = (event) =>{
    
    for (opacity = 0; opacity <= 1; opacity = opacity + 0.1) 
    {           
        setTimeout(function(){bot.style.opacity = opacity;},1500)     
        setTimeout(function(){cont2.style.opacity = opacity;},1500)                     
    }   
}