import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link, useScrollRestoration } from "gatsby"

const Article_9 = () => {
  const articleScrollRestoration = useScrollRestoration("row")

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
      <div class="center_component">
        <div class="section">
          <div class="content">
            <div class="header">
              <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Cling Wrap Redesigned Using Whole Systems Analysis and Life Cycle Thinking</h1>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="row" {...articleScrollRestoration}>
            <div class="flex-container">
              <br class="header_br"/>

              <p class="article_subheader_text" id="no_indent">Cling Wrap Material Analysis</p>

              <p class="article_text">Cling wrap is a thin, stretchable plastic film made from low-density polyethylene or polyvinyl chloride, that is designed to stick, stretch, and wrap around items and to keep them securely fixed in place during shipping or storage. When fully stretched, cling wrap is durable, which means that it is resistant to tears, punctures, and cuts, and it is non-permeable, so items sealed under layers of cling wrap are protected from contact with water, dust, dirt, and other debris. Cling wrap takes up very little space since it is stored in rolls, and it enables more efficient packing processes for businesses compared to other packing materials. Other shipping materials, such as packing peanuts, corrugated cardboard, and cardboard pulp inserts, do not have the same tensile strength, resistance to elements, or versatility in application as cling wrap. Most importantly, cling wrap is widely available and very cheap, making it one of the most cost-effective and versatile packing solutions available today. It is for these reasons that cling wrap is considered an essential tool in the shipping industry and sees ubiquitous use worldwide in all kinds of businesses and households.               </p>

              <br />

              <p class="article_subheader_text" id="no_indent">Cling Wrap Design and Life Cycle</p>
              
              <p class="article_text">Most shipping and transportation worldwide relies on shipping pallets and shipping containers. Goods are arranged or stacked onto wooden pallets, and these wooden pallets travel through key areas in their supply chain inside truck trailers or shipping containers. Cling wrap solves several problems in this model. Its stickiness, elasticity, tensile strength, water-resistance, and transparency allow it to wrap items of any dimension efficiently and cheaply, making it the leading packing material for pallet shipments. These inherent properties come from its primary material, either polyvinyl chloride, or low-density polyethylene. </p>
              
              <p class="article_text">The life cycle of cling wrap begins at the raw material extraction stage, where petroleum or natural gas is extracted from the Earth. These fuels are mixed with chlorine, and the mixture is turned into plastic in a process called "polymerization”, in which plasticizers are mixed in, and a combination of high heat and pressure is applied to form polyvinyl chloride. The heated PVC slurry is then extruded through a thin opening and stretched out into a thin film and wound into large rolls, forming the cling wrap that we’re all familiar with. In the case of low-density polyethylene, bubbles are blown through the molten slurry, which are then cooled, flattened, and rolled into cling wrap.              </p>

              <p class="article_text">From here, the cling film is shipped out to businesses for their use in shipping and transportation, to seal and protect their items in the short term. It enables businesses to efficiently protect their items, allowing for larger shipment loads at a time, and faster shipping times. However, cling wrap is a single use item. Once the cling wrap has fulfilled its end-use, it is torn apart, bundled up, and disposed of in wastebins worldwide. Due to the material properties of cling wrap, and the inadequate recycling infrastructure available in most communities, cling wrap is considered not recyclable.                </p>
              
              <p class="article_subheader_text" id="no_indent">Evaluating Cling Wrap’s Life Cycle from a Sustainable Perspective</p>

              <p class="article_text">The production, usage, and overall design of clingwrap is incompatible with the principles of Design for the Environment, and the “cradle to cradle” design methodology. Design for the Environment can include goals such as eliminating waste, reducing energy usage, and maximizing recovered materials throughout the product life cycle. The extraction of the constituent fuels in cling wrap, their refinement, transit, storage, and subsequent polymerization is energy intensive, disastrous for local ecosystems, and the environment as a whole, due to the increasingly vast amounts of greenhouse gases and pollutants generated from these processes.              </p>

              <p class="article_text">The ‘cradle to cradle’ design methodology is centered on the goal to eliminate inorganic waste and environmental degradation by involving two “closed loops”- the industrial loop, and the biological loop. All inorganic material gets cycled back into the industrial loop, and all organic material gets cycled back into the organic loop. The key idea is that we can design things to be recyclable, to the point where their constituent components can be extracted at the end of their lifecycle and reprocessed into something new, not with minimal environmental impact, but ideally with a net benefit to the environment. The design of cling wrap is antithetical to this premise.               </p>
              
              <p class="article_text">Cling wrap is designed to be single use only. The same material properties which make cling film an attractive solution for shipping are the same reasons it cannot be readily recycled with our current waste disposal infrastructure – its stickiness makes it cling to contaminants and debris very well, and its thin dimensions, elasticity, and light weight make it incompatible with current recycling infrastructure, which is why it is not accepted as a recyclable item in most communities. That is if the material itself is recyclable, as in most cases, the material composition of clingwrap makes it a very energy-intensive and expensive endeavor to break down and reuse, resulting in vast amounts of plastic being thrown away.               </p>

              <p class="article_text">As a result, the net effect of plastic wrap usage on the environment is negative. It greatly contributes to climate change and ocean acidification through the vast amounts of carbon dioxide emitted from the extraction of its constituent components. Furthermore, the disposed plastic is not biodegradable, meaning that it will persist on Earth for centuries. Given the large scale of cling wrap usage and disposal, it is evident that this directly contributes to the global plastic pollution, and the bioaccumulation of microplastics across all living organisms on Earth.               </p>
              

              <br />

              <p class="article_subheader_text" id="no_indent">Chitosan-based Biofilm – A Proposed Alternate Design and Life Cycle</p>
              
              <p class="article_text">Chitosan-based biofilm is comprised of chitosan and can be incorporated with other plant extracts such as vanillin and other spices to increase its elasticity, or water-repellent properties. The primary ingredient, chitosan, is produced by the N-deacetylation of chitin, or the removal of a nitrogen group from chitin’s molecular structure, resulting in a stronger polymer. (Vicente et al., 2020)              </p>

              <p class="article_text">Chitin is the primary resource for this material, and it is the second most abundant naturally occurring polymer on Earth, second only to cellulose. There are many naturally occurring sources of chitin; however, it is primarily found in nature in the form of crustaceans, mollusks, insects, and fungi, and an estimated 10 billion to 100 billion tons of chitin is produced annually on Earth. Consequently, 6 to 8 million tons of seafood waste is generated annually, making it a cheap and abundant resource. (Vicente et al., 2020) My proposed redesign involves partnering with local seafood processors to source the raw material for the chitosan-based biofilm. </p>
              
              <p class="article_text">This raw chitin is taken to a processing plant where it gets rinsed of organic matter, crushed into tiny pieces, and treated with a series of acid and base washes before sitting in an alkaline bath in varying combinations of temperature and time until the chitin dissolves into the alkaline solution. Novel methods are continually being tested to decrease the overall energy and time expenditure further for this stage in the process. Finally, this product is poured out onto a level surface and left to air dry or bake in an oven until it forms a chitosan film. (Liu et al., 2022)             </p>

              <p class="article_text">Chitosan film as a packing material offers several key advantages over traditional cling wrap. Its precursor material is abundant and available from a variety of different sources around the globe, compared to cling film’s rapidly depleting hydrocarbons. Chitosan is edible, non-toxic, and not just biodegradable, but compostable. This means that on top of degrading into carbon dioxide, water, and biomass, it is compatible with the composting process, doesn’t have a “net negative effect on the quality of compost”, and degrades at the same rate of other compostable material, contributing to the production of nutrient rich soil. (Rudnik, 2013) This adheres to a principle of the ‘cradle to cradle’ design methodology, which espouses reframing the impact of human activity from “minimizing damage” to “benefiting the planet”. </p>
              
              <p class="article_text">Production materials can exist in a closed loop, such as the acids and bases used to treat chitin before its dissolved. The spent water cleaning the organic matter off shells is better for the environment than the effluent discharged from hydrocarbon extraction. Due to the inherent limitations of biofilm compared to traditional cling wrap, such as a decreased tensile strength and increased vapour permeability, the use cases for this biofilm are limited, but they do exist. I propose partnering with local businesses in colder climates who share a goal of eliminating plastic waste, and only ship locally. We can reclaim any spent biofilm from businesses in our partnership who ship to each other, where it can be recycled or composted, depending on its condition. The higher price of chitosan is another limiting factor; however, this is partly due to the economies of scale that exist based on our reliance on oil and plastic, making plastic the cheapest option. As we transition away from hydrocarbons and these economies of scale disappear, hopefully more ecofriendly industries and economies of scale drive these prices down.                </p>
              
              <br />

              <p class="article_subheader_text" id="no_indent">Life Cycle Diagram</p>
              <br class="header_br" />

              <div>
                <StaticImage src="../../assets/images/chitosan-based-biofilm.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" ></StaticImage>
              </div>

              <br/>
              <br/>
              <p class="references_text">References</p>
              <p class="references_text">Liu, T., Li, J., Tang, Q., Qiu, P., Gou, D., & Zhao, J. (2022). Chitosan-Based Materials: An Overview of Potential Applications in Food Packaging. Foods, 11(10), 1490-. https://doi.org/10.3390/foods11101490</p>
              <p class="references_text">Rudnik, E. (2013). Compostable polymer properties and packaging applications. Plastic Films in Food Packaging, 217–248. https://doi.org/10.1016/b978-1-4557-3112-1.00013-2  </p>
              <p class="references_text">Vicente, F. A., Bradić, B., Novak, U., & Likozar, B. (2020). α‐Chitin dissolution, N‐deacetylation and valorization in deep eutectic solvents. Biopolymers, 111(5), e23351-n/a. https://doi.org/10.1002/bip.23351 </p>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

.frac {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    letter-spacing: 0.001em;
    text-align: center;
}
.frac > span {
    display: block;
    padding: 0.1em;
}
.frac span.bottom {
    border-top: thin solid white;
}
.frac span.symbol {
    display: none;
} 

.integral_bounds {
    display: inline;
    color: transparent;
    pointer-events: none;
    font-size: 5px;
}

.after_integral {
    margin-left: -25px;
}

@keyframes Animation { 
    0%{background-position: 50% 100%}
    100%{background-position: 50% 0%}
  }

  @keyframes ReverseAnimation { 
    0%{background-position: 50% 0%}
    100%{background-position: 50% 100%}
  }

// background: linear-gradient(to bottom,rgb(9, 8, 22) 0%, rgb(17, 20, 21) 18%, rgb(20, 24, 27) 22%, rgb(28, 29, 31) 60%, rgb(28, 29, 31)  75%, rgb(28, 29, 31) 100%);
//   background-position: 50% 100%;
//   background-size: 400% 400%;
//   display: flex;
//   width: 100%;
//   z-index: 0;
//   pointer-events: none;
//   height: 200vh;
//   max-height: 1350px;


.vertical_ellipses {
  line-height: 1.55;
  font-size: small;
  font-size: 22px;
  display: inline;
  opacity: 0.75;
}

.top_horizontal_ellipses {
  line-height: 1.75;
}

.diagonal_ellipses {
  line-height: 0.5
}

.figure_table {
  font-family: "Noto Serif Georgian", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-color: white;
  font-size: 19px;
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
}

.figure_table > thead > .figure_tr > th {
  font-weight: 500;
}

.figure_table, th, td {
  border: 1px solid #ddd;
  border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    vertical-align: top;
    border-collapse: collapse;
}

.figure_tr > td {
  padding: 30px 0px 30px 0px;
  border-collapse: collapse;
}



td {
    white-space: nowrap; /* Prevents cells from wrapping text unnecessarily */
    border-collapse: collapse;
}


  

.inline-box {
  display: inline-box;
  align-items: center;
}



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

  .sqrt {
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    // text-decoration: overline;
    border-top: solid;
    border-width: 0.5px;
    display: inline;
  }
  
  // sup {
  //   font-size: 12px;
  // }

  sub {
    font-size: 0.8em;
    vertical-align: sub;
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
    font-size: 12px;
    font-family: Roboto;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    margin-top: -10px;
    text-indent: 0px;
    align-self: flex-end;
  }
  .source_text {
    display: flex;
    font-size: 10px; 
    font-family: Roboto;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 100;
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
    align-self: flex-start;
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
    line-height: 1.4;
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

  


  @media only screen and (max-width: 469px) {
    .row {
      height: 698px;
    }
  }

  @media only screen and (max-width: 405px) {
    .row {
      height: 680px;
    }
  }

  @media only screen and (max-width: 345px) {
    .row {
      height: 670px;
    }
  }

  @media only screen and (max-width: 335px) {
    .row {
      height: 650px;
    }
  }

  
  @media only screen and (max-width: 330px) {
    .row {
      height: 630px;
    }
  }

`

export default Article_9