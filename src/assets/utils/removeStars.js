export default function removeStars() {
    // if (window.location.pathname !== "/") {
    //   return
    // }
    let stars_1 = document.getElementsByClassName("art_1")[0]
    let stars_2 = document.getElementsByClassName("art_2")[0]
    
    stars_1.style.transform = "translateY(-180%)"
    stars_2.style.transform = "translateY(-180%)"
    if (window.innerWidth >= 3400 && window.innerWidth < 3900) {
      stars_1.style.transform = "translateY(-80%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-75%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3200 && window.innerWidth < 3400) {
      stars_1.style.transform = "translateY(-90%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-80%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3100 && window.innerWidth < 3200) {
      stars_1.style.transform = "translateY(-95%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(-85%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 2800 && window.innerWidth < 3100) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "13s"
      stars_2.style.transform = "translateY(-95%)"
      stars_2.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2700 && window.innerWidth < 2800) {
      stars_1.style.transform = "translateY(-105%)"
      stars_1.style.transitionDuration = "13s"
      stars_2.style.transform = "translateY(-100%)"
      stars_2.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2500 && window.innerWidth < 2700) {
      stars_1.style.transform = "translateY(-120%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(-120%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 2200 && window.innerWidth < 2500) {
      stars_1.style.transform = "translateY(-115%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(-105%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 1900 && window.innerWidth < 2200) {
      stars_1.style.transform = "translateY(-120%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(-110%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 1750 && window.innerWidth < 1900) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(-100%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1600 && window.innerWidth < 1750) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(-100%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1500 && window.innerWidth < 1600) {
      stars_1.style.transform = "translateY(-90%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(-90%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1400 && window.innerWidth < 1500) {
      stars_1.style.transform = "translateY(-90%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(-90%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1280 && window.innerWidth < 1400) {
      stars_1.style.transform = "translateY(-70%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(-70%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 800 && window.innerWidth < 1280) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(-110%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 700 && window.innerWidth < 800) {
      stars_1.style.transform = "translateY(-70%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(-70%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 600 && window.innerWidth < 700) {
      stars_1.style.transform = "translateY(-75%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(-80%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 500 && window.innerWidth < 600) {
      stars_1.style.transform = "translateY(-125%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 400 && window.innerWidth < 500) {
      stars_1.style.transform = "translateY(-120%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 350 && window.innerWidth < 400) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-95%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 300 && window.innerWidth < 350) {
      stars_1.style.transform = "translateY(-100%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-95%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth < 300) {
      stars_1.style.transform = "translateY(-130%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(-105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    stars_1.style.transitionDuration = "11s"
    stars_2.style.transitionDuration = "11s"
  }