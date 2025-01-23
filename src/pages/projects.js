import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/global.css"

const Projects = () => {



  return (
    <Wrapper>
      <div class="section">
        <div class="content">
          <div class="header">
            <h1>Projects</h1>
          </div>
        </div>
      </div>



      <div class="background_image">
        <StaticImage
          src="../assets/images/asset_bg.png"
          width={800}
        />
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
      
    </Wrapper>
  )
}

const Wrapper = styled.div`

.background_image {
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  margin-top: 18%;
  margin-right: 16%;
  
}

// @keyframes Animation { 
//     0%{background-position: 50% 100%}
//     100%{background-position: 50% 0%}
//   }

//   @keyframes ReverseAnimation { 
//     0%{background-position: 50% 0%}
//     100%{background-position: 50% 100%}
//   }

position: absolute;
top: 0;
left: 0;
width: 100vw;
  .section {
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-bottom: 40px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 0px;
  }

  .content {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1250px;
    gap: 25px;
  }

  .header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 15px;
  }

  .photo_header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 15px;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: white;
    display: inline;
    margin-bottom: -5px;
    align-self: flex-start;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
  }







  //////////////////////////////////




  min-height: 100vh;
  .section {
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-bottom: 0px;
    
  }

  .content {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;  
    gap: 25px;
    border-bottom: solid;
    border-width: 0.5px;
    border-image: radial-gradient(rgb(72, 72, 72) 99%, transparent 100%) 1;
  }

  .header {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 13px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }


  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: white;
    display: inline;
    align-self: flex-start;
    margin-bottom: 0px;
    justify-self: center;
    align-self: center;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
  }





  ///////////////////////////////////////////////////








  #resumePDF {
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
    margin-top: 20px;
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
  }

  .intro {
    font-weight: 600;
  }

  .project_section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 10px;
    margin-bottom: 0px;
    
  }

  .project_content {
    display: flex;
    max-width: 1200px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 0px;
    
  }

  .project_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgb(17, 18, 19);
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px;
    border-radius: 5px;
    z-index: 2;
  }

  .project_h2 {
    font-family: "Yantramanav", sans-serif;
    font-size: 28px;
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
    transition-duration: 0.05s;
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












  /////////////////////////////////////////////////////////////////////////////////////////







  .project_section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .project_content {
    display: flex;
    max-width: 1200px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: -35px;
    padding-top: 35px;
    padding-bottom: 35px;
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

















  ////////////////////////////////////////////////////////////////////////////////////////////////





 @media only screen and (max-width: 1300px) {

    .project_p {
      font-size: 14px;
    }
  }

   @media only screen and (max-width: 1150px) {


    p {
      font-size: 25px;
    }

    #meeting_button {
      padding: 5% 0 4% 0;
    }

    .circularImage {
      width: 300px;
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
    
   
      
    .intro {
      font-size: 21px;
    }

    #meeting_button {
      height: 110px;
    }
   

    
    #digital_cupboard_header {
      display: none;
    }

    // .project_section {
    //   display: flex;
    //   flex-flow: row nowrap;
    //   justify-content: center;
    // }

    
    .grid {
      padding-top: 20px;
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

    

    .project_header {
    }

    .project_section {
      margin-top :-80px;
      max-width: 950px;
    }

    .project_content {
      margin-top :-30px;
    }
    
    

    #digital_cupboard_header {
      display: flex;
    }


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
    
   

    p {
      margin-bottom: 100px;
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



























  ///////////////////////////////////////////////////////////////





























  // @media only screen and (max-width: 1000px) {
  //   h1 {
  //     font-size: 60px;
  //   }

  //   .project_github {
  //     align-self: flex-end;
  //     padding: 10px 15px 10px 15px;
  //   }

  //   .project_demo {
  //     align-self: flex-end;
  //     padding: 10px 20px 10px 20px;
  //   }

  //   #disabled-button {
  //     display: none;
  //   }
  // }

  // @media only screen and (max-width: 790px) {
  //   h1 {
  //     font-size: 50px;
  //   }
  // }

  @media only screen and (max-width: 1000px) {
    .project_content {
      display: flex;
      flex-flow: column nowrap;
      transform: scale(0.8, 0.8);
      // margin-top: -250px;
    }
    .photo_header {
      display: none;
    }

    .project-photo {
      
    }
  }

  @media only screen and (max-width: 670px) {
    .project_section {
      margin-top: 25px;
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

  @media only screen and (max-width: 420px) {
    margin-top: 10px;
    .header {
      gap: 10px;
    }
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 350px) {
    .project_h2 {
      font-size: 30px;
    }
    .content {
      margin-right: 15px;
    }
  }
`

export default Projects
