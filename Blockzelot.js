var Inter = setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
document.getElementsByTagName("video")[i].remove();
  }
 }, 100);
//Dont ask, ok? It completely destroys youtube :)
