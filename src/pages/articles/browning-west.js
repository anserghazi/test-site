import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_7 = () => {
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
      pageWrapper.style.backgroundPosition = "50% 0%" //change to 26 if you want
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>“The Board Has Forced our Hand”: Browning West Calls a Special Shareholder Meeting to “Reconstitute” Gildan’s Board of Directors</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
            <p class="date_time_text">Gildan Activewear, Inc.</p>
            <p class="date_time_text">March 18, 2024</p>
            <br class="header_br" />
            <div>
                <StaticImage src="../../assets/images/vince-tyra.png"  placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />          
            </div>


            <p class="figure_text">Gildan figurehead Vince Tyra hopes to manifest some long-term growth strategies for the coming fiscal year.</p>
            <p class="source_text">Source: The Globe and Mail </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >TORONTO, March 18, 2024 --- On December 11, 2023, Gildan Activewear announced the departure of their CEO and co-founder Glenn Chamandy. Gildan Activewear’s share price tumbled 10 per cent from US$36.52 at market close on December 8, 2023, to US$32.58 on December 11, 2023, the day of this announcement. According to Globe Newswire, Gildan’s Chairman Donald Berg welcomed former Fruit of the Loom CEO Vince Tyra as Gildan’s new CEO and president and stated that “Vince is the right person to lead the Company into the next stage of its evolution and growth.”             </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >On December 14, 2023, activist fund Browning West published an open letter to Gildan’s Board and demanded that the Company reinstate Chamandy as CEO. According to the Wall Street Journal, the investment fund believes that Vince Tyra lacks the skills needed for the role, and asked Gildan to remove Donald Berg as Chairman and to initiate a search for his replacement. On the same day, Turtle Creek Asset Management released a letter condemning the “hasty”, “inexplicable”, and “value-destructive” termination of Chamandy, and urged Gildan to reverse his termination and reappoint him as CEO. The next day, on December 15, 2023, Pzena Investment Management, with a 10 million share stake in the Company, joins the call to reinstate Chamandy, according to Globe Newswire.             </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >In response to the growing backlash, Gildan announced a support agreement with Coliseum Capital Management, on December 17, 2023. According to Gildan, Coliseum will support Gildan’s full slate of Board nominees for the next two years, and Coliseum aims to become Gildan’s largest shareholder. The joint announcement ended with the appointment of Coliseum co-founder Chris Shackleton to Gildan’s Board of Directors, increasing the board member count from 11 to 12. Shackleton will oversee “corporate governance and social responsibility”, according to Gildan’s leadership page.             </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >The next day, on December 18, 2023, Anson Funds, another major investor in Gildan, released an open letter in which they criticize Gildan’s board for “striking a backroom deal with an individual shareholder in exchange for their support” rather than addressing shareholders concerns with the mishandling of the CEO succession, according to PR Newswire.            </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Browning West, an activist fund with a 4 per cent stake in Gildan, announced on December 20, 2023, that it was prepared to “reconstitute the board” by calling for a special shareholder’s meeting if Gildan continued to “ignore the feedback of more than 33 per cent of [its] shareholders”, according to Business Wire.              </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >They followed through on their threat. According to Reuters, on December 29, 2023, Browning West released a public letter addressing Gildan’s shareholders, seeking to replace five of Gildan’s board members and appoint five of their own “highly qualified director candidates”. This newly constituted board would then fire Vince Tyra, reappoint Glenn Chamandy, and appoint a new independent, non-executive chair to the board. In this fiery statement, Browning West claimed that the “directors’ actions have destroyed value for Gildan shareholders and introduced significant business risk” which they believed “must be immediately addressed through a reconstitution of the Board to prevent further damage Gildan’s business and its stakeholders.”             </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >On January 9, 2024, Browning West released a public statement beginning with the assertation that they are a “significant”, “long-term” shareholder of Gildan Activewear, owning 5% of outstanding shares in the textile company. According to Business Wire, the activist fund continued by announcing 3 additional board member nominees, increasing their slate of nominees from 5 to 8, seeking to replace 75% of the 12 sitting board members. In this letter, Browning West claimed that such drastic measures are necessary as its evident that Gildan’s board is unwilling to listen to the feedback of 35% of its shareholders, instead attempting to entrench themselves in their positions and take control of the company. Following this accusation, Browning West pointed out inconsistencies in Gildan’s latest public messages which disparage Chamandy, by highlighting the stellar financial performance of Gildan leading up to Chamandy’s dismissal, as well as Donald Berg’s prior glowing statements about the state of the company under Chamandy. Berg’s statements were pulled from public disclosure documents in which Berg is legally obligated to provide accurate statements.             </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Browning West asked if “the Board and Mr. Berg deliberately mislead shareholders over the prior three years or are they deliberately misleading shareholders now”. Browning West answered their own question, stating that they “can only presume that the Board is denigrating the Company’s historical results, future prospects, and management team in order to justify its own mishandled succession process”. Browning West concluded their statement by announcing their slate of eight candidates, stating that they “no longer feel that a minority slate is sufficient to prevent the destruction of further shareholder value” and “the Board has forced [their] hand”.             </p>
            <br class="header_br" />
            
            
            <p class="references_text">SOURCES:</p>
            <p class="references_text">Annual and Quarterly Shareholder Reports. Gildan. https://gildancorp.com/en/investors/reports-and-filings/reports/  </p>
            <p class="references_text">Anson funds calls on Gildan Activewear’s board of directors to immediately reinstate Glenn Chamandy as CEO. Yahoo! Finance. https://finance.yahoo.com/news/anson-funds-calls-gildan-activewears-232700347.html </p>
            <p class="references_text">Browning west issues letter to Gildan Activewear shareholders announcing intent to requisition special meeting to Reconstitute Board of Directors. Yahoo! Finance. https://finance.yahoo.com/news/browning-west-issues-letter-gildan-200000169.html   </p>
            <p class="references_text">Browning west requisitions special meeting of Gildan Activewear shareholders to Reconstitute a majority of the Board of Directors. Yahoo! Finance. https://finance.yahoo.com/news/browning-west-requisitions-special-meeting-161500318.html  </p>
            <p class="references_text">Board of directors. Gildan. (n.d.). https://gildancorp.com/en/company/leadership/board-directors/   </p>
            <p class="references_text">Doolittle, R., & Praet, N. V. (2024, March 15). Gildan says allegations by key shareholder browning west violated U.S. securities law. The Globe and Mail. https://www.theglobeandmail.com/business/article-gildan-says-allegations-by-key-shareholder-browning-west-violated-us/   </p>
            <p class="references_text">Pzena investment management calls on the Board of Gildan Activewear Inc. to re-appoint Glenn Chamandy as CEO. Yahoo! Finance. https://finance.yahoo.com/news/pzena-investment-management-calls-board-212300139.html  </p>
            <p class="references_text">Turtle Creek Asset Management calls on the board of Gildan Activewear to immediately re-appoint Glenn J. Chamandy as its CEO. Yahoo! Finance. https://finance.yahoo.com/news/turtle-creek-asset-management-calls-220000833.html   </p>
            <p class="references_text">Update 1-browning west pursues five seats on Gildan’s board as dispute over CEO ouster heats up. Yahoo! Finance. https://finance.yahoo.com/news/1-browning-west-pursues-five-233337111.html   </p>
            <p class="references_text">WSJ News Exclusive | Fund pushes Gildan to reinstate ousted CEO. (n.d.). https://www.wsj.com/business/fund-pushes-gildan-to-reinstate-ousted-ceo-c4f7a694   </p>
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
    height: 500px;
    width: 750px;
    quality: 100;
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
 
  @media only screen and (max-width: 885px) {
  .row {
        height: 720px;
      }
  }

  
  @media only screen and (max-width: 646px) {
  .row {
        height: 700px;
      }
  }

 

  @media only screen and (max-width: 572px) {
  .row {
        height: 680px;
      }
  }

  @media only screen and (max-width: 442px) {
  .row {
        height: 655px;
      }
  }

  @media only screen and (max-width: 402px) {
  .row {
        height: 625px;
      }
  }

  @media only screen and (max-width: 395px) {
  .row {
        height: 595px;
      }
  }

  @media only screen and (max-width: 373px) {
  .row {
        height: 565px;
      }
  }

`

export default article_7