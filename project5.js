
function loco(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
 el: document.querySelector(".main"),
 smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
 scrollTop(value) {
   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
 }, // we don't have to define a scrollLeft because we're only scrolling vertically.
 getBoundingClientRect() {
   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
 },
 // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
 pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

var cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",function(a)
{
   cursor.style.left=a.x+20+"px"
   cursor.style.top=a.y+20+"px"
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

tl.from([".page1>.remaing-part>button"],
{
   x:100,
   opacity:0,
   
})




// gsap.from("#one>h1",
// {
// y:300,
// opacity:0,
// color:"red",
// ScrollTrigger:{
//    scrub: true,
//    trigger:"#one>h1",
//    start:"top 10%"
// }}
// )

// gsap.from([".page2>#one>h1",".page2>#one>h4"],
// {
// y:100,
// opacity:0,
// ScrollTrigger:{
//    scrub: true,
//    trigger:[".page2>#one>h1",".page2>#one>h4"],
//    start:"top 30%"
// }}
// )


// gsap.from([".page2>#two>h1",".page2>#two>h4"],
// {
// y:100,
// opacity:0,
// ScrollTrigger:{
//    scrub: true,
//    trigger:[".page2>#two>h1",".page2>#two>h4"],
//    start:"top 30%"
// }}
// )

// gsap.from([".page2>#three>h1",".page2>#three>h4"],
// {
// y:100,
// opacity:0,
// ScrollTrigger:{
//    scrub: true,
//    trigger:[".page2>#three>h1",".page2>#three>h4"],
//    start:"top 30%"
// }}
// )


var one=document.querySelector("#one")


one.addEventListener("mouseenter",function(a)
{
var att= a.target.getAttribute("data-image");
console.log("Image path:", att);
cursor.style.height="500px";
cursor.style.width="500px";
cursor.style.borderRadius="0";
cursor.style.rotate="30px"
cursor.style.backgroundImage=`url(${att})`
})


one.addEventListener("mouseleave",function(a)
{
cursor.style.height="1px";
cursor.style.width="1px";
cursor.style.borderRadius="50%"
cursor.style.backgroundImage=`none`

})



var two=document.querySelector("#two")


two.addEventListener("mouseenter",function(a)
{
var att= a.target.getAttribute("data-image");  ///very important study again about target
console.log("Image path:", att);
cursor.style.height="500px";
cursor.style.width="500px";
cursor.style.borderRadius="0";
cursor.style.rotate="30px"
cursor.style.backgroundImage=`url(${att})`
})


two.addEventListener("mouseleave",function(a)
{
cursor.style.height="1px";
cursor.style.width="1px";
cursor.style.borderRadius="50%";
cursor.style.backgroundImage=`none`

})



var three=document.querySelector("#three")


three.addEventListener("mouseenter",function(a)
{
var att= a.target.getAttribute("data-image");  ///very important study again about target
console.log("Image path:", att);
cursor.style.height="500px";
cursor.style.width="500px";
cursor.style.borderRadius="0";
cursor.style.transformX= "rotate(10deg)";
cursor.style.transformY= "rotate(10deg)";
cursor.style.backgroundImage=`url(${att})`
})


three.addEventListener("mouseleave",function(a)
{
cursor.style.height="2vh";
cursor.style.width="2vh";
cursor.style.borderRadius="1vh"
cursor.style.backgroundImage=`none`

})





