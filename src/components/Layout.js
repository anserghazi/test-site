import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import NavBar from "./Navbar"
import styled from "styled-components"
import senya from "../assets/audio/senya.mp3"
import crow from "../assets/audio/crow.mp3"
import tsukuyomi from "../assets/audio/tsukuyomi.mp3"
import genjutsu from "../assets/audio/genjutsu.wav"
import please from "../assets/audio/please.wav"
import stars from "../assets/utils/stars.js"
import removeStars from "../assets/utils/removeStars.js"
import { ContextProviderComponent } from "./Context"
import ContextConsumer from "./Context.js"
import Stars from "./Stars.js"


const Layout = ({ children }) => {
  const [curtain, setCurtain] = useState("up");
  const [lightSwitch, setLightSwitch] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [itachi, setItachi] = useState("hidden")

  const updateStarColor = () => {
    let lightswitch = document.getElementById("lightswitch");
    let star = lightSwitch

    if (!star) {
      return
    }
    
   
    if (window.location.pathname === "/resume") {
      // star.style.color = "yellow"
      star.style.color = "white"
    } else {
      // star.style.color = "rgb(18, 64, 231)"
      star.style.color = "white"
    }

    if (!isClicked) {
      star.style.color = "white"
    }
    
    if (window.innerWidth >= 3400 && window.innerWidth < 3900) {
      star.style.transition = "color 1.5s ease-in, transform 11s "
    } 
    if (window.innerWidth >= 3200 && window.innerWidth < 3400) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
    if (window.innerWidth >= 3100 && window.innerWidth < 3200) {
      star.style.transition = "color 1.5s ease-in-out, transform 10s "
    } 
    if (window.innerWidth >= 2800 && window.innerWidth < 3100) {
      star.style.transition = "color 1.5s ease-in-out, transform 13s "
    } 
    if (window.innerWidth >= 2700 && window.innerWidth < 2800) {
      star.style.transition = "color 1.5s ease-in-out, transform 13s "
    } 
    if (window.innerWidth >= 2500 && window.innerWidth < 2700) {
      star.style.transition = "color 1.5s ease-in-out, transform 9s "
    } 
    if (window.innerWidth >= 2200 && window.innerWidth < 2500) {
      star.style.transition = "color 1.5s ease-in-out, transform 10s "
    } 
    if (window.innerWidth >= 1900 && window.innerWidth < 2200) {
      star.style.transition = "color 1.5s ease-in-out, transform 10s "
    } 
    if (window.innerWidth >= 1750 && window.innerWidth < 1900) {
      star.style.transition = "color 1.5s ease-in-out, transform 9s "
    } 
    if (window.innerWidth >= 1600 && window.innerWidth < 1750) {
      star.style.transition = "color 1.5s ease-in-out, transform 14s "
    } 
    if (window.innerWidth >= 1500 && window.innerWidth < 1600) {
      star.style.transition = "color 1.5s ease-in-out, transform 9s "
    } 
    if (window.innerWidth >= 1400 && window.innerWidth < 1500) {
      star.style.transition = "color 1.5s ease-in-out, transform 14s "
    } 
    if (window.innerWidth >= 1280 && window.innerWidth < 1400) {
      star.style.transition = "color 1.5s ease-in-out, transform 14s "
    } 
    if (window.innerWidth >= 1080 && window.innerWidth < 1280) {
      star.style.transition = "color 1.5s ease-in-out, transform 10s "
    } 
    if (window.innerWidth >= 800 && window.innerWidth < 1080) {
      star.style.transition = "color 1.5s ease-in-out, transform 14s "
    } 
    if (window.innerWidth >= 700 && window.innerWidth < 800) {
      star.style.transition = "color 1.5s ease-in-out, transform 10s "
    } 
    if (window.innerWidth >= 600 && window.innerWidth < 700) {
      star.style.transition = "color 1.5s ease-in-out, transform 9s "
    } 
    if (window.innerWidth >= 500 && window.innerWidth < 600) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
    if (window.innerWidth >= 400 && window.innerWidth < 500) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
    if (window.innerWidth >= 350 && window.innerWidth < 400) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
    if (window.innerWidth >= 300 && window.innerWidth < 350) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
    if (window.innerWidth < 300) {
      star.style.transition = "color 1.5s ease-in-out, transform 11s "
    } 
     

    
  }
  
  const lights = () => {
    if (lightSwitch != null) {
      let lightswitch = document.getElementById("lightswitch");
      let star = lightSwitch
      star.style.transitionTimingFunction = "ease-in-out"

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
        setCurtain("down")
        star.style.transform = "rotate(7155deg)"
        // star.style.color = "rgb(18, 64, 231)"
        star.style.color = "white"
        if (window.location.pathname === "/resume") {
          // star.style.color = "yellow"
          star.style.color = "white"
        }
        stars()
        setTimeout(function(){lightswitch.style.pointerEvents = "auto"; star.style.transitionDuration= "0.2s"}, 4500);
      }
      else if (curtain === "down") {
        setCurtain("up")
        star.style.transform = "rotate(-7200deg)"
        star.style.color = "white"
        star.style.transitionDuration = "5s"
        removeStars()
        setTimeout(function(){lightswitch.style.pointerEvents = "auto"; star.style.transitionDuration= "0.2s"}, 2000);
      }
      lightswitch.style.pointerEvents = "none"
    }
  }

  const updateWrapperHeight = () => {
    if (document.location.pathname === "/resume") {
      let wrapper = document.getElementById("dynamic_wrapper");
      wrapper.style.height = "900px"
      wrapper.style.overflow = "hidden"
    } else if (document.location.pathname === "/articles") {
      let wrapper = document.getElementById("dynamic_wrapper");
      wrapper.style.height = "900px"
      wrapper.style.overflow = "hidden"
    } else if (document.location.pathname === "/projects") {
      let wrapper = document.getElementById("dynamic_wrapper");
      wrapper.style.height = "900px"
      wrapper.style.overflow = "hidden"
    } else if (document.location.pathname.split("/")[1] === "articles") { //maybe remove this
      let wrapper = document.getElementById("dynamic_wrapper");
      wrapper.style.display = "flex"
      wrapper.style.flexFlow = "column  nowrap"
      wrapper.style.alignItems = "center"
      wrapper.style.height = "880px"
      wrapper.style.overflow = "hidden"
    } else {
      let wrapper = document.getElementById("dynamic_wrapper");
      wrapper.style.height = "1400px"
      wrapper.style.overflow = "hidden"
    }
    
  }
  
  useEffect(() => {
    console.log(isClicked, curtain, itachi)
    lights();
  }, [isClicked, itachi])
  
  let currentWindow = null;

  if (typeof window !== "undefined") {
    currentWindow = window.location.pathname
  }
  
  useEffect(() => {
    updateStarColor();
    updateWrapperHeight();
  }, [currentWindow])
  

  return (
    <ContextProviderComponent>
      <ContextConsumer>
        {({ data }) => {
          setIsClicked(data.isClicked)
          setCurtain(data.curtain)
          setItachi(data.itachi)
          return (
            <div style={{display: "none"}}>
                {data.isClicked ? `clicked` : `not yet clicked`}
            </div>
          );
        }}
      </ContextConsumer>
      
      <Page>
        
        <Helmet>
          <title>Anser Ghazi</title>
        </Helmet>
        <NavBar curtain={curtain} setCurtain={setCurtain} setLightSwitch={setLightSwitch} lights={lights}/>
        
        <Wrapper>
        
          <Content id="dynamic_wrapper"><Stars></Stars>{children}</Content>
          <Footer>
            <div class="footer-div">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anserghazi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anserghazi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gatsby
                  </a>
                </li>
              </ul>
            </div>
          </Footer>
          
          <audio id="audio_senya" src={senya}></audio>
          <audio id="audio_crow" src={crow}></audio>
          <audio id="audio_tsukuyomi" src={tsukuyomi}></audio>
          <audio id="audio_genjutsu" src={genjutsu}></audio>
          <audio id="audio_please" src={please}></audio>
        </Wrapper>
        
      </Page>
      
    </ContextProviderComponent>
  )
}

const Page = styled.div`
  height: 100vh;
  background-color: #1e282e;
`

const Wrapper = styled.div`
  padding-top: 0px;
  width: 100%;
  background-color: #1e282e;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  overflow-x: hidden;
  
`

const Content = styled.div`
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
`

const Footer = styled.div`
  // background: linear-gradient(to top, #0f1317 60%, #1e282e 100%);
  background-color: rgb(24, 26, 27);
  
  overflow: visible;
  font-size: 13px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 130px;

  .footer-div {
    display: flex;
    width: 100%;
    max-width: 1400px;
    border-top: solid;
    border-width: 1px;
    border-image: radial-gradient(rgb(72, 72, 72) 90%, transparent 100%) 1;
  }
  ul {
    border-color:rgb(72, 72, 72) ;
    display: flex;
    flex-flow: row nowrap;
    gap: 40px;
    padding: 50px 50px 10px 50px;
    width: inherit;
    margin: 10px 25% 0 25%;
  }

  li {
    display: flex;
    height: 30px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(72, 72, 72);
    border-radius: 8px;
    width: inherit;
    padding: 0 5% 0 5%;
    height: 30px;
    justify-content: center;
    align-items: center;
    transition-duration: 0.5s;
    &:hover {
      background-color:rgb(75, 75, 81);
      transition-duration: 0.2s;
      text-decoration: none;  
      border-color: white;
      cursor: pointer;
    }
  }

  li:hover a {
    color: white;
  }

  a,
  li {
    transition-duration: 0.5s;
    color: #bebebe;
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
    margin-top: 0px;
    
  }

  a:hover {
    text-decoration: none;
    color: white;
  }

  @media only screen and (max-width: 800px) {
    ul {
      margin: 0 10px 0 10px;
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 500px) {
    ul {
      gap: 30px;
    }
  }
`

export default Layout
