var Inter = setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
    if(!document.getElementsByTagName("iframe")[i].id.toUpperCase().includes("GAME")){
  document.getElementsByTagName("iframe")[i].remove();
    }
document.getElementsByTagName("video")[i].remove();
  }
 }, 100);
//Dont ask, ok? It completely destroys youtube :)
