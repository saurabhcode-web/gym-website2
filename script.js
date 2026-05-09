gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({paused:true}) 
tl.to(".menu",{
  right:"0%",
  duration:0.5
})
tl.from(".menu-comman", {
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 0.5,
  
})
tl.reverse()
let menu = document.querySelector(".menu-toggle")
menu.addEventListener("click",function (param) {
 tl.reversed(!tl.reversed());
menu.classList.toggle("active");
})

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  
  const email = document.getElementById("email").value;
  
  const text = document.getElementById("text-message").value;
  
  const message =
    `New Gym Join Request

Name: ${name}
Email: ${email}
Message: ${text}`;
  
  const whatsappNumber = "919838962045";
  
  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
console.log("working")
  
});
let head = document.querySelector("header") 
let lastScroll = 0;
window.addEventListener("scroll", function (param) {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    head.style.transform = "translateY(-100%)"
  } else if (currentScroll < lastScroll) {
    head.style.transform = "translateY(0%)"
  } 
  lastScroll = currentScroll;
})



window.addEventListener("load", function() {
  
  let loader = document.querySelector(".loader");
  
  loader.style.top = "-100%";
  
});
