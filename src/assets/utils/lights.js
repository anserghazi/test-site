export default function lights() {
    let lightswitch = document.getElementById("lightswitch");
    let star = document.getElementById("star")

    if (window.innerWidth >= 3400 && window.innerWidth < 3900) {
        star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3200 && window.innerWidth < 3400) {
    star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3100 && window.innerWidth < 3200) {
    star.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 2800 && window.innerWidth < 3100) {
    star.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2700 && window.innerWidth < 2800) {
    star.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2500 && window.innerWidth < 2700) {
    star.style.transitionDuration =  "9s"
    } 
    if (window.innerWidth >= 2200 && window.innerWidth < 2500) {
    star.style.transitionDuration =  "10s"
    } 
    if (window.innerWidth >= 1900 && window.innerWidth < 2200) {
    star.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 1750 && window.innerWidth < 1900) {
    star.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1600 && window.innerWidth < 1750) {
    star.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1500 && window.innerWidth < 1600) {
    star.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1400 && window.innerWidth < 1500) {
    star.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1280 && window.innerWidth < 1400) {
    star.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1080 && window.innerWidth < 1280) {
    star.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 800 && window.innerWidth < 1080) {
        star.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 700 && window.innerWidth < 800) {
    star.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 600 && window.innerWidth < 700) {
    star.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 500 && window.innerWidth < 600) {
    star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 400 && window.innerWidth < 500) {
    star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 350 && window.innerWidth < 400) {
    star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 300 && window.innerWidth < 350) {
    star.style.transitionDuration = "11s"
    } 
    if (window.innerWidth < 300) {
    star.style.transitionDuration = "11s"
    } 
    
    if (curtain === "up") {
      star.style.transform = "rotate(7155deg)"
      star.style.color = "rgb(18, 64, 231)"
      
      stars()
      setCurtain("down")
      setTimeout(function(){lightswitch.style.pointerEvents = "auto"; star.style.transitionDuration= "0.2s"}, 5000);
    }
    else if (curtain === "down") {
      star.style.transform = "rotate(-7200deg)"
      star.style.color = "white"
      star.style.transitionDuration = "5s"
      removeStars()
      setCurtain("up")
      setTimeout(function(){lightswitch.style.pointerEvents = "auto"; star.style.transitionDuration= "0.2s"}, 5000);
    }
    lightswitch.style.pointerEvents = "none"
    
  }