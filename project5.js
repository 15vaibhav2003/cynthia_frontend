var cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",function(a)
{
   cursor.style.left=a.x+20+"px"
   cursor.style.top=a.y+20+"px"
})

