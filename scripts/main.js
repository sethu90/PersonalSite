var myImage = document.querySelector("img");
myImage.onclick=function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc==="images/sethupic2.jpg"){
        myImage.setAttribute("src","images/sethupic.jpg");
    }
    else
        {
            myImage.setAttribute("src","images/sethupic2.jpg");
        }
  
var myButton=document.querySelector("button");
     myButton.onclick = function(){
      alert("Thank you for visiting");
    }
}