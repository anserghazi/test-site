import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/material-icons-outlined"
import "@fontsource/yantramanav"
import "../assets/css/global.css"
import { Script } from "gatsby"
import senya from "../assets/audio/senya.mp3"
import crow from "../assets/audio/crow.mp3"
import tsukuyomi from "../assets/audio/tsukuyomi.mp3"
import genjutsu from "../assets/audio/genjutsu.wav"
import please from "../assets/audio/please.wav"
import ContextConsumer from "../components/Context.js"
import { Link } from "gatsby"







function onResize() {
  if (window.location.pathname !== "/") {
    return
  }
  let meetingButton = document.getElementById("meeting_button")
  meetingButton.style.transition = "all 0.1s ease-out"
  
  if (document.getElementById("meeting_button").textContent === `
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
    ⣿⣿⣿⣿⣿⣿⣿⢸⢸⡄⡆⠀⣿⡇⠀⣿⣸⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣇⠹⢀⠥⢖⠦⣉⠛⠻⢿⣿⣿⣿⣿⡿⠟⢛⡡⠔⠊⠔⣂⠀⠀⢀⡥⢚⠅⣣⢹⣷⡀⠀⠀⠰`) {
    // document.getElementsByClassName("circularImage")[0].style.visibility = "hidden";
    if (window.innerWidth >= 2700 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      // profilePhoto.style.opacity = "0"
      meetingButton.style.right = "0"
      meetingButton.style.marginRight = "16.875vw"
      meetingButton.style.marginTop = "27vh"
      meetingButton.style.fontSize = "22px"
      meetingButton.style.color = "red"
      meetingButton.style.zIndex = "1"
      meetingButton.style.fontWeight = "1000"
      
    }
    if (window.innerWidth >= 2400 && window.innerWidth < 2700 ) {
      let profilePhoto = document.getElementsByClassName("photo")[0]
      profilePhoto.style.transitionDuration = "0.5s"
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
      // profilePhoto.style.opacity = "0"
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
  }
  
}

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

export default function Home({}) {
  useEffect(() => {
    
    window.addEventListener('resize', onResize);
    
    return () => {
      window.addEventListener('resize', onResize);
    }
  }, []);
  
  return (
    <Wrapper id="wrapper">
        <Script src="https://kit.fontawesome.com/9c3f68b958.js"></Script>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p class="intro">
                I'm a software developer in Toronto with experience in
                full-stack development. I like spicy food, high fantasy, and
                running outdoors.
              </p>
              <ContextConsumer>
                {({ data, set }) => {
          
                  // this is for the nav button

                  // when the stars are up
                  if (data.isClicked && data.isToggled) {
                    niceToMeetYou("safe");
                  } 

                  // when the stars are down
                  if (((!data.isClicked) && data.isToggled)) {
                    if (data.itachi === "revealed") {
                      niceToMeetYou("reverse_erase");
                    } else {
                      niceToMeetYou("reverse");
                    }
                    
                  }

                  return (
                    // this is for the welcome button
                    <button id="meeting_button" onClick={() => {
                      if (!data.isClicked) {
                        set({ isClicked: !data.isClicked })
                        set({ curtain: "up" })
                      } 
                      
                      set({ isToggled: true })
                      set({ itachi: "revealed" })
                      timeOut();
                      
                      }}>
                      <i class="fa-solid fa-handshake-simple"></i>
                    </button>
                    
                  
                )}}
                
              </ContextConsumer>
              
              <audio id="audio_senya" src={senya}></audio>
              <audio id="audio_crow" src={crow}></audio>
              <audio id="audio_tsukuyomi" src={tsukuyomi}></audio>
              <audio id="audio_genjutsu" src={genjutsu}></audio>
              <audio id="audio_please" src={please}></audio>

            </div>
            <div class="photo_header">
              <div class="photo">
                <StaticImage src="../assets/images/profile_3.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="project_section">
          <div class="project_content">
            <div class="project_header">
            <a class="project_link" target="_blank" rel="noreferrer" href="https://www.cookwise.app/">
              <h2 class="project_h2">Cookwise</h2>
              <span
                class="material-icons"
                id="open_in_new"
              >
                open_in_new
              </span>
              <p class="technologies">
                TypeScript, Python, Node.js, React, MySQL, AWS
              </p>
              <div class="project-photo">
                <StaticImage
                  src="../assets/images/cookwise-dashboard.png"
                  width={800}
                  placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" 
                />
                
              </div>
              <p class="project_p">
                Cookwise converts YouTube cooking videos into detailed and customizable recipes. You can extract recipes and personalize with an integrated AI chatbot.
              </p>
              </a>
            </div>
            <div class="project_header">
            <a class="project_link" target="_blank" rel="noreferrer" href="https://www.runroute.app/views/html/application.html">
              <h2 class="project_h2">Runroute</h2>
              <span
                class="material-icons"
                id="open_in_new"
              >
                open_in_new
              </span>
              <p class="technologies">
                JavaScript, Google Maps JavaScript API, HTML, CSS
              </p>
              <div class="project-photo">
                <StaticImage src="../assets/images/runroute.png" width={800} placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />
              </div>
              <p class="project_p">
                Runroute is a route planner for at-home runners. The route
                begins and ends at your given address, and nearby parks can be
                added as waypoints on your journey.
              </p>
              </a>
            </div>
            <div class="project_header" id="ar_ikea_header">
              <a class="project_link" target="_blank" rel="noreferrer" href="https://anserghazi.github.io/ar-ikea/pages/instructions.html">
              <h2 class="project_h2">arIKEA</h2>
              <span
                class="material-icons"
                id="open_in_new"
              >
                open_in_new
              </span>
              <p class="technologies">JavaScript, HTML, CSS, gh-pages, Model Viewer library</p>
              <div class="project-photo" id="ar_ikea_photo">
                <StaticImage
                  src="../assets/images/ar-ikea-2.png"
                  width={800} height={430} placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" 
                />
              </div>
              <p class="project_p">
                Augmented Reality furniture viewing application for IKEA products.
              </p>
              </a>
            </div>
            <div class="project_header" id="digital_cupboard_header">
            <a class="project_link" target="_blank" rel="noreferrer" href="https://github.com/anserghazi/digital-cupboard/blob/master/README.md">
            
              <h2 class="project_h2" id="digital_cupboard_h1">Digital Cupboard</h2>
              <span
                class="material-icons"
                id="open_in_new"
              >
                open_in_new
              </span>
              <p class="technologies">
                TypeScript, NestJS, Node.js, Express, React, MySQL
              </p>
              <div class="project-photo" id="digital_cupboard_photo">
                <StaticImage
                  src="../assets/images/digital-cupboard.png"
                  width={800} placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" 
                />
              </div>
              <p class="project_p">
                Digital Cupboard takes every ingredient mentioned in a YouTube
                video (using the autogenerated captions) and adds those
                ingredients to the online shopping cart of your convenience.
              </p>
              </a>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="row">
            <div class="flex-container">
              <div class="article_card">
                <Link to="/articles/identity-theft-is-not-a-joke" class="article_link">
                  <h3>Identity theft is not a joke - How millions of ants suffer every year</h3>
                  <div class="biology">Biology</div>
                  <p>Oct 2022</p>
                </Link>
              </div>

              <div class="article_card">
                <Link to="/articles/eastern-honey-bees" class="article_link">
                  <h3>Eastern Honey Bees: Stool as a Tool to Defend the Hive</h3>
                  
                  <div class="biology">Biology</div>
                  <p>Nov 2022</p>
                </Link>
              </div>
            
              <div class="article_card">
                <Link to="/articles/gildan-messy-leadership-change" class="article_link">
                  <h3>Gildan’s Messy Leadership Change Hints at a Looming Legal Battle </h3>
                  
                  <div class="finance">Finance</div>
                  <p>Feb 2024</p>
                </Link>
              </div>

              <div class="article_card">
                <Link to="/articles/uinta-ground-squirrel" class="article_link">
                  <h3>Uinta Ground Squirrel Population Density Reduction</h3>
                  <div class="mathematics">Mathematics</div>
                  <p>Feb 2024</p>
                </Link>
              </div>
            
              <div class="article_card" id="gildan_2">
                <Link to="/articles/gildan-seems" class="article_link" >
                  <h3>Gildan Seems Like A Thread Without Its Needle Now That It Cut Chamandy Loose</h3>
                  <div class="finance">Finance</div>
                  <p>Mar 2024</p>
                </Link>
              </div>

              <div class="article_card" id="hritonenko">
                <Link to="/articles/hritonenko-yatsenko" class="article_link" >
                  <h3>Hritonenko and Yatsenko - Mathematical modelling and optimization, discrete and continuous dynamic systems</h3>
                  
                  <div class="mathematics">Math</div>
                  <p>Apr 2024</p>
                  </Link>
              </div>
              
            </div>
          </div>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`

// #ar_ikea_photo {
//   width: 100%;
//   height: 40%;
// }

img {
width: 100%;
}

.grid {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    flex-flow: row ;
    margin-top: 35px;
    border-color: red;
    padding-bottom: 45px;
  }
  .row {
    display: flex;
    flex-flow: row wrap;
    max-width: 1300px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    border-color: yellow;
    width: 100%;
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    border-color: blue;
    width: 100%;
    min-width: 750px;
  }
.article_card {
    font-family: "Yantramanav", sans-serif;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    flex-basis: 48.5%; // change 'flex' to 'flex-basis' and remove the 0s, b/c the width is locked
    height: 130px;
    z-index: 2;
    border-style: solid;
    border-width: 0.5px;
    transition-duration: 0.2s;
    &:hover {
      border-color: #FFA500;
    }
    padding: 0px 0px 0px 10px;
    flex-direction: column;
    background-color: rgb(17, 18, 19);
    border-color: rgb(17, 18, 19);
    // background-color: rgb(13, 13, 14);
    // border-color: rgb(13, 13, 14);
  }

  .article_card h3 {
    margin-bottom: 0;
    margin-top: 8px;
    margin-left: 2px;
    margin-right: 10px;
    pointer-events: none;
    color:  white;
    font-size: 19px;
    font-weight: lighter;
  }

  .article_card p {
    display: flex;
    align-self: flex-end;
    font-size: 14px;
    pointer-events: none;
    margin-right: 6px;
    margin-top: auto;
    margin-bottom: 6px;
  }
  .article_card div {
    display: flex;
    align-self: flex-start;
    margin-left: 1px;
    pointer-events: none;
  }
    
  .article_link {
  text-decoration: none;
  height: 100%;
  width: auto;
  border-radius: 10px;
  margin-left: -10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
  .biology {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color: rgb(42, 253, 77);
    font-size: 13px;
    padding: 0px 4px 0px 4px;
    width: 40px;
    opacity: 0.8;
  }

  .finance {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color: rgb(81, 136, 255);
    font-size: 13px;
    padding: 0px 4px 0px 4px;
    opacity: 0.8;
  }


  .mathematics {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color:rgb(246, 255, 80);
    font-size: 13px;
    padding: 0px 4px 0px 4px;
    opacity: 0.8;
  }

position: absolute;
top: 0;
left: 0;
width: 100%;

@keyframes translate {
  0% { transform: translateX(0) } 
  100% { transform: translateX(65%) }
}

@keyframes translate_2 {
  0% { transform: translateX(65%) } 
  100% { transform: translate(80%, -12%) }
}

@keyframes shimmer {
  0% { opacity: 0.1 } 
  25% { opacity: 0.35 }
  50% { opacity: 0.1 }
  75%: { opacity: 0.35 }
  100% { opacity: 0.1 }
}

@keyframes shimmer_2 {
  0% { font-size: 16px } 
  25% { font-size: 12px }
  50% { font-size: 16px } 
  75% { font-size: 12px }
  100% { font-size: 16px }
}

@keyframes shimmer_wide {
  0% { font-size: 18px } 
  25% { font-size: 22px }
  50% { font-size: 18px } 
  75% { font-size: 22px } 
  100% { font-size: 18px } 
}

padding-bottom: 60px;

.art_1 {
    position: absolute;
    margin-top: -50%;
    margin-left: 0%;
    left: 0;
    z-index: 0;
    animation: shimmer 3.5s infinite ease-in-out;
    transition: transform 11s ease-out;
    text-align: center;
    
    font-size: 20px;
    // color: white;
  }

  .art_2 {
    position: absolute;
    margin-top: -50%;
    margin-left: 0%;
    left: 0;
    z-index: 0;
    text-align: center;
    animation: shimmer 3.5s 1.75s infinite ease-in-out;
    transition: transform 11s ease-out;
    
    font-size: 20px;
    // color: white;
  }

  .pree  {
    width: 100%;
    font-family: monospace;
    white-space: pre-wrap;
    font-weight: bold;
    font-family: monospace;
    display: inline-block;
    font-family: monospace;
    unicode-bidi: isolate;
    margin: 1em 0px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.2; /* Adjust line height for readability */
    color:rgb(18, 64, 231);
    // font-size: 12px;
    // animation: shimmer_2 60s infinite linear;
    // color : white
  }

  .circularImage {
    border-radius: 1%;
    margin: 0 20% 0 7%;
  }

  #meeting_button {  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    text-decoration: none;
    color: white;
    background-color:rgb(17, 18, 19);
    border-style: none;
    font-family: "Yantramanav", sans-serif;
    transition-duration: 0.2s;
    border-radius: 10px;
    box-shadow: 0 9px rgb(11, 12, 12);
    margin-top: 0px;
    padding-top: 20px;
    border-style: solid;
    border-color: rgb(11, 17, 19);
    border-width: 1px;
    user-select: none;
    &:hover {
      color: #ffa500;
    }
    &:active {  
      box-shadow: 0 5px rgb(11, 17, 19);
      transform: translateY(8px);
      border-color: rgb(11, 17, 19);
      transition: transform 0.1s;
    }
    font-size: 70px;
    padding-bottom: 15px;
  }


  
  

  @keyframes Animation { 
    0%{background-position: 50% 100%}
    100%{background-position: 50% 0%}
  }

  @keyframes ReverseAnimation { 
    0%{background-position: 50% 0%}
    100%{background-position: 50% 100%}
  }

  .section {
    padding-top: 50px;
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-bottom: 22px;
    margin-left: 15px;
    margin-right: 15px;
    transition-duration: 0.15s;
  }

  .content {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 1300px;
    gap: 25px;
    margin: 0 10px 0 10px;
  }

  .header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 30px;
    z-index: 2;
    // width: 60vw;
  }

  .photo_header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    justify-content: center;
    gap: 15px;
    z-index: 2;
  }

  .photo {
    padding: 0px 0px 0px 0px;
    align-self: flex-end;
    z-index: 2;
    width: 55%;
    min-width: 350px;
    margin-right: 5px;
    border-radius: 15px;
  }

  img {
    border-radius: 10px;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 60px;
    font-weight: 700;
    color: white;
    display: inline;
    margin-bottom: -5px;
    align-self: flex-start;
    margin-top: 0px;
    margin-left: 2px;
    line-height: 1.2;
    z-index: 2;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
    margin-left 2px;
  }

  /* #resumePDF {
    display: flex;
    padding: 15px 25px;
    justify-content: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #1f282e;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #141b1f;
    margin-top: 10px;
    width: 80%;
    font-family: "Yantramanav", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: white;
    margin-top: 30px;
  }

  #resumePDF:hover {
    background-color: #3e8e41;
  }

  #resumePDF:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #181f24;
    transform: translateY(4px);
  } */

  .intro {
    font-weight: 400;
    margin-bottom: 15px;
    transition: all 2s ease;
    z-index: 2;
  }

  .project_section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .project_content {
    display: flex;
    max-width: 1300px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 35px;
    padding-top: 35px;
    padding-bottom: 35px;
    border-top: solid;
    border-bottom: solid; 
    border-width: 0.5px; 
    border-image: radial-gradient(rgb(72, 72, 72) 97%, transparent 100%) 1;
    z-index: 2;
  }

  .project_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px;
    border-radius: 10px;
    border-style: solid;
    
    border-width: 0.5px;
    transition-duration: 0.2s;
    &:hover {
      border-color: #FFA500;
    }
    background-color: rgb(17, 18, 19);
    border-color: rgb(17, 18, 19);
    // background-color: rgb(13, 13, 14);
    // border-color: rgb(13, 13, 14);
  }

  #open_in_new {
    margin-left: auto;
    margin-right: -5px;
    margin-top: -38px;
    font-size: 40px;
    // color: rgb(17, 18, 19);
    
    pointer-events: none;
    transition-duration: 0.2s;
    opacity: 0;
  }

  .project_header:hover #open_in_new {
    color: #FFA500;
    opacity: 0.8;
  }

  .project_link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .project_h2 {
    font-family: "Yantramanav", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: white;
    margin-bottom: -5px;
    margin-top: -5px;
  }

  .technologies {
    font-size: 16px;
    color: white;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  img {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }

  .project-photo {
      height: 145px;
      overflow: hidden;
      border-radius: 10px;
    }

  .project_p {
    font-family: "Yantramanav", sans-serif;
    font-size: 16px;
    font-weight: 100;
    color: #bebebe;
    margin: 15px 0px 0px 0px;
  }

  .project-buttons {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    flex-grow: 1;
    gap: 15px;
    justify-content: flex-end;
  }

  .project-buttons > * {
    text-decoration: none;
    color: white;
    background-color: #1e282e;
    border-style: none;
    font-family: "Yantramanav", sans-serif;
    font-size: 21px;
    font-weight: 600;
    transition-duration: 0.01s;
    border-radius: 10px;
    box-shadow: 0 9px #131a1d;
    margin-top: -5px;
    border-style: solid;
    border-color: #1e282e;
    border-width: 1px;
    user-select: none;
    &:hover {
      color: #ffa500;
      font-size: 21px;
    }
    &:active {
      box-shadow: 0 5px #181f24;
      transform: translateY(4px);
      transition-duration: 0.01s;
      border-color: #1e282e;
    }
  }

  .project_github {
    align-self: flex-end;
    padding: 15px 65px 15px 65px;
  }

  .project_demo {
    align-self: flex-end;
    padding: 15px 70px 15px 70px;
  }

  #disabled-button {
    border-style: dashed;
    border-color: #242f36;
    border-width: 5px;
    width: 197px;
    background-color: #181f24;
    box-shadow: 0 9px #131a1d;
    &:hover {
    }
    &:active {
      transform: none;
    }
  }

  .article_card {
    position: relative;
    flex-basis: 31.5%;
    transition-duration: 0.15s;
    height: 180px;
  }

  .article_card  p {
    font-size: 13px;
    display: flexbox;
    margin-top: 0px;
    position: absolute;
    padding-bottom: 6px;
    bottom: 0;
    margin-right: 10px;
  }

  .mathematics {
    position: absolute;
    left: 0.2;
    bottom: 0;
    margin-bottom: 15px;
  }

  .biology {
    position: absolute;
    left: 0.2;
    bottom: 0;
    margin-bottom: 15px;
  }

  .finance {
    position: absolute;
    left: 0.2;
    bottom: 0;
    margin-bottom: 15px;
  }

  .software {
    position: absolute;
    left: 0.2;
    bottom: 0;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 3900px) {
    .art_1 {
      margin-top: -21%;
    }

    .art_2 {
      margin-top: -20%;
    }
  }

  @media only screen and (max-width: 3400px) {
    .art_1 {
      margin-top: -24%;
    }

    .art_2 {
      margin-top: -22%;
    }
  }

  @media only screen and (max-width: 3200px) {
    .art_1 {
      margin-top: -25%;
    }

    .art_2 {
      margin-top: -23%;
    }
  }

  @media only screen and (max-width: 3100px) {
    .art_1 {
      margin-top: -35%;
    }

    .art_2 {
      margin-top: -31%;
    }
  }

   @media only screen and (max-width: 2700px) {
    .art_1 {
      margin-top: -50%;
    }

    .art_2 {
      margin-top: -50%;
    }
  }

  @media only screen and (max-width: 2200px) {
    .art_1 {
      margin-top: -70%;
    }

    .art_2 {
      margin-top: -70%;
    }
  }

  @media only screen and (max-width: 1900px) {
    .art_1 {
      margin-top: -95%;
    }

    .art_2 {
      margin-top: -95%;
    }
  }

  @media only screen and (max-width: 1600px) {
    .art_1 {
      margin-top: -125%;
    }

    .art_2 {
      margin-top: -125%;
    }
  }

  @media only screen and (max-width: 1400px) {
    .art_1 {
      margin-top: -150%;
    }

    .art_2 {
      margin-top: -150%;
    }
  }

  @media only screen and (max-width: 1279px) {
    .art_1 {
      margin-top: -110%;
      font-size: 14px;
    }

    .art_2 {
      margin-top: -110%;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1050px) {
    .art_1 {
      margin-top: -140%;
    }

    .art_2 {
      margin-top: -140%;
    }
  }

  @media only screen and (max-width: 950px) {
    .art_1 {
      margin-top: -200%;
    }

    .art_2 {
      margin-top: -200%;
    }
  }

  @media only screen and (max-width: 800px) {
    .art_1 {
      margin-top: -120%;
      font-size: 10px;
    }

    .art_2 {
      margin-top: -110%;
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 699px) {
    .art_1 {
      margin-top: -175%;
      font-size: 10px;
    }

    .art_2 {
      margin-top: -145%;
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 599px) {
    .art_1 {
      margin-top: -160%;
      font-size: 8px;
    }

    .art_2 {
      margin-top: -140%;
      font-size: 8px;
    }
  }

  @media only screen and (max-width: 500px) {
    .art_1 {
      margin-top: -235%;
      font-size: 8px;
    }

    .art_2 {
      margin-top: -200%;
      font-size: 8px;
    }
  }

  @media only screen and (max-width: 400px) {
    .art_1 {
      margin-top: -315%;
      font-size: 8px;
    }

    .art_2 {
      margin-top: -295%;
      font-size: 8px;
    }
  }

  @media only screen and (max-width: 352px) {
    .art_1 {
      margin-top: -445%;
      font-size: 8px;
    }

    .art_2 {
      margin-top: -435%;
      font-size: 8px;
    }
  }

   @media only screen and (max-width: 299px) {
    .art_1 {
      margin-top: -445%;
      font-size: 6px;
    }

    .art_2 {
      margin-top: -435%;
      font-size: 6px;
    }
  }

  @media only screen and (max-width: 1340px) {
    .article_card {
    height: 130px;
    }
  }
  @media only screen and (max-width: 1330px) {
    .article_card {
      flex-basis: 47.8%;
      
    } 
  }

  @media only screen and (max-width: 1200px) {
    .article_card {
      flex-basis: 47.8%;
      
    } 
  }

  // @media only screen and (max-width: 1115px) {
  //   .article_card {
  //     flex-basis: 47.8%;
  //   } 
  // }
    

  @media only screen and (max-width: 1055px) {
    .article_card {
      flex-basis: 47.8%;
      
      
    } 
  }

  @media only screen and (max-width: 940px) {
    .article_card {
      flex-basis: 47.5%;
    } 
  }

   @media only screen and (max-width: 845px) {
    .article_card {
      flex-basis: 47.2%;
      
    } 
  }

   @media only screen and (max-width: 785px) {
    .article_card {
      flex-basis: 47.1%;
    } 

    .flex-container {
      width: 99.4%;
      min-width: 300px;
    }
  }

  @media only screen and (max-width: 1300px) {

    .project_p {
      font-size: 14px;
    }
  }

   @media only screen and (max-width: 1150px) {

   h1 {
      font-size: 55px;
    }

    p {
      font-size: 25px;
    }

    #meeting_button {
      padding: 5% 0 4% 0;
    }

    .circularImage {
      width: 300px;
    }

    .section {
      padding-top: 35px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-bottom: 22px;
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 25px;
      padding-right: 25px;
      transition-duration: 0.15s;
    }

    .project_section {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }

    .header {
      overflow: hidden;
      display: flex;
      flex-flow: column nowrap;
      flex-grow: 1;
      flex-basis: 0;
      align-items: center;
      gap: 15px;
      z-index: 2;
    } 
  }

  @media only screen and (max-width: 1085px) {

    // h1 {
    //   margin-top: auto;
    // }

    .photo {
      width: 65%;
      min-width: 310px;
    }
    
    h1 {
      font-size: 40px;
    }
      
    .intro {
      font-size: 21px;
    }

    #meeting_button {
      height: 110px;
    }
   

    .section {
      padding-top: 35px;
      // display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-bottom: 2vh;
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 35px;
      padding-right: 25px;
    }
    
    #digital_cupboard_header {
      display: none;
    }

    // .project_section {
    //   display: flex;
    //   flex-flow: row nowrap;
    //   justify-content: center;
    // }

    .project_content {
      padding-top: 50px;
      padding-bottom: 50px;
      width: 100%;
    }

    .grid {
      padding-top: 20px;
    }

    .header {
      overflow: hidden;
      display: flex;
      flex-flow: column nowrap;
      flex-grow: 1;
      flex-basis: 0;
      align-items: center;
      gap: 15px;
      z-index: 2;
      padding-bottom: 15px;
    } 

      

    // .project_h2 {
    //   font-size: 22px;
    //   font-weight: lighter;
    //   margin-bottom: 15px;
    // }

    // .technologies {
    //   font-size: 14px;
    //   display: none;
    // }

    // .project_header {
    //   height: 160px;
    //   width: 15%;
    //   flex-basis: 1;
    // }

    // .project-photo {
    //   width: 100%;
    // }

    // .project_p {
    //   display: none;
    // }
  }

  @media only screen and (max-width: 1020px) {
    #ar_ikea_header {
      display: none;
    }
  
  }

  @media only screen and (max-width: 1000px) {
    // h1 {
    //   font-size: 50px;
    // }

    .project_github {
      align-self: flex-end;
      padding: 10px 15px 10px 15px;
    }

    .project_demo {
      align-self: flex-end;
      padding: 10px 20px 10px 20px;
    }

    #disabled-button {
      display: none;
    }
    
    .circularImage {
      margin-left: 60px;
    }
    
  }

  // @media only screen and (max-width: 880px) {
  // .section {
  //     margin-bottom: -0px;
  //   }
  //   h1 {
  //     font-size: 50px;
  //   }
    
  //   p {
  //     font-size: 25px;
  //   }

  //   .photo {
  //     width: 300px;
  //     margin-right: 5px;
  //   }

  //   .circularImage {
  //     margin-left: 0px;
  //   }
  // }


  // @media only screen and (max-width: 847px) {

  //   .project_h2 {
  //     font-size: 22px;
  //     font-weight: lighter;
  //     display: inline;
  //   }

  //   .technologies {
  //     font-size: 14px;
  //     display: none;
  //   }

  //   // .project_header {
  //   //   height: 160px;
  //   //   padding-bottom: 0px;
  //   // }

  //   .project-photo {
  //     width: 100%;
  //     display: inline;
  //     margin-top: 20px;
  //   }

  //   .project_p {
  //     display: none;
  //   }

  //   #digital_cupboard_h1 {
  //     margin-bottom: 0px;
  //   }

  //   #digital_cupboard_photo {
  //     margin-top: 6px;
  //   }
  // }

  @media only screen and (max-width: 800px) {

    .article_card h3 {
      font-size: 14px;
    }

    
  }

  @media only screen and (max-width: 794px) {
    
    .section {
      margin-bottom: -3vh;
    }

    p {
      margin-bottom: 100px;
    }
    
    h1 {
      font-size: 50px;
    }
    #meeting_button {
      padding: 8% 0 8% 0;
      box-shadow: none;
      border-style: none;
      background-color:rgb(9, 9, 9);
      margin-top: 5px;
      margin-bottom: 10px;
    }
    .photo_header {
      display: none;
    }
  }

  @media only screen and (max-width: 730px) {

    .section {
      margin-bottom: -10px;
    }

    #meeting_button {
      margin-top: 10px;
      margin-bottom: 0px;
    }

    #ar_ikea_header {
      display: flex;
    }

    #digital_cupboard_header {
      display: flex;
    }

    .project_content {
      display: flex;
      flex-flow: column nowrap;
      margin-top: 0px;
      padding-top: 40px;
      padding-bottom: 40px;
      gap: 15px;
    }

    .grid {
      margin-top: 20px;
    }

    .photo_header {
      display: none;
    }

    #meeting_button {
      height: 35%;
    }

    .project_h2 {
      font-size: 23px;
      font-weight: lighter;
      margin-top: -15px;
    }

    .technologies {
      font-size: 18px;
      font-weight: lighter;
      margin-left: 1px;
      margin-bottom: -10px;
    }

    .project_p {
      font-size: 15px;
      margin-left: 1px;
    }
      

    .project_header {
      height: 100px;
      position: relative;
      z-index: 0;
      background-color: rgb(13, 13, 14);
      border-color: rgb(13, 13, 14);
    }

    .project-photo {
      display: none;
    }

    .project_link {
      margin-top: 12px;
      z-index: 2;
    }

    #open_in_new {
      font-size: 25px;
      margin-bottom: 15px;
    }

    .article_card {
      background-color: rgb(13, 13, 14);
      border-color: rgb(13, 13, 14);
      flex-basis: 46.4%;
      
    }

    .project_h2 {
      font-size: 18px;
    }

    .technologies {
      font-size: 13px;
      margin-top: 1px;
      margin-bottom: -11px;
    }

    .project_p {
      font-size: 12px;
    }

    #open_in_new {
      margin-top: -20px;
      margin-bottom: 0px;
    }

  }
  
  @media only screen and (max-width: 680px) {

    .article_link h3 {
      font-size: 12px;
    }

  }

  @media only screen and (max-width: 670px) {
    .project_section {
      margin-top: 0px;
    }

    .project_header {
      height: 120px;
    }

    .article_card {
      flex-basis: 29.2%;
    }

    .article_link p {
      font-size: 12px;
    }
      
  }

  @media only screen and (max-width: 595px) {
    .project_section {
      margin-top: 25px;
    }

    .project_header {
      height: 120px;
    }

    .article_card {
      flex-basis: 45%;
      height: 140px;
    }

    .article_link p {
      font-size: 12px;
    }

    #hritonenko {
      display: none;
    }

    #gildan_2 {
      display: none;
    }
      
  }


  @media only screen and (max-width: 499px) {

   .intro {
    margin-bottom: 0px;
    padding-bottom: 10px;
   }


   #meeting_button {
   margin-top: 10px;
    margin-bottom: 0px;
   }  

  }

  @media only screen and (max-width: 489px) {

    gap: 25px;

    .project_github {
      align-self: flex-end;
      padding: 10px 15px 10px 15px;
    }

    .project_demo {
      align-self: flex-end;
      padding: 10px 20px 10px 20px;
    }

    #disabled-button {
      display: none;
    }
  }

  @media only screen and (max-width: 475px) {
    // .project_h2 {
    //   font-size: 18px;
    // }

    // .technologies {
    //   font-size: 14px;
    //   margin-top: 4px;
    //   margin-bottom: -11px;
    // }

    // .project_p {
    //   font-size: 12px;
    // }

    // #open_in_new {
    //   margin-top: -20px;
    //   margin-bottom: 0px;
    // }



    // #meeting_button {
    //   margin-top: -15px;
    // }

    
  }

  @media only screen and (max-width: 420px) {
    .header {
      gap: 10px;
    }
    h1 {
      font-size: 45px;
    }

    p {
      font-size: 25px;
    }
  }

   @media only screen and (max-width: 437px) {
    

    .flex-container {
      gap: 8px;
    }

  }

  @media only screen and (max-width: 365px) {

    .project_section{
      margin-top: 40px;
    }
    .project_content {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .grid {
      padding-top: 20px;
      margin-left: 25px;
      margin-right: 25px;
      padding-left: 0px;
      flex-direction: column;
      justify-content: normal;
    }

    .flex-container {
      min-width: 10px;
    }

    .row {
      margin-left: 0;
      margin-right: 0;
      flex-direction: column;
      min-width: 10px;
    }
   .article_card {
      flex-basis: 97%;
      flex-grow: 1;
      height: 100px;
      width: 20%;
      min-width: 10px;
    }

    

    h1 {
      font-size: 35px;
    }

    .project_header {
      padding-bottom: 30px;
    }

    .project_p {
      display: none;
    }

    #meeting_button {
      margin-top: 20px;
    }

    .section {
      margin-bottom: -10px;
    }

    
  }

  // @media only screen and (max-width: 350px) {
  //   .project_h2 {
  //     font-size: 30px;
  //   }
  //   .content {
  //     margin-right: 15px;
  //   }
  // }

  // @media only screen and (max-width: 335px) {
  //   h1 {
  //     font-size: 35px;
  //   }

  //   .project_header {
  //     padding-bottom: 30px;
  //   }

  //   .project_p {
  //     display: none;
  //   }
  // }
`
