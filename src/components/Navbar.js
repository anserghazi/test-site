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




  if (path === "") {
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
                    
                    if (data.isClicked) {
                      set({ curtain: "down" })
                    } else {
                      set({ curtain: "up" })
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
