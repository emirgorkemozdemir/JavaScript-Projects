const btntoggle = document.getElementById("mynavtoggle");
const linksection = document.getElementById("mylinksdiv");

btntoggle.addEventListener("click",function(){
   if(linksection.classList.contains("myLinks")){
      linksection.classList.remove("myLinks");
      linksection.classList.add("openLinks");
   }
   else{
    linksection.classList.remove("openLinks");
    linksection.classList.add("myLinks"); 
   }
});