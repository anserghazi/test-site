import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/global.css"
import ContextConsumer from "../components/Context.js"
import { Link } from "gatsby"

const Articles = () => {
  function niceToMeetYou(str) {
    let pageWrapper = document.getElementById("wrapper")
  
    if (!pageWrapper) {
      return
    }
  
    if (str === "reverse") {
      pageWrapper.style.animation = "ReverseAnimation 5s ease"
      pageWrapper.style.backgroundPosition = "50% 100%"
      return
    }
  
    if (str === "forward") {
      pageWrapper.style.backgroundPosition = "50% 0%" // change to 26 if you want
      pageWrapper.style.animation = "Animation 7s ease"
      return
    }
  }
  return (
    <Wrapper>
      <ContextConsumer>
            {({ data }) => {
                    if (data.isClicked) {
                    niceToMeetYou("forward");
                    } 
                    if ((!data.isClicked) && data.isToggled && !data.isActivated) {
                    niceToMeetYou("reverse");
                    }

                    return (
                      <div style={{display: "none"}}>
                      {data.isClicked ? `clicked` : `not yet clicked`}
                      </div>
                    )
                }
                }
            </ContextConsumer>
      <div class="section">
        <div class="content">
          <div class="header">
            <h1>Articles</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">

          {/* <div class="article_card">
              <h3>Cookwise Retrospective</h3>
              <div class="software">Software</div>
              <p>Jan 2025</p>
            </div> */}

            <div class="article_card">
              <Link to="/articles/cling-wrap-redesigned" class="article_link">
                <h3>Cling Wrap Redesigned Using Whole Systems Analysis and Life Cycle Thinking</h3>
                <div class="biology">Biology</div>
                <p>May 2024</p>
                </Link>
            </div>

            {/* <div class="article_card">
              <h3>Gildan Information Report 2023</h3>
              <div class="finance">Finance</div>
              <p>May 2024</p>
            </div> */}

            <div class="article_card">
              <Link to="/articles/hritonenko-yatsenko" class="article_link">
                <h3>Hritonenko and Yatsenko - Mathematical modelling and optimization, discrete and continuous dynamic systems</h3>
                <div class="mathematics">Mathematics</div>
                <p>Apr 2024</p>
              </Link>
            </div>

            <div class="article_card">
              <Link to="/articles/browning-west" class="article_link">
                <h3>“The Board Has Forced our Hand”: Browning West Calls a Special Shareholder Meeting to “Reconstitute” Gildan’s Board of Directors</h3>
                <div class="finance">Finance</div>
                <p>Mar 2024</p>
              </Link>
            </div>
            
          
            <div class="article_card">
              <Link to="/articles/gildan-seems" class="article_link">
                <h3>Gildan Seems Like A Thread Without Its Needle Now That It Cut Chamandy Loose</h3>
                <div class="finance">Finance</div>
                <p>Mar 2024</p>
              </Link>
            </div>


            
            <div class="article_card">
              <Link to="/articles/uinta-ground-squirrel" class="article_link">
                <h3>Uinta Ground Squirrel Population Density Reduction</h3>
                <div class="mathematics">Mathematics</div>
                <p>Mar 2024</p>
              </Link>
            </div>


            <div class="article_card">
              <Link to="the-fabric-of-gildan" class="article_link">
                <h3>The Fabric of Gildan Hangs on the Thread of a Proxy War Between Leading Minority Shareholders</h3>
                <div class="finance">Finance</div>
                <p>Feb 2024</p>
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
              <Link to="/articles/eastern-honey-bees" class="article_link">
                <h3>Eastern Honey Bees: Stool as a Tool to Defend the Hive</h3>
                
                <div class="biology">Biology</div>
                <p>Nov 2022</p>
              </Link>
            </div>

            <div class="article_card">
              <Link to="/articles/identity-theft-is-not-a-joke" class="article_link">
                <h3>Identity theft is not a joke - How millions of ants suffer every year</h3>
                <div class="biology">Biology</div>
                <p>Oct 2022</p>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

@keyframes Animation { 
    0%{background-position: 50% 100%}
    100%{background-position: 50% 26%}
  }

  @keyframes ReverseAnimation { 
    0%{background-position: 50% 26%}
    100%{background-position: 50% 100%}
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  font {
    display: inline-block; /* Ensures proper word-breaking */
    overflow-wrap: break-word;
    word-wrap: break-word;
    
  }

  .grid {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    flex-flow: row ;
    margin-top: 25px;
    border-color: red;
    margin-bottom: 60px;
  }
  .row {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    max-width: 990px;
    justify-content: flex-start;
    border-color: yellow;
    width: 100%;
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    border-color: blue;
    width: 70%;
    min-width: 750px;
  }
  
  .article_card {
    display: flexbox;
    overflow: hidden;
    background-color: rgb(17, 22, 25);;
    border-radius: 5px;
    flex-basis: 28.3333%; // change 'flex' to 'flex-basis' and remove the 0s, b/c the width is locked
    height: 100px;
    z-index: 2;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    flex-flow: row ;
    margin-top: 0px;
    border-color: red;
    padding-bottom: 45px;
  }
  .row {
    display: flex;
    flex-flow: row wrap;
    max-width: 1200px;
    gap: 25px;
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
    background-color: rgb(17, 18, 19);
    border-radius: 10px;
    flex-basis: 32.5%; // change 'flex' to 'flex-basis' and remove the 0s, b/c the width is locked
    height: 130px;
    z-index: 2;
    border-style: solid;
    border-color: rgb(17, 18, 19);
    border-width: 0.5px;
    transition-duration: 0.2s;
    &:hover {
      border-color: #FFA500;
    }
    padding: 0px 0px 0px 10px;
    flex-direction: column;
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

  .biology {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color: rgb(42, 253, 77);
    font-size: 13px;
    padding: 0px 4px 0px 4px;
    width: 50px;
    opacity: 0.8;
  }

  .finance {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color: rgb(70, 129, 255);
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

  .software {
    margin-top: 5px;
    border-style: solid;
    border-radius: 8px;
    border-width: 0.5px;
    color:rgb(255, 55, 55);
    font-size: 13px;
    padding: 0px 4px 0px 4px;
    opacity: 0.8;
  }

  

  * {
    box-sizing: border-box;
  }


 h3 {
    font-family: "Yantramanav", sans-serif;
  }
 

  






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

  @media only screen and (max-width: 1300px) {

  .section {
    max-width: 1200px;
  }

   .section {
    margin-left: 25px;
    margin-right: 25px;
    max-width: 1200px;
  }

  .row {
    margin-left: 25px;
    margin-right: 25px;
  }
  .article_card {
    flex-basis: 32%;
    height: 170px;
    position: relative;
  }

  .article_card h3 {
    font-size: 16px;  
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
}

@media only screen and (max-width: 850px) {   

.article_card {
    flex-basis: 31.5%;
    height: 142px;
  }
  

  .flex-container {
    min-width: 550px;
    margin-left: 0px;
  }

  .article_card h3 {
    font-size: 14px;
  }
}


@media only screen and (max-width: 650px) {   
  .flex-container {
    min-width: 300px;
    margin-left: 0px;
  }

  .article_card {
    flex-basis: 47.5%;
    height: 142px;
  }


  .article_card h3 {
    font-size: 12px;
  }
}

@media only screen and (max-width: 430px) {   
  

  .grid {
    width: 99%;
    margin-left: 0;
  }
   
  .article_card p {
    font-size: 9px;
  }

  .section {
    margin-left: 0px;
    width: 100%;
  }

  // .content {
  //   margin-left: 0px;
  // }

  h1 {

  }

}

@media only screen and (max-width: 345px) {   
  

  .grid {
    width: 99%;
    margin-left: 0;
  }
   
  .article_card p {
    font-size: 9px;
  }

  .section {
    margin-left: 0px;
    width: 100%;
  }

  .content {
    margin-left: 3%;
  }

  h1 {

  }

}

`

export default Articles