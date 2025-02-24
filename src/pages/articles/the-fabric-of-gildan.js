import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_6 = () => {
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
      pageWrapper.style.backgroundPosition = "50% 0%"
      pageWrapper.style.animation = "Animation 7s ease"
      return
    }
  }
  return (
    
    <Wrapper>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@100;200;300;400;500;600;700;800;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet"/>
    </head>
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>The Fabric of Gildan Hangs on the Thread of a Proxy War Between Leading Minority Shareholders</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
            <p class="date_time_text">Gildan Activewear, Inc.</p>
            <p class="date_time_text">February 14, 2024</p>
            <br class="header_br" />
            <div>
                <StaticImage src="../../assets/images/gildan-4.png"  placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />          

            </div>


            <p class="figure_text">Gildan’s share price drops after Chamandy’s firing announcement</p>
            <p class="source_text">Source: Yahoo Finance </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >TORONTO, Feb 14, 2024 --- On December 11, 2023, Gildan announced the abrupt departure of their CEO and co-founder Glenn Chamandy, who has led the company for over 20 years, through which investors saw over 8000 per cent returns. This prompted some of Gildan’s largest investors to act – throughout the following week, major stakeholders such as Browning West, Turtle Creek Asset Management, Pzena Investment Management have released public statements calling for the immediate reinstatement of Chamandy. By the weeks end, shareholders with a collective 33% stake in Gildan voiced their vehement disapproval of the board’s actions. Before addressing these concerns, on December 18, 2023, Gildan announced an agreement with Coliseum Capital Management, in which Gildan Chairman Donald Berg invited Chris Shackleton to the board and Coliseum announced their intent to become the largest shareholder in Gildan. The announcement ended with Berg reasserting that Chamandy’s “succession” was a deliberate and planned process. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >On December 20, 2023, Gildan Activewear Directors published an open letter to their shareholders, where they attempted to address shareholder concerns and increase confidence in the board’s actions. The joint statement from Donald Berg and several Gildan board members seemed like it was scrutinized with a fine-toothed public-relations comb until it was stripped of any authenticity. Every sentence was meticulously crafted to say something about the situation without hurting the bottom line. Most of the statement detailed the reasons why the directors of Gildan “came to the unanimous decision” to “remove” Glenn Chamandy. First, Chamandy “struggled” to find any avenues of “long-term, organic growth” in the last 4 years. Next, Chamandy agreed to step down in 2021, and has been working with Gildan to find a successor during the past 3 years. Lastly, he proposed an “untenable” expansion strategy which centered on him retaining his position for years, directly contradicting his plans to step down from the company. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >It's interesting to see how the statement addresses Gildan’s incredible success under Chamandy while making sure not to throw too much praise onto the ex-CEO, and then immediately pivots to why the company will fail under his leadership while avoiding any statements which can hurt the company. Another interesting observation – the directors of Gildan reveal a detailed timeline of events leading up to Chamandy’s “departure”, describing Chamandy’s supposed declining performance and reneging on his retirement agreement. The directors even found it necessary to directly quote Chamandy claiming he had no intention of leaving the company on December 16, 2023. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >However, the information they disclosed about the succession plan was vague and sparse. Besides the start and end date of the CEO candidate recruitment, all we learn about the process was that it was “professionally run, the exact way that a responsible public company should approach succession.” It was clear that Gildan leadership had no plans to reinstate Chamandy. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In response to this open letter, major stakeholder Browning West issued a letter to Gildan’s shareholders announcing their intent to hold a “special meeting” to “reconstitute” the board of directors. In this letter, Browning West stated that Gildan Activewear’s stock has underperformed 19% since Gildan announced the firing of Glenn Chamandy, and urged fellow shareholders to remove 5 directors from Gildan’s board and appoint 5 directors of Browning West’s recommendation. This move mirrors Gildan’s own appointment of Chris Shackleton to the board, Gildan’s partnership with Coliseum Capital Management, and suggests a consolidation of power for a future proxy battle, in which the control and future of Gildan is at stake.            </p>
            <br class="header_br" />
            
            
            <p class="references_text">SOURCES:</p>
            <p class="references_text">Gildan. Gildan Activewear announces leadership changes - Vince Tyra appointed as president and CEO; Glenn Chamandy leaving. https://gildancorp.com/en/media/news/-leadership-changes-vinces-tyra-appointed-CEO/ </p>
            <p class="references_text">Yahoo! (n.d.-a). Browning west issues letter to Gildan Activewear shareholders announcing intent to requisition special meeting to Reconstitute Board of Directors. Yahoo! Finance. https://finance.yahoo.com/news/browning-west-issues-letter-gildan-200000169.html  </p>
            <p class="references_text">Yahoo! (n.d.-a). Gildan Activewear Directors issue open letter to shareholders. Yahoo! Finance. https://finance.yahoo.com/news/gildan-activewear-directors-issue-open-130000503.html  </p>
            <p class="references_text">Yahoo! (n.d.-a). Gildan welcomes Chris Shackelton to its board of directors, along with support from Coliseum Capital Management. Yahoo! Finance. https://finance.yahoo.com/news/gildan-welcomes-chris-shackelton-board-222600000.html </p>
            <p class="references_text">Yahoo! (n.d.-e). Turtle Creek Asset Management calls on the board of Gildan Activewear to immediately re-appoint Glenn J. Chamandy as its CEO. Yahoo! Finance. https://finance.yahoo.com/news/turtle-creek-asset-management-calls-220000833.html  </p>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  #no_indent {
    text-indent: 0;
  }

  .figure_image {
    display: flexbox;
    z-index: 5;
    opacity: 1;
    height: 400px;
    width: 700px;
  }

  width: 45%;
  min-width: 1200px;
  max-width: 1200px;
  grid-row: 1;
  grid-column: 1;
  padding: 0px 0px 0px 0px;
  background-color: rgb(9, 9, 9);
  // position: absolute;
  z-index: 5;

  font {
    display: inline-block; /* Ensures proper word-breaking */
    overflow-wrap: break-word;
    word-wrap: break-word;
    
  }

  .article_home_link {
    font-family: "Noto Serif Georgian", serif;
    font-size: 14px;
    display: flex;
    margin-top: auto;
    margin-bottom: 8px;
    margin-left: 0px;
    margin-right: 5px;
}

.article_home_link span {
  width: 70px;
}

h1 {
    // font-family: "Yantramanav", sans-serif;
     font-family: "Noto Serif Georgian", serif;
    font-size: 23.5px;
    font-weight: 500;
    color: white;
    display: inline;
    margin-left: 0px;
    align-self: flex-start;
    margin-bottom: 5px;
  }


   .header {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
  }

  .section {
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 20px;
    padding-bottom: 0px;
  }

  .grid {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    overflow-x: hidden;
    flex-flow: row;
    border-color: red;
    margin-bottom: 60px;
    padding-top: 20px;
    overflow-y: hidden;
    
  }
  .row {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    justify-content: center;
    border-color: yellow;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track { 
    -webkit-border-radius: 10px;
    border-radius: 0px;
    background: rgb(24, 26, 27);
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 0px;
    background:rgb(102, 98, 98); 
}
  }

  .flex-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;
    border-color: blue;
    margin-right: 300px;
    height: 750px;
    overscroll-behaviour: auto;
    margin-left: 126px;
    margin-right: 25px;
  }
  
  .article_card {
    display: flexbox;
    overflow: hidden;
    background-color: rgb(17, 22, 25);
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
    margin-left: 25px;
    margin-right: 25px;
    border-color: yellow;
    width: 100%;
    align-items: center;
  }

  .flex-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;
    border-color: blue;
    width: 200%;
  }
.article_card {
    font-family: "Yantramanav", sans-serif;
    display: flex;
    overflow: hidden;
    background-color: rgb(17, 18, 19);
    border-radius: 10px;
    flex-basis: 48.5%; // change 'flex' to 'flex-basis' and remove the 0s, b/c the width is locked
    height: 110px;
    z-index: 2;
    border-style: solid;
    border-color: rgb(17, 18, 19);
    border-width: 0.5px;
    transition-duration: 0.05s;
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
  }

  .article_card p {
    display: flex;
    align-self: flex-end;
    font-size: 16px;
    pointer-events: none;
    margin-right: 6px;
    margin-top: auto;
    margin-bottom: 6px;
  }
  .article_card div {
    display: flex;
    align-self: flex-start;
    margin-left: 2px;
    pointer-events: none;
  }

  .date_time_text {
    display: flex;
    font-size: 15px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    margin-top: 4px;
    line-height: 0.2;
    margin-left: -40px;
  }

  .article_text {
    // display: flex;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
  }

  .article_header_text {
    display: flex;
    font-size: 20px;
    font-family: Roboto;
    flex-grow: 1;
text-indent: 0px;
    font-family: "Noto Serif Georgian", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
    align-self: flex-start;
    text-decoration: underline;
  }

  .article_subheader_text {
    display: flex;
    font-size: 19px;
    font-family: Roboto;
    flex-grow: 1;
    text-indent: 0px;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
    align-self: flex-start;
    text-decoration: underline;
  }

  .header_br {
    display: flexbox;
    content: " ";
    margin-top: 0px;
  }

  .figure_text {
    display: flex;
    font-size: 14px;
    font-family: Roboto;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin-top: -10px;
    text-indent: 0px;
  }
  .source_text {
    display: flex;
    font-size: 14px; 
    font-family: Roboto;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin-top: -10px;
    text-indent: 0px;
  }

  .references_text {
    display: flex;
    font-size: 14px;
    font-family: Roboto;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
    text-indent: 0px;
  }
  

  * {
    box-sizing: border-box;
  }


 h3 {
    font-family: "Yantramanav", sans-serif;
  }
 

  






  min-height: 100vh;
  

  .content {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-left: 25px; 
    margin-right: 25px;
    gap: 25px;
    border-bottom: solid;
    border-width: 0.5px;
    border-image: radial-gradient(rgb(72, 72, 72) 99%, transparent 100%) 1;
  }



  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color:rgb(206, 206, 206);
    margin: 0px 0px 0px 0px;
    line-height: 1.5;
    text-indent: 40px;
  }

  .header {
      margin-top: -3px;
      padding-bottom: 1px;
      // gap: 10px;
    }
    

    .article_home_link {
      // min-width: 70px;
      // margin-right: 0px;
      // padding-right: 0px;
    }

    

    h1 {
      line-height: 1.1; 
    }

 @media only screen and (max-width: 1200px) {
    width: 100%;
    min-width: auto;
    max-width: auto;

    .flex-container {
      margin-left: 45px;
    }

    .row {
      align-items: unset;
      padding-left: 0px;
    }

    .flex-container {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    .article_home_link span {
      display: none;
    }

    .article_home_link:after {
      content: "➤"
    }

    .header {
      justify-content: left;
    }

    .flex-container {
      margin-left: 5px;
    }

    .row {
      margin-right: 5px;
    }
    

  }

  @media only screen and (max-width: 721px) {
    .row {
      height: 710px;
    }
  }



  @media only screen and (max-width: 443px) {
    .row {
      height: 660px;
    }
  }

  @media only screen and (max-width: 359px) {
    .row {
      height: 620px;
    }
  }

`

export default article_6