var heart=document.querySelector(".heartz")
var flag=true;

if(flag){
    heart.onclick=function(){
        if(flag){
            heart.style.background="red";
            heart.style.opacity="1";
            flag=false;
        }else{
        heart.style.opacity="0";
        flag=true;
      } 
    }
}