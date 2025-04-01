import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "@fontsource/yantramanav"
import "@fontsource/material-icons"

import ContextConsumer from "../components/Context.js"

const Navbar = ({setLightSwitch }) => {

  let path = ""
  if (typeof window !== "undefined") {
    path = window.location.pathname.split("/")[1]
  }
  if (path === "resume") {
    changeAbout()
  }
  if (path === "projects") {
    changeProjects()
  }
  if (path === "articles") {
    changeWriting()
  }


function toggleNav() {
  if (document.getElementById("hamburger").textContent === "menu_icon") {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("hamburger").textContent = "close"
  } else if (document.getElementById("hamburger").textContent === "close") {
    document.getElementById("myNav").style.display = "none";
    document.getElementById("hamburger").textContent = "menu_icon"
  }
  

}



function closeNav() {
  setTimeout(toggleNav, 50)
  
  

}




  if (path === "" && (typeof document !== "undefined")) {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    
    if (aboutIcon && aboutLink && projectsIcon && projectsLink && writingIcon && writingLink) {
      aboutLink.style.borderColor = "rgb(17, 18, 19)"
      projectsLink.style.borderColor = "rgb(17, 18, 19)"
      writingLink.style.borderColor = "rgb(17, 18, 19)"

      aboutLink.style.backgroundColor = "rgb(17, 18, 19)"
      projectsLink.style.backgroundColor = "rgb(17, 18, 19)"
      writingLink.style.backgroundColor = "rgb(17, 18, 19)"
      
      
      aboutIcon.style.transitionDuration = "0.2s"
      aboutLink.style.transitionDuration = "0.2s"
      projectsIcon.style.transitionDuration = "0.2s"
      projectsLink.style.transitionDuration = "0.2s"
      writingIcon.style.transitionDuration = "0.2s"
      writingLink.style.transitionDuration = "0.2s"
      writingIcon.style.transform = "none"
      aboutIcon.textContent = "import_contacts"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
      writingIcon.style.transition = "transform 0s"
      writingIcon.textContent = "receipt_long"
      writingIcon.style.color = "white"
      writingLink.style.color = "white"
      writingLink.style.textDecorationColor = "rgb(17, 18, 19)"
    }
    
  }
  console.log(path)

  function hoverAbout() {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    if (aboutIcon.textContent == "import_contacts" || path === "resume") {
      aboutIcon.textContent = "auto_stories"
      // aboutIcon.style.color = "#FFA500"
      // aboutLink.style.color = "#FFA500"
      // aboutLink.style.textDecoration = "underline"
      
      aboutLink.style.textDecorationColor = "rgb(9, 9, 9)"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.backgroundColor = "rgb(9, 9, 9)"
    } else {
      aboutIcon.textContent = "import_contacts"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.backgroundColor = "rgb(17, 18, 19)"
      aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
    }
    if (path === "resume") {
      aboutLink.style.textDecorationColor = "#FFA500"
    }
  }
  function hoverProjects() {
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    if (projectsIcon.textContent == "terminal" || path === "projects") {
      projectsIcon.style.transitionDuration = "0s"
      projectsIcon.style.transition = "color 0.2s"
      projectsIcon.textContent = "data_object"
      // projectsIcon.style.color = "#FFA500"
      // projectsLink.style.color = "#FFA500"
      projectsLink.style.textDecorationColor = "rgb(9, 9, 9)"
      projectsLink.style.textUnderlineOffset = "5px"
      projectsLink.style.textDecorationThickness = "2px"
      projectsLink.style.backgroundColor = "rgb(9, 9, 9)"
    } else {
      projectsIcon.style.transition = "color 0.2s"
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
      projectsLink.style.backgroundColor = "rgb(17, 18, 19)"
    }
    if (path === "projects") {
      projectsLink.style.textDecorationColor = "#FFA500"
    }
  }
  function hoverGithub() {
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    if (githubIcon.textContent == "tv" ) {
      githubIcon.textContent = "open_in_new"
      githubIcon.style.pointerEvents = "none"
      githubLink.style.pointerEvents = "none"
      // githubIcon.style.color = "#FFA500"
      // githubLink.style.color = "#FFA500"
      // githubLink.style.textDecorationColor = "#FFA500"
      githubLink.style.textDecorationColor = "rgb(9, 9, 9)"
      githubLink.style.textUnderlineOffset = "5px"
      githubLink.style.textDecorationThickness = "2px"
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "white"
      githubLink.style.color = "white"
      githubLink.style.textDecorationColor = "rgb(17, 18, 19)"
    }
  }
  function hoverWriting() {
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    if (writingIcon.textContent == "receipt_long" || path === "articles") {
      writingIcon.style.transitionDuration = "0.2s"
      writingIcon.style.transform = "scale(1, 1.2)"
      writingIcon.style.transition = "transform 0s"
      writingLink.style.transitionDuration = "0.2s"
      
      writingIcon.textContent = "history_edu"
      writingIcon.style.marginTop = "1px"
      // writingIcon.style.color = "#FFA500"
      // writingLink.style.color = "#FFA500"
      // writingLink.style.textDecoration = "underline"
      writingLink.style.textDecorationColor = "rgb(9, 9, 9)"
      writingLink.style.textUnderlineOffset = "5px"
      writingLink.style.textDecorationThickness = "2px"
      writingLink.style.backgroundColor = "rgb(9, 9, 9)"
    } else {
      writingIcon.style.transform = "none"
      writingIcon.style.marginTop = "-1px"
      writingIcon.style.transition = "transform 0s, color 0.2s"
      writingIcon.textContent = "receipt_long"
      writingIcon.style.color = "white"
      writingLink.style.color = "white"
      writingLink.style.backgroundColor = "rgb(17, 18, 19)"
    }
    if (path === "articles") {
      writingLink.style.textDecorationColor = "#FFA500"
    }
  }


  function changeAbout() {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    
    if (aboutIcon && aboutLink && projectsIcon && projectsLink && writingIcon && writingLink) {
      aboutIcon.style.transitionDuration = "0.2s"
    aboutLink.style.transitionDuration = "0.2s"
    projectsIcon.style.transitionDuration = "0.2s"
    projectsLink.style.transitionDuration = "0.2s"
    writingIcon.style.transitionDuration = "0.2s"
    writingLink.style.transitionDuration = "0.2s"
    writingIcon.style.transform = "none"
    if (aboutIcon.textContent == "import_contacts" || path === "resume") {
      aboutIcon.textContent = "auto_stories"
      aboutIcon.style.color = "#FFA500"
      aboutLink.style.color = "#FFA500"
      aboutLink.style.borderColor = "#FFA500"
      aboutLink.style.borderWidth = "0.5px"
      aboutLink.style.backgroundColor = "rgb(9, 9, 9)"
      // aboutLink.style.textDecoration = "underline"
      aboutLink.style.textDecorationColor = "#FFA500"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.textDecorationThickness = "2px"
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
      projectsLink.style.borderColor = "rgb(17, 18, 19)"
      projectsLink.style.backgroundColor = "rgb(17, 18, 19)"
      writingIcon.style.marginTop = "-1px"
      writingIcon.style.transition = "transform 0s"
      writingIcon.textContent = "receipt_long"
      writingIcon.style.color = "white"
      writingLink.style.color = "white"
      writingLink.style.borderColor = "rgb(17, 18, 19)"
      writingLink.style.backgroundColor = "rgb(17, 18, 19)"
    } else {
      aboutIcon.textContent = "import_contacts"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.backgroundColor = "rgb(17, 18, 19)"
      aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
    }
    }
  }
  function changeProjects() {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    
    if (aboutIcon && aboutLink && projectsIcon && projectsLink && writingIcon && writingLink) {
      aboutIcon.style.transitionDuration = "0.2s"
    aboutLink.style.transitionDuration = "0.2s"
    projectsIcon.style.transitionDuration = "0.2s"
    projectsLink.style.transitionDuration = "0.2s"
    writingIcon.style.transitionDuration = "0.2s"
    writingLink.style.transitionDuration = "0.2s"
    writingIcon.style.transform = "none"
      if (projectsIcon.textContent == "terminal" || path === "projects") {
        projectsIcon.textContent = "data_object"
        projectsIcon.style.color = "#FFA500"
        projectsLink.style.color = "#FFA500"
        projectsLink.style.textDecorationColor = "#FFA500"
        projectsLink.style.textUnderlineOffset = "5px"
        projectsLink.style.textDecorationThickness = "2px"
        projectsLink.style.borderColor = "#FFA500"
        projectsLink.style.backgroundColor = "rgb(9, 9, 9)"
        aboutIcon.textContent = "import_contacts"
        aboutIcon.style.color = "white"
        aboutLink.style.color = "white"
        aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
        aboutLink.style.borderColor = "rgb(17, 18, 19)"
        aboutLink.style.backgroundColor = "rgb(17, 18, 19)"
        writingIcon.style.marginTop = "-1px"
        writingIcon.style.transition = "transform 0s"
        writingIcon.textContent = "receipt_long"
        writingIcon.style.color = "white"
        writingLink.style.color = "white"
        writingLink.style.borderColor = "rgb(17, 18, 19)"
        writingLink.style.backgroundColor = "rgb(17, 18, 19)"
        writingLink.style.textDecorationColor = "rgb(17, 18, 19)"
      } else {
        projectsIcon.textContent = "terminal"
        projectsIcon.style.color = "white"
        projectsLink.style.color = "white"
        projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
        projectsLink.style.backgroundColor = "rgb(17, 18, 19)"
      }
    }
  }
  function changeGithub() {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    if (githubIcon.textContent == "tv" ) {
      githubIcon.textContent = "open_in_new"
      githubIcon.style.color = "#FFA500"
      githubLink.style.color = "#FFA500"
      githubLink.style.textDecorationColor = "#FFA500"
      githubLink.style.textUnderlineOffset = "5px"
      githubLink.style.textDecorationThickness = "4px"
      aboutIcon.textContent = "import_contacts"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
      writingIcon.style.marginTop = "-1px"
      writingIcon.textContent = "receipt_long"
      writingIcon.style.color = "white"
      writingLink.style.color = "white"
      writingLink.style.textDecorationColor = "rgb(17, 18, 19)"
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "white"
      githubLink.style.color = "white"
      githubLink.style.textDecorationColor = "rgb(17, 18, 19)"
    }
  }
  function changeWriting() {
    
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    let writingIcon = document.getElementById("writing_icon")
    let writingLink = document.getElementById("writing_link")
    
    if (aboutIcon && aboutLink && projectsIcon && projectsLink && writingIcon && writingLink) {
      aboutIcon.style.transitionDuration = "0.2s"
    aboutLink.style.transitionDuration = "0.2s"
    projectsIcon.style.transitionDuration = "0.2s"
    projectsLink.style.transitionDuration = "0.2s"
    writingIcon.style.transitionDuration = "0.2s"
    writingLink.style.transitionDuration = "0.2s"
      if (writingIcon.textContent == "receipt_long" || path === "articles") {
        writingIcon.textContent = "history_edu"
        writingIcon.style.marginTop = "1px"
        writingIcon.style.transform = "scale(1, 1.2)"
        writingIcon.style.marginTop = "1px"
        writingIcon.style.transition = "transform 0s, color 0.2s"
        writingIcon.style.color = "#FFA500"
        writingLink.style.color = "#FFA500"
        writingLink.style.borderColor = "#FFA500"
        writingLink.style.backgroundColor = "rgb(9, 9, 9)"
        // writingLink.style.textDecoration = "underline"
        writingLink.style.textDecorationColor = "#FFA500"
        writingLink.style.textUnderlineOffset = "5px"
        writingLink.style.textDecorationThickness = "2px"
        // writingLink.style.backgroundColor = 
        aboutIcon.textContent = "import_contacts"
        aboutIcon.style.color = "white"
        aboutLink.style.color = "white"
        aboutLink.style.textDecorationColor = "rgb(17, 18, 19)"
        aboutLink.style.borderColor = "rgb(17, 18, 19)"
        aboutLink.style.backgroundColor = "rgb(17, 18, 19)"
        projectsIcon.textContent = "terminal"
        projectsIcon.style.color = "white"
        projectsLink.style.color = "white"
        projectsLink.style.textDecorationColor = "rgb(17, 18, 19)"
        projectsLink.style.borderColor = "rgb(17, 18, 19)"
        projectsLink.style.backgroundColor = "rgb(17, 18, 19)"
        githubIcon.textContent = "tv"
        githubIcon.style.color = "white"
        githubLink.style.color = "white"
        githubLink.style.textDecorationColor = "rgb(17, 18, 19)"
      } else {
        writingIcon.textContent = "receipt_long"
        writingIcon.style.transform = "none"
        writingIcon.style.color = "white"
        writingLink.style.color = "white"
        writingLink.style.textDecorationColor = "rgb(17, 18, 19)"
        writingIcon.style.marginTop = "-1px"
        writingLink.style.backgroundColor = "rgb(17, 18, 19)"
      }
    }
  }

  useEffect(() => {
    setLightSwitch(document.getElementById("star"))
  }, [])

  useEffect(() => {
    let pathName = window.location.pathname
    console.log(pathName)
    if (pathName === "/") {
      return
    }
    console.log(pathName)
    if (pathName === "/resume") {
      changeAbout()
    }
    if (pathName === "/projects") {
      changeProjects()
    }
    if (pathName === "/articles") {
      changeWriting()
    }
  }, [])

  function timeOut(str) {
    if (window.location.pathname !== "/") {
      return
    }
    let meetingButton = document.getElementById("meeting_button")
    var audio_crow = document.getElementById("audio_crow");
    
    
    audio_crow.volume = 0.1
    
    
    meetingButton.style.backgroundColor = "transparent"
    meetingButton.style.borderStyle = "none"
    meetingButton.style.boxShadow = "none"
    
    setTimeout(niceToMeetYou(str), 80)
    audio_crow.play();
    
    setTimeout(play(str), 950)
    setTimeout(log, 4500)
    setTimeout(pls, 8650)
    
  }

  function pls() {
    if (window.location.pathname !== "/") {
      return
    }
    var audio_please = document.getElementById("audio_please");
    audio_please.volume = 0.4
    audio_please.play()
  
  }
  
  function log() {
    if (window.location.pathname !== "/") {
      return
    }
    console.log("Tsukuyomi!")
    var audio_genjutsu = document.getElementById("audio_genjutsu");
    audio_genjutsu.volume = 0.4
    audio_genjutsu.play()
  }
  
  function play(str) {
    if (window.location.pathname !== "/") {
      return
    }
    var audio_senya = document.getElementById("audio_senya");
    var audio_tsukuyomi = document.getElementById("audio_tsukuyomi");
    audio_tsukuyomi.volume = 0.30
    audio_senya.volume = 0.35
    audio_tsukuyomi.play()
    setTimeout(stars(str), 350)
    audio_senya.play();
  
    
  }
  
  function niceToMeetYou(str) {
    console.log(str)
    console.log("nice to meet you")
    let pageWrapper = document.getElementById("wrapper")
    let meetingButton = document.getElementById("meeting_button")
  
    if (!pageWrapper || !meetingButton) {
      return
    }
  
    if (str === "reverse") {
      pageWrapper.style.animation = "ReverseAnimation 5s ease"
      pageWrapper.style.backgroundPosition = "50% 100%"
      return
    }
    
    if (str === "reverse_erase") {
      pageWrapper.style.animation = "ReverseAnimation 5s ease"
      pageWrapper.style.backgroundPosition = "50% 100%"
      meetingButton.style.opacity = "0"
      meetingButton.style.animation = "translate_2 3s ease-out"
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "3s"
      profilePhoto.style.opacity = "1"
      meetingButton.position = "none"
      return
    }
    
    if (str === "safe") {
      pageWrapper.style.backgroundPosition = "50% 0%"
      pageWrapper.style.animation = "Animation 7s ease"
      return
    }
  
    meetingButton.style.pointerEvents = "none"
    let intro = document.getElementsByClassName("intro")
    meetingButton.style.userSelect = "none"
    meetingButton.tabIndex = "-1"
    meetingButton.style.position = "absolute"
    meetingButton.style.height = "300px"
    meetingButton.style.width = "300px"
    meetingButton.style.marginLeft = "12vw"
    meetingButton.style.marginTop = "35vh"
    meetingButton.style.fontSize = "6px"
    meetingButton.style.color = "#bebebe"
    meetingButton.style.transitionDuration = "3s"
    meetingButton.style.transition = "all 2s ease-in"
    meetingButton.style.animation = "translate 6s ease-in-out"
    meetingButton.style.animationFillMode = "forwards"
    if (window.innerWidth >= 3100 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "16.875vw"
      meetingButton.style.marginTop = "27vh"
      meetingButton.style.fontSize = "22px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
      
    }
    if (window.innerWidth >= 2400 && window.innerWidth < 3100 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "37.8vw"
      meetingButton.style.marginTop = "9vh"
      meetingButton.style.fontSize = "12px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 2200 && window.innerWidth < 2400 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "36.5vw"
      meetingButton.style.marginTop = "9vh"
      meetingButton.style.fontSize = "12px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 2100 && window.innerWidth < 2200 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "35.5vw"
      meetingButton.style.marginTop = "9vh"
      meetingButton.style.fontSize = "12px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1900 && window.innerWidth < 2100 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "35vw"
      meetingButton.style.marginTop = "9vh"
      meetingButton.style.fontSize = "12px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1800 && window.innerWidth < 1900 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "32vw"
      meetingButton.style.marginTop = "4vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1700 && window.innerWidth < 1800 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "31vw"
      meetingButton.style.marginTop = "4vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1600 && window.innerWidth < 1700 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "29vw"
      meetingButton.style.marginTop = "4vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1450 && window.innerWidth < 1600 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "27.4vw"
      meetingButton.style.marginTop = "4vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1300 && window.innerWidth < 1450 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "25vw"
      meetingButton.style.marginTop = "4vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1200 && window.innerWidth < 1300 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "23vw"
      meetingButton.style.marginTop = "3.5vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 1100 && window.innerWidth < 1200) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "20vw"
      meetingButton.style.marginTop = "3vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 900 && window.innerWidth < 1100) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "17vw"
      meetingButton.style.marginTop = "3vh"
      meetingButton.style.fontSize = "10px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 794 && window.innerWidth < 900) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "17vw"
      meetingButton.style.marginTop = "2vh"
      meetingButton.style.fontSize = "9px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
    }
    if (window.innerWidth >= 450 && window.innerWidth < 794) {
      meetingButton.style.marginRight = "150px"
      meetingButton.style.right = "0"
      meetingButton.style.marginTop = "0vh"
      meetingButton.style.fontSize = "8px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
      document.getElementsByClassName("section")[0].style.marginBottom = "50px"
    }
    if (window.innerWidth < 450) {
      meetingButton.style.marginRight = "120px"
      meetingButton.style.right = "0"
      meetingButton.style.marginTop = "0vh"
      meetingButton.style.fontSize = "8px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
      document.getElementsByClassName("section")[0].style.marginBottom = "50px"
    }
  
    meetingButton.textContent = 
     `
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠠⠀⣐⣨⣭⣶⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡀⢻
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠤⠄⢐⣢⣤⣭⣶⣶⣾⣿⣿⠟⢹⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⣿⣸
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⢰⣶⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠙⠃⢀⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣾⣿⣇
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡿⠁⣠⣶⠿⠿⠿⢶⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡿⠁⣴⡿⠉⢀⣬⣥⡀⠙⣛⠋⠉⠉⣁⠀⢰⡀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣘⢿⣿⣿
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⠀⢸⣿⣿⣿⠿⠇⠀⠛⠁⢁⠉⠁⠀⢈⠀⢠⣶⣿⣿⣿⠀⢸⣧⠀⠀⠀⠀⠀⣸⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⢻⣿
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠇⠀⢘⣉⣀⣀⣂⠀⢀⠀⠺⣦⣄⣂⣴⠟⠀⣼⣿⣿⣿⣿⠀⢸⣿⡀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢇⣿⡿
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣆⠀⢸⣿⣿⣿⡏⠀⠛⠓⣐⠈⠍⠉⢁⣤⣾⣿⣿⣿⣿⣿⠀⢸⣿⡇⠀⠀⠀⠀⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢃⣾⣿⠇
       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⢸⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠛⠋⠁⠀⠀⠀⠀⢐⣂⣴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⡿⠀
       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡆⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠉⠁⠀⠀⠀⣀⣤⣤⠄⠀⠀⠀⢛⡩⠔⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠃⠀
       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣷⠀⠿⠿⠿⠿⠛⠛⠛⠉⠁⠀⠀⠀⣀⣀⣤⣤⣴⣶⣿⣶⣿⠟⣡⡄⠀⠀⠀⠁⡔⡉⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡟⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⣀⣀⣤⣤⣤⣴⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⠋⢵⣿⡿⢃⠀⠀⢀⠸⡇⠀⢉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⠇⠀⠀
      ⡿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣄⢰⣶⣤⣤⣬⣉⣉⣉⣛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣾⠿⣵⡟⠀⠀⢸⠧⠀⠒⣂⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⣻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠿⢋⣥⠤⠒⠛⠛⠓⠲⠤⢬⣙⣛⣿⣦⡙⢿⣿⣿⣿⣿⣿⠸⣿⠀⣿⣿⡄⠀⢠⣴⣾⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
      ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠞⠋⣡⣴⢂⡟⡀⢠⡐⠦⡄⠨⣙⢿⣌⠻⣶⣿⣿⣿⣿⣿⠀⣿⣦⠹⣿⣧⠀⢸⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠀⠀⡠⠈
      ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣄⠈⢿⣿⡎⠧⠁⠠⠔⡠⠈⠈⢈⣡⣿⢁⣿⣿⣿⣿⣿⣿⡆⣿⣿⣷⣌⠻⠀⣾⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡶⠊⠀⠀
      ⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣤⠙⠿⠦⢈⠋⢅⣠⣤⣾⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⡇⢹⣿⣿⣿⣷⠀⠿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀
      ⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣯⣴⣾⣯⣥⣶⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣿⣿⣿⢰⣦⡙⢿⣿⣿⡇   you've been placed  .   .   .   .   . 
      ⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⣿⡇ .  .  .  .  . under  my  genjutsu                    
      ⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀ 
      ⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀. . . . . . please hire me
      ⣿⣿⣿⣿⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⠃⣿⣿⣿⣿⣿⣿⣿⡟⢻⣿⣿⣿⡿⢋⣭⣿⣿⣿⣿⣿⣿⣿⡇⠀⡄⢠⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⣿⣿⣿⣿⡇⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿⣦⣍⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⢠⡇⠌⢿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⣿⣿⣿⣿⣧⠀⣿⠀⠀⠀⠀⠀⠀⢀⠀⠀⡾⣈⢻⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⡇⠀⠈⢻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⣿⣿⣿⣿⣿⡄⡟⠀⠀⠀⠀⠀⠀⠸⡀⠀⢰⢩⢂⠻⣿⣿⣯⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠛⢻⣿⠁⣿⡇⠀⠀⠈⢿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⣿⣿⣿⣿⣿⡇⠁⠀⠀⠀⠀⠀⠀⠐⠇⠀⠀⢃⡞⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⣋⣩⣭⣶⣶⣿⣿⡿⣿⣿⡿⢰⣿⡇⠀⠀⠀⠈⣿⣆⠀⠀⠀⠀⠀⠀⠀⡀⠀
      ⣿⣿⣿⣿⣿⣷⠀⠀⡄⠀⠀⠀⠀⠀⡰⡀⠈⡜⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣾⣿⡿⠿⠿⢛⣛⣩⣥⣼⣿⣿⣷⣾⣿⡇⠄⠀⠄⠀⠼⣿⡄⠐⠐⠐⠒⢐⡲⠁⠀
      ⣿⣿⣿⣿⣿⣿⣴⠀⣷⠀⠀⢰⠀⠀⠃⠁⢸⠁⠀⠀⠀⠀⠀⠀⠈⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠂⠀⠁⣌⢹⣧⠈⠈⠁⠀⠀⠁⠀⠀
      ⣿⣿⣿⣿⣿⣿⣿⠀⢸⠀⠀⠈⡆⠀⠌⢄⡟⡀⠀⠀⠀⠀⠀⠀⠀⣿⣶⡍⡛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⢊⠀⢿⣇⠀⠀⠀⠀⢐⠀⠀
      ⣿⣿⣿⣿⣿⣿⣿⠀⢸⠀⠀⠀⣇⡀⢠⢸⢃⠃⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⢸⣄⢈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠩⣒⠁⠀⠀⠀⣴⠁⣨⠘⣿⡀⠀⠀⠀⠨⠀⠀
      ⣿⣿⣿⣿⣿⣿⣿⢸⢸⡄⡆⠀⣿⡇⠀⣿⣸⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣇⠹⢀⠥⢖⠦⣉⠛⠻⢿⣿⣿⣿⣿⡿⠟⢛⡡⠔⠊⠔⣂⠀⠀⢀⡥⢚⠅⣣⢹⣷⡀⠀⠀⠰`
      
    
    meetingButton.style.alignSelf = "flex-start"
    meetingButton.style.fontWeight = "400"
    meetingButton.style.boxShadow = "none"
    meetingButton.style.backgroundColor = "transparent"
    meetingButton.style.borderStyle = "none"
    intro[0].style.marginBottom = "15px"
  }

  function stars(str) {
    if (window.location.pathname !== "/") {
      return
    }
    if (str === "lights_off") {
      console.log('oi')
      return
    }
    let stars_1 = document.getElementsByClassName("art_1")[0]
    let stars_2 = document.getElementsByClassName("art_2")[0]
    
    stars_1.style.transform = "translateY(180%)"
    stars_2.style.transform = "translateY(180%)"
    if (window.innerWidth >= 3400 && window.innerWidth < 3900) {
      stars_1.style.transform = "translateY(80%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(75%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3200 && window.innerWidth < 3400) {
      stars_1.style.transform = "translateY(90%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(80%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 3100 && window.innerWidth < 3200) {
      stars_1.style.transform = "translateY(95%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(85%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 2800 && window.innerWidth < 3100) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "13s"
      stars_2.style.transform = "translateY(95%)"
      stars_2.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2700 && window.innerWidth < 2800) {
      stars_1.style.transform = "translateY(105%)"
      stars_1.style.transitionDuration = "13s"
      stars_2.style.transform = "translateY(100%)"
      stars_2.style.transitionDuration = "13s"
    } 
    if (window.innerWidth >= 2500 && window.innerWidth < 2700) {
      stars_1.style.transform = "translateY(120%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(120%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 2200 && window.innerWidth < 2500) {
      stars_1.style.transform = "translateY(115%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(105%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 1900 && window.innerWidth < 2200) {
      stars_1.style.transform = "translateY(120%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(110%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 1750 && window.innerWidth < 1900) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(100%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1600 && window.innerWidth < 1750) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(100%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1500 && window.innerWidth < 1600) {
      stars_1.style.transform = "translateY(90%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(90%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 1400 && window.innerWidth < 1500) {
      stars_1.style.transform = "translateY(90%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(90%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 1280 && window.innerWidth < 1400) {
      stars_1.style.transform = "translateY(70%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(70%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 800 && window.innerWidth < 1280) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "14s"
      stars_2.style.transform = "translateY(110%)"
      stars_2.style.transitionDuration = "14s"
    } 
    if (window.innerWidth >= 700 && window.innerWidth < 800) {
      stars_1.style.transform = "translateY(70%)"
      stars_1.style.transitionDuration = "10s"
      stars_2.style.transform = "translateY(70%)"
      stars_2.style.transitionDuration = "10s"
    } 
    if (window.innerWidth >= 600 && window.innerWidth < 700) {
      stars_1.style.transform = "translateY(75%)"
      stars_1.style.transitionDuration = "9s"
      stars_2.style.transform = "translateY(80%)"
      stars_2.style.transitionDuration = "9s"
    } 
    if (window.innerWidth >= 500 && window.innerWidth < 600) {
      stars_1.style.transform = "translateY(125%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 400 && window.innerWidth < 500) {
      stars_1.style.transform = "translateY(120%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 350 && window.innerWidth < 400) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(95%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth >= 300 && window.innerWidth < 350) {
      stars_1.style.transform = "translateY(100%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(95%)"
      stars_2.style.transitionDuration = "11s"
    } 
    if (window.innerWidth < 300) {
      stars_1.style.transform = "translateY(130%)"
      stars_1.style.transitionDuration = "11s"
      stars_2.style.transform = "translateY(105%)"
      stars_2.style.transitionDuration = "11s"
    } 
    
  }

  function typeText(str) {
    // array with texts to type in typewriter
    var dataText = [ "Nice to meet you!"];
    if (str === "tsukuyomi") {
      var dataText = [ "Tsukuyomi!", "You've been placed under my genjutsu...", "Please hire me 🙏"];
  
    }
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if ((i < (text.length)) && (document.getElementById("typewriter_2") && (document.getElementById("handshake_icon")))) {
        // add next character to h1
       document.getElementById("typewriter_2").innerHTML = text.substring(0, i+1) +'<span id="typing_span aria-hidden="true"></span>';
       document.getElementById("typewriter_2").style.display = "flex"
       document.getElementById("typewriter_2").style.zIndex = "5"
       document.getElementById("typewriter_2").style.opacity = "1"
       document.getElementById("handshake_icon").style.opacity = "0"
       document.getElementById("handshake_icon").style.position = "absolute"
       document.getElementById("meeting_button").style.pointerEvents = "none"
       document.getElementById("meeting_button").style.backgroundColor = "transparent"
       document.getElementById("meeting_button").style.boxShadow = "none"
       document.getElementById("meeting_button").style.borderColor = "transparent"
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (dataText[i]) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  };

  return (
    <Wrapper>
      <section className="navigation">
        <div className="container">
          <div className="nav-group">
            <div className="nav-item">
              <ContextConsumer>
              {({ data, set }) => {

                
                
                return (
                  <div class="lightswitch" id="lightswitch" onClick={() => {
                    set({ isClicked: !data.isClicked }) 
                    set({ isToggled: true })

                    if (!data.isClicked) {
                      set({ isClicked: !data.isClicked })
                      set({ curtain: "up" })
                    } 
                    
                    if (data.isClicked) {
                      set({ curtain: "down" })
                    } else {
                      set({ curtain: "up" })
                    }

                    if (data.itachi !== "revealed") {
                      set({ isToggled: true })
                      set({ itachi: "revealed" })
                      timeOut();
                      typeText("tsukuyomi")
                    }
                   

                    
                    }}><p id="star" class="star">✦</p></div>
                );
              }}
              </ContextConsumer>
              <StyledMainLink id="main_link" to="/">
                Anser Ghazi
              </StyledMainLink>
              <StyledMainLink id="mini_main_link" to="/">
                AG
              </StyledMainLink>
              
            </div>
          </div>
          <div className="nav-group" id="subpages">

            <div className="nav-item" id="about_nav" 
                onMouseOver={() => hoverAbout()}
                onMouseLeave={() => hoverAbout()}>
              <span
                class="material-icons"
                id="about_icon"
              >
                import_contacts
              </span>

              <StyledLink
                to="/resume"
                id="about_me_link"
              >
                Resume
              </StyledLink>
            </div>

            <div className="nav-item" id="projects_nav" onMouseOver={() => hoverProjects()}
                onMouseLeave={() => hoverProjects()}>
              <span
                class="material-icons"
                id="projects_icon"
                
                
              >
                terminal
              </span>
              <StyledLink
                to="/projects"
                id="projects_link"
                
                
              >
                Projects
              </StyledLink>
            </div>

            <div className="nav-item" id="writing_nav" onMouseOver={() => hoverWriting()}
                onMouseLeave={() => hoverWriting()}>
              <span
                class="material-icons"      
                id="writing_icon"
               
                
              >
                receipt_long
              </span>

              <StyledLink
                to="/articles"
                id="writing_link"
               
                
              >
                Articles
              </StyledLink>
            </div>
            
            <a className="nav-item" id="github_a_tag" href="https://github.com/anserghazi" target="_blank" rel="noreferrer">
              <div className="nav-item" id="github_nav" onMouseOver={() => hoverGithub()}
                  onMouseLeave={() => hoverGithub()}>
                <span
                  class="material-icons"
                  id="github_icon"
                >
                  tv
                </span>
                <a
                  href="https://github.com/anserghazi"
                  target="_blank"
                  rel="noreferrer"
                  id="github_link"
                >
                  GitHub
                </a>
              </div>
            </a>
            
          </div>
          <div className="nav-group" id="hamburger_group">
            <div className="nav-item" id="hamburger_div">
            <div class="hamburger"  onClick={() => {
              toggleNav()
                  }}><span class="material-icons" id="hamburger">menu_icon</span></div>
            </div>
          </div>
          <div id="myNav" class="overlay">
            <div class="overlay-content">
              <StyledLink to="/resume" onClick={() => {closeNav()}}>Resume</StyledLink>
              <StyledLink to="/projects" onClick={() => {closeNav()}}>Projects</StyledLink>
              <StyledLink to="/articles" onClick={() => {closeNav()}}>Articles</StyledLink>
              {/* <a href="https://github.com/anserghazi" target="_blank" rel="noreferrer" id="github_mobile_link" onClick={() => {closeNav()}}>GitHub</a> */}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

#github_mobile_link {
  text-decoration: underline;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  text-decoration-color: rgb(17, 18, 19);
  background-color: rgb(17, 18, 19);
  text-underline-offset: 5px;
  text-decoration-thickness: 4px;
  font-weight: 600;
  display: flex;
  align-items: center; 
  justify-content: center;
  // border-style: solid;
  border-width: 0.5px;
  border-color: rgb(17, 18, 19);
  transition: all 0.5s ease-in-out;
    display: flex;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    transition-duration: 0.5s;
    &:hover {
      
      background-color:rgb(4, 4, 4);
      cursor: pointer;
    }

    text-decoration: none;
    font-size: 22px;
    background-color: transparent;
    border-style: none;
    padding:  1px 10px 1px 10px;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 15;
  top: 7%;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(18, 18, 18, 0.9);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

.overlay-content {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

#hamburger_group {
  display: none;
}

#hamburger_div {
  margin-right: 35px;
}
 

  #subpages {
    margin-right: 20px;
  }

  .hamburger {
    margin: 0 0 0 0; !important;
    font-size: 28px;
    font-weight: 800;
    color: white;
    height: 40px;
    width: 40px;
    display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    border-radius: 10px;
    transition-duration: 0.2s;
    &:hover {
      background-color:rgb(9, 9, 9);
      cursor: pointer;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
  }

  #hamburger.material-icons {
    height: 40px;
    width: 40px;
    position: relative;
    font-size: 28px;
    // line-height: 41px;
    padding: 12% 0% 0% 15%;
    color: white;
    user-select: none;
    // display: flex;
    transform-origin: center;
    vertical-align: middle;
    align-items: center;
  }
  

  #star {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    height: 100%;
    width: 100%;
    line-height: 41px;
    display: flex-box;
    color: white;
    user-select: none;
    transform-origin: center;
    vertical-align: middle;
  }

  .lightswitch {
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 20px;
    margin-right: 0px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    transition-duration: 0.2s;
    &:hover {
      background-color:rgb(9, 9, 9);
      cursor: pointer;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
  }

  
  .navigation {
    width: 100%;
    padding: 5px;
    z-index: 5;
    background-color: rgb(17, 18, 19);
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 7%;
    min-height: 65px;
    max-height: 69px;
    overflow-x: hidden;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    min-width: 900px;
    width: 1350px;
    // max-width: 1345px;
  }

  .nav-group {
    display: flex;
    gap: 30px;
  }

  .nav-item {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-self: center;
    font-size: 20px;
    justify-content: center;
    align-items: center;
  }

  a {
    color: white;
    font-family: "Yantramanav", sans-serif;
    // text-decoration: none;
    text-decoration-color: rgb(17, 18, 19);
    text-underline-offset: 5px;
    text-decoration-thickness: 4px;
    font-weight: 600;
    line-height: 28px;
  }
  span {
    color: white;
  }

  #mini_main_link {
    display: none;
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 20px;
    margin-right: 0px;
    &:hover {
      // color: #ffa500;
      text-decoration: underline;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
  }

  #main_link {
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 10px;
    margin-right: 313px;
    line-height: 1.95;
    text-decoration: none;
    &:hover {
      // color: #ffa500;
      // color: #ffa500;
      text-decoration: underline;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
      user-select: none;
  }

  


 
    

  #about_icon, #projects_icon, #writing_icon {
    display: inline; 
    margin-right: -36px;
    margin-bottom: 2px;
    z-index: 2;
    pointer-events: none;
  }

  #writing_icon {
    margin-top: -1px;
    margin-right: -34px;
    margin-left: 0px;
  }

  #github_icon {
    margin-top: -1px;
    margin-right: 1.5px;
  }

  #about_icon {
    margin-top: -2px;
    margin-right: -36.5px;
  }

  #projects_icon {
    margin-bottom: 2px;
    margin-right: -35.5px;
    margin-left: 1.5px;
  }
  
  #projects_link {
    // margin-top: 1px;
    padding-left: 37px;
  }
  #about_me_link {
    padding-left: 39px;
  }
  
  #writing_link {
    padding-left: 35px;
  }






  #about_me_link, #projects_link, #writing_link {
    // margin-bottom: -2px;
    // // padding-left: 22px;
    // margin-left: 0px;
  }

  // #writing_link {
  //   margin-left: -10px;
  // }

  // #writing_nav {
  // height: 40px;
  //   margin-right: -3px;
  //   width: 133px;
  // }

  #github_nav {

      height: 50px;
      display: flex;
      padding-left: -30px;
      margin-left: -29px;
      margin-top: 15px;
      margin-right: -4.3px;
      padding: 0px 12px 0px 12px;
      border-radius: 10px;
      display: flex;
      align-items: center; 
      justify-content: center;
      display: flex; 
      z-index: 2;
      // border-width: 0.5px;
      transition-duration: 0.2s;
      &:hover {
        background-color:rgb(9, 9, 9);
        cursor: pointer;
      }
      // border-style: solid;
  }

  #github_nav a {
    transition-duration: 0.2s;
  }

  #github_nav span {
    transition-duration: 0.2s;
  }

 
    





  

  #github_icon {
    margin-right: 2px;
    font-size: 23px;
    font-weight: 600px;
  }
    
  #github_link {
    margin-top: 1px;
    font-weight: 600px;
  }

  

  // @media only screen and (max-width: 1150px) {
  //   // .container {
  //   //   max-width: none;
  //   //   min-width: 100px;
  //   //   width: 100%;
  //   //   margin-right: 0;
  //   //   padding-right: 0;
  //   // }

  //   .container {
  //     min-width: 1050px;
  //     width: 100%;
  //     margin: 0 25px 0 25px;
  //   }
    
  //   h1 {
  //     margin-left: 0px;
  //     padding-left: 0px;
  //   }

  //   #main_link {
  //     margin-right: 60px;
  //   }
  // }

  @media only screen and (max-width: 1060px) {

  // .nav-group {
  //     gap: 5px;
  //   }

    .container {
      min-width: 100px;
      width: 100%;
    }

    #main_link {
      // margin-left: 24px;
      margin-right: 90px;
    }

  }

  @media only screen and (max-width: 850px) {
    .nav-group {
      gap: 10px;
    }
      #main_link {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 793px) {

  #hamburger_group {
    display: flex;
  }

  #subpages {
    display: none;
  }

  #github_mobile_link {
  margin-top: 5px;
    background-color: transparent;
    border-style: none;
    padding:  12px 18px 12px 18px;
  }

  // create hamburger menu for navigation items

}


  @media only screen and (max-width: 680px) {
    a {
      font-size: 18px;
    }

    

    #about_me_link {
      font-size: 18px;
    }

    #projects_link {
      font-size: 18px;
    }

  }

  @media only screen and (max-width: 625px) {
    .nav-group {
      gap: 5px;
    }
  }

  @media only screen and (max-width: 645px) {
    // .material-icons {
    //   display: none;
    // }

    

    // #about_icon {
    //   display: none; 
    // }


    // #projects_icon {
    //   display: none; 
    // }

    // #writing_icon {
    //   display: none; 
    // }

    // #github_icon {
    //   display: none; 
    // }
  }

  // @media only screen and (max-width: 560px) {
  //   #main_link {
  //     display: none;
  //   }
  //   #mini_main_link {
  //     display: flex;
  //     margin-left: 5px;
  //     margin-right: 15px;
  //     line-height: 1.95;
  //   }
  //   // #github_link {
  //   //   margin-right: 24px;
  //   // }
    
  // }

  @media only screen and (max-width: 500px) {
    #main_link {
      display: none;
    }
    #mini_main_link {
      display: flex;
      margin-left: 5px;
      margin-right: 15px;
      line-height: 1.95;
    }

  }

  @media only screen and (max-width: 410px) {

  
    #about_me_link {
      font-size: 15px;
    }

    #projects_link {
      font-size: 15px;
    }

    a {
      font-size: 15px;
    }
  }
    @media only screen and (max-width: 370px) {

    #mini_main_link {
      font-size: 25px;
      line-height: 2.25;
    }
     #about_me_link {
      font-size: 12px;
    }

    #projects_link {
      font-size: 12px;
    }


    a {
      font-size: 12px;
    }
  }

  #github_a_tag {
  
  color: #bebebe;
  text-decoration: none;
  text-decoration-color: rgb(17, 18, 19);
  text-underline-offset: 5px;
  text-decoration-thickness: 4px;
  font-weight: 600;
  display: flex;
  align-items: center; 
  justify-content: center;
  // border-style: solid;
  border-width: .50px;

  transition: all 0.25s ease-in-out;
    height: 38px;
    width: 90px;
    display: flex;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 10px;
    border-radius: 10px;
    transition-duration: 0.2s;
    // &:hover {
      
    //   background-color:rgb(9, 9, 9);
    //   cursor: pointer;
    // }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 11px;
    margin-left: 0px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #bebebe;
  text-decoration: underline;
  text-decoration-color: rgb(17, 18, 19);
  background-color: rgb(17, 18, 19);
  text-underline-offset: 5px;
  text-decoration-thickness: 4px;
  font-weight: 600;
  display: flex;
  align-items: center; 
  justify-content: center;
  // border-style: solid;
  border-width: 0.5px;
  border-color: rgb(17, 18, 19);
  transition: all 0.2s ease-in-out;
    height: 50px;
    display: flex;
    padding: 0px 12px 0px 0px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    transition-duration: 0.2s;
    &:hover {
      
      background-color:rgb(9, 9, 9);
      cursor: pointer;
    }

  @media only screen and (max-width: 793px) {
  
  color: #bebebe;
    text-decoration: none;
    padding: 5px 5px 5px 5px;
    font-size: 22px;
    background-color: transparent;
    border-style: none;
    padding:  4px 15px 4px 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 11px;
    margin-left: 0px;
  }
`

const StyledMainLink = styled(props => <Link {...props} />)`
  font-size: 22px;
  color: white;
`

export default Navbar
