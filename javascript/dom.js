

 //DOM Methods : we can get elemnets by their id, class and name

//getElementsById
p=document.getElementById("example").innerHTML="welcome";
console.log(p);
p=document.getElementById("example").innerHTML=window.innerWidth+"px<br"; //gives width
console.log(p);
p=document.getElementById("example").innerHTML=window.innerHeight+"px<br";//gives height
console.log(p);p=document.getElementById("example").innerHTML=window.ActiveXObject;
console.log(p);
p=document.getElementById("example").innerHTML=screen.colorDepth;
console.log(p);
p=document.getElementById("example").innerHTML=screen.pixelDepth;
console.log(p);
//location
p=document.getElementById("example").innerHTML=window.location.href;
console.log(p);
//pathname
p=document.getElementById("example").innerHTML=window.location.pathname;
console.log(p);
//hostname
p=document.getElementById("example").innerHTML=window.location.hostname;
console.log(p);

//getElementByClassName : to get all elements/ multiple elements
var sample=document.getElementsByClassName("container").innerHTML="Wonder";
console.log(sample);
console.log(document.getElementsByClassName("container1").innerHTML="Hello");
//getElementByTagName 
console.log(document.getElementsByTagName("h1"));
// linking
var forward=()=>{
    window.history.forward();
}
forward();




