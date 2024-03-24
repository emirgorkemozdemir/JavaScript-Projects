const video = document.getElementById("myvid");
const btn = document.getElementById("mybtn");

btn.addEventListener("click" , function(){
  if(video.paused){
    video.play();
    btn.innerHTML="Pause";
  }
  else{
    video.pause();
    btn.innerHTML="Play";
  }
});
