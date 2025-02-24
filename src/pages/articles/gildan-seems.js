import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_5 = () => {
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Gildan Seems Like A Thread Without Its Needle Now That It Cut Chamandy Loose</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
            <p class="date_time_text">Gildan Activewear, Inc.</p>
            <p class="date_time_text">March 1, 2024</p>
            <br class="header_br" />
            <div>
                <StaticImage src="../../assets/images/gildan-3.jpg" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />
            </div>

            <p class="figure_text">Chairman Donald Berg and CEO Vince Tyra dominate Gildan’s governance webpage masthead, their images superimposed on a transparent gradient.</p>
            <p class="source_text">Source: Gildan Company Website</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >TORONTO, Feb 29, 2024 --- On February 21, 2024,  Gildan Activewear held their annual earnings conference call, where they answered questions from industry analysts about how the company has performed in their last fiscal year, and where Gildan is headed in 2024. At least, they tried to answer these questions.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >According to Gildan Activewear’s investor relations page , investors and analysts  heard from the same three people every quarter for years – the president and CEO of the company, Glenn Chamandy, and executive VPs, Rhodri T. Harries and Chuck Ward. However, in the wake of Gildan’s succession spectacle, we see a change in the lineup, and Vince Tyra replaces Glenn Chamandy as president and CEO. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In general, an earnings call is meant to review a company’s financial performance in their previous fiscal period and address any potential risks and growth opportunities for the company, according to Investopedia’s James Chen. The A company’s share price experiences more volatility approaching an earnings report, representing peoples’ uncertainty about the company’s financial outlook.  </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In Gildan’s case, they announced an 80% increase in their 2023 Q4 net earnings over their 2022 Q4 net earnings, totalling US$153.3 million in 2023 . Gildan also announced a dividend increase of 10 per cent, raising their quarterly dividend payment from 18.6 cents a share to 20.5 cents a share. Gildan’s share price increased over 8 per cent in the wake of their earnings report and call, from US$33.33 at market close on February 20, 2024, the day prior, to US$36.53 on February 21, 2024, at 9:40 AM, just ten minutes after market open. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >This price increase can be attributed to Gildan’s dividend increase announcement. According to Adam Hayes of Investopedia, a dividend is a payment that a company issues to its shareholders, often distributed quarterly, in the form of cash or stock . Companies dedicate a portion of their revenue for dividend payments to reward their shareholders, attract new investors, and signal confidence in their future performance. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >One common metric to quantify a dividend is the “dividend yield”, which is a number expressed in a percentage, that describes the return an investor gets for purchasing a stock at its current share price and holding onto it through the dividend payment dates through the following fiscal year. This number is a ratio of the annual dividend payment, over the current share price of the stock. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In the case of Gildan, their share price on the eve of the earnings report release was US$33.33, and it capped at US$36.53 that following morning. Their previous dividend payment was 18.6 cents US per quarter, which places their dividend yield at the time at 2.23%. At that same share price, the newly announced 20.6 cents US per quarter placeds their dividend yield at 2.46%. Within ten minutes of market open, the share price soareds to US$36.53 and gradually tapereds off from there. A quarterly dividend of 20.6 cents US at US$36.53, gives us a dividend yield, of, who you guessed it, 2.23%, which represents a return to equilibrium. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In the context of Gildan’s leadership fiasco and the share price movement following this earnings report, this dividend increase seems like a way to boost morale, pump the share price, and distract investors with short-term gains to avoid the lack of a long-term gameplan. According to Gildan leadership, Chamandy was replaced due to a supposed lack of long-term growth strategies, or because of undisclosed investments with a stakeholder, or actually, because of an untenable 5-year growth strategy. While Gildan is embroiled in this public spectacle over the future direction of the company, their new president and CEO cannot address any long-term growth strategies, even from a “big-picture, qualitative perspective” as Jay Sole, managing director at investment bank UBS, so charitably poses the question. Tyra, who has decades of experience in the boardroom, who was brought on specifically to steer Gildan over Chamandy’s vision, replies that he hasn’t quite “nailed down the strategy” and hopes that it will “come as 2024 develops.”            </p>
            <br class="header_br" />
            
            <p class="references_text">SOURCES:</p>
            <p class="references_text">Annual and Quarterly Shareholder Reports. Gildan. https://gildancorp.com/en/investors/reports-and-filings/reports/ </p>
            <p class="references_text">Chen, J. Earnings call. Investopedia. https://www.investopedia.com/terms/e/earnings-call.asp  </p>
            <p class="references_text">Governance. Gildan. https://gildancorp.com/en/company/governance/  </p>
            <p class="references_text">Hayes, A. Dividends: Definition in stocks and how payments work. Investopedia. https://www.investopedia.com/terms/d/dividend.asp </p>
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
    height: 300px;
    width: 750px;
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

   @media only screen and (max-width: 608px) {
    .row {
      height: 720px;
    }
  }

  

  @media only screen and (max-width: 598px) {
    .row {
      height: 710px;
    }
  }

  @media only screen and (max-width: 375px) {
    .row {
      height: 680px;
    }
  }

  @media only screen and (max-width: 350px) {
    .row {
      height: 650px;
    }
  }


`

export default article_5