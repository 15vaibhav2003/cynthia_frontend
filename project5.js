


var cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",function(a)
{
   cursor.style.left=a.x+"px"
   cursor.style.top=a.y+"px"
})




function time(){
   var a=0;
   setInterval(function(){
      a=a+Math.floor(Math.random()*10)
      if(a<100)
      {
         document.querySelector(".loader>h1").innerHTML=a+"%"
      }
      else
      {
         a=100
         document.querySelector(".loader>h1").innerHTML=a+"%"
      }
   },150)
}

time();


var tl=gsap.timeline()

tl.to(".loader",
{
   top:"-100vh",
   delay:0.5,
   duration:2
})

tl.from([".page1>.remaing-part>h1"],
{
   y:100,
   opacity:0,
   
})

tl.from([".page1>.remaing-part>h2"],
{
   y:100,
   opacity:0,
   
})

tl.from([".page1>.remaing-part>h5"],
{
   y:-50,
   opacity:0,
   
})

tl.from([".page1>.remaing-part>h3"],
{
   x:100,
   opacity:0,
   
})


tl.from([".page1>.remaing-part>h4"],
{
   x:100,
   opacity:0,
   
})

tl.from([".page1>.remaing-part>h6"],
{
   x:100,
   opacity:0,
   
})


