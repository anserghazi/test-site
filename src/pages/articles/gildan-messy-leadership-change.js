import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_3 = () => {
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Gildan’s Messy Leadership Change Hints at a Looming Legal Battle</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
            <p class="date_time_text">Gildan Activewear, Inc.</p>
            <p class="date_time_text">February 7, 2024</p>
            <br class="header_br" />
            <div>
                <StaticImage src="../../assets/images/united_front.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />
            </div>
            <p class="figure_text">Chairman Donald Berg and CEO Glenn Chamandy present a united front in Gildan’s 2022 Annual Report</p>
            <p class="source_text">Source: Gildan 2022 Annual Report</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >TORONTO, Feb 7, 2024 --- On February 23, 2023, Gildan released its 2022 Annual Report, declaring yet another stellar year in net profit for the Canadian textile manufacturing company.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >“Our manufacturing capacity initiatives and vertical integration give us the confidence that our capital investments are placing 	us in a position of strength to capitalize on future growth strategies” read the bolded joint message from Gildan’s Chairman Donald Berg and CEO Glenn Chamandy in the 2022 Annual Report. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Gildan reported a 33% increase in net sales from 2021, totalling US$3.2 billion, and net earnings of US$542 million, continuing a trend of increasing profits and market capitalization. From the financials alone, everything seems to be running seamlessly, but Berg’s strained smile tells another story entirely. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Fast forward nine months to December 11, 2023, and we see the house of cards collapse. Gildan announced the departure of their CEO and co-founder Glenn Chamandy, who Gildan leadership claimed, “would have jeopardized the future of Gildan and destroyed shareholder value.” This move blindsided Gildan’s investors, and the swift succession of ex-Fruit of the Loom executive Vince Tyra sent investors scrambling to halt the proceedings any way they can. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >On December 17, 2023, Gildan Director Luc Jobin claimed that Chamandy attempted to strongarm board members into complying with his expansion strategy, which entailed multi-billion-dollar acquisitions outside of the main core of Gildan’s business - textile manufacturing. On December 18, 2023, the next day, Chamandy released a statement denying these allegations and accusing the board of spinning tales to distract investors from their failure in conducting a transparent leadership transition. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Chamandy, who took over Gildan from his father in 1982 alongside his brother, Greg Chamandy, had a vision for the future of Gildan, a small children’s apparel manufacturing company at the time. This vision was centered around vertical integration, which according to Kevin Tarver of Investopedia, is an expansion strategy which aims to cut production costs and capture new profits by controlling several key aspects of a company’s supply chain. Gildan prioritized backwards integration, which means that they integrated themselves with their suppliers and manufacturers upstream in the textile supply chain or invested in their own production facilities. Gildan leveraged this control to optimize and scale their production of good-quality, sustainably sourced, ethically produced activewear, sold at a very competitive price.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Gildan had its IPO in 1998, and under Chamandy’s leadership, investors at this period saw a return of over 8000 per cent since then, including regularly increasing dividend payments, and four 2-for-1 stock splits, which means investors were increasingly paid more money every quarter, and Gildan essentially halved its stock price four times to make its stock accessible to more investors. Chamandy’s implementation of vertical integration has become a case study not only for its performance on the balance sheets, but for its impact on the industry and environment. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >The textile and fashion industry hasn’t had the greatest track record when it comes to sustainability and human rights – this is a legacy that continues to be upheld today, with the exception of Gildan. Where inhumane working conditions and polluting the environment with reckless abandon is considered better for the bottom line, Gildan stands alone, quite literally, in their environmental, social, and governance efforts. In their last fiscal year, Gildan was the only textile manufacturing company in the North American Dow Jones Sustainability Index, and the only textile company to be included in Corporate Knight’s global list of the world’s most sustainable organizations, which means that they’ve integrated environmental stewardship and corporate governance into their core business strategy.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Under Chamandy’s leadership, Gildan has been recognized in countless awards for their ESG practices, often placing in the top 90th percentile of companies in these lists. Chamandy had a vision for Gildan in 1985 which involved aggressive expansion and strategic acquisitions, turned his ambitions into wild success, and solved a profits-vs-sustainability design problem which the rest of the industry still needs to catch up on. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent" >Given Chamandy’s near spotless track record and reputation, it’s intriguing to see his immediate dismissal over of a supposed risky expansion strategy. Whether his termination was in good faith is something to be determined, but one thing is clear, Chamandy’s vision for Gildan’s future is hanging on by a thread. </p>
            <br class="header_br" />
            <p class="references_text">SOURCES:</p>
            <p class="references_text">Annual and Quarterly Shareholder Reports. Gildan. https://gildancorp.com/en/investors/reports-and-filings/reports/ </p>
            <p class="references_text">ESG recognitions and Partnerships. Gildan. https://gildancorp.com/en/responsibility/recognitions-and-partnerships/ </p>
            <p class="references_text">Gildan. Gildan Activewear announces leadership changes - Vince Tyra appointed as president and CEO; Glenn Chamandy leaving. https://gildancorp.com/en/media/news/-leadership-changes-vinces-tyra-appointed-CEO/ </p>
            <p class="references_text">How we became a leading apparel company. Gildan. https://gildancorp.com/en/company/our-story/ </p>
            <p class="references_text">Milstead, D. (2024, January 27). At Gildan Activewear, a billion-dollar reason why shareholders want CEO back. The Globe and Mail. https://www.theglobeandmail.com/business/article-gildan-ceo-shareholders-stock/ </p>
            <p class="references_text">Today’s news: Trending Business Stories for December 18, 2023 | ... (n.d.). https://financialpost.com/news/live-news-top-business-stories-december-18-2023 </p>
            <p class="references_text">Yahoo!. Gildan welcomes Chris Shackelton to its board of directors, along with support from Coliseum Capital Management. Yahoo! Finance. https://finance.yahoo.com/news/gildan-welcomes-chris-shackelton-board-222600000.html </p>
            <p class="references_text">Yahoo!. Statement by Glenn J. Chamandy. Yahoo! Finance. https://finance.yahoo.com/news/statement-glenn-j-chamandy-134400073.html </p>
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
    margin-bottom: 9px;
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
    margin-left: 10px;
    margin-right: 65px; //specifically for shorter titles
    align-self: flex-start;
    margin-bottom: 3px;
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
      height: 730px;
    }
    
    

  }
  
  @media only screen and (max-width: 963px) {
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
  }

 

  @media only screen and (max-width: 527px) {
    .row {
      height: 710px;
    }
  }

   @media only screen and (max-width: 428px) {
    .row {
      height: 680px;
    }
  }

  @media only screen and (max-width: 378px) {
    .row {
      height: 630px;
    }
  }

`

export default article_3