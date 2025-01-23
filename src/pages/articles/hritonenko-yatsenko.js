import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link, useScrollRestoration } from "gatsby"

const Article_8 = () => {
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
              <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>A Case Study on Natali Hritonenko and Yuri Yatsenko (Mathematical Modelling and Optimization)</h1>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="row" {...articleScrollRestoration}>
            <div class="flex-container">
              <br class="header_br"/>

              <p class="article_text">This is case study on the research done by Natali Hritonenko and Yuri Yatsenko. Hritonenko’s research delves into mathematical modelling and optimization, theory and application of discrete and continuous dynamic systems, biomathematics, and economics. Yatsenko’s research delves into modelling and optimizing economic, industrial, and environmental systems.               </p>
              
              <p class="article_text">Together, they published several articles together that share a common theme of epidemic modelling and control through different lenses, with an emphasis on COVID-19.              </p>
              
              <p class="article_text">In general, their research focuses on evaluating strategies for eliminating and stopping the spread of infectious diseases, by identifying which segments of the population are most at risk, as well as how the disease moves from person to person. The researchers utilize age structured models to account for how COVID affects the different age segments of populations, they consider how geography affects the spread of disease, and they vary the input parameters to optimize the functions synthesized from their research. The main question that they try to answer is: what is the optimal way we can use our vaccines to eliminate the spread of disease, such as COVID-19?               </p>
              
              <p class="article_text" id="no_indent">This question is answered in three aspects, who, when, and where.</p>
              
              <p class="article_text" >-	Who: high risk groups, like the elderly, those with pre-existing health conditions, and healthcare workers</p>
              
              <p class="article_text">-	When: Vaccinate before the peak season, when cases are expected to rise, or during outbreaks, when cases are high</p>
              
              <p class="article_text">-	Where: geographic hotspots where diseases have been known to spread, or in corridors between natural geographic barriers, covering all traffic between two given regions</p>
              
              <p class="article_text">Lastly, the time interval coincides with the age interval. To elaborate, let us denote i as the index of an age class in a population, where m is the maximum possible index representing the oldest age class. Under this model, if a squirrel survives the current time interval t and enters the next time interval t+1, they leave their current age class i, and enter the subsequent age class i+1, up until they reach the oldest age class m, where they will remain throughout further time intervals until their death. </p>
              
              <p class="article_text">Using these rules, it follows that the number of individuals belonging to age class i+1 at time interval t+1 is equal to the number of individuals belonging to the previous age class i at the previous time interval t multiplied by their survival rate, denoted as s<sub>i</sub>. In time interval t+1, the number of individuals in the first age class is equal to the sum of the products of each age class’s population at time interval t and their respective fertility rates, denoted b<sub>i</sub>.</p>
            
              <p class="article_text">Using these relationships between the age classes, we can construct equations X<sub>i</sub>(t+1) that refer to the number of individuals in an age class i at the subsequent time interval t+1. If we arrange these equations into rows by order of increasing age class, and place the survival rates of each age class under their respective birth rate from the first age group equation such that each term in the equations belongs to a column representing an age class, we see an (m x m) matrix form, where each row corresponds to an age class’s population, and each column corresponds to what that age class contributes to the population of every other age class. </p>
              
              <p class="article_text">For every age class greater than 1, their population only depends on the survival rate of the previous age class, so the remaining entries in this matrix are zeroes. As we are studying Uinta Ground Squirrels with 3 age classes, we know that m is equal to 3, and the following matrix model is formed, where L refers to the Leslie matrix. </p>
              
              <br />
              <p class="article_subheader_text" id="no_indent">Description of the Model</p>

              <p class="article_text">These papers utilize age-structured SIR (susceptible, infected, recovered) models with difference delays, and briefly discuss the simulation of spatial models to emulate the spread of disease in a population. Focusing on the age-structured SIR models, there are several key assumptions made which affect the validity of the results: the infectiousness period, which is how long an individual remains infectious and how infectious they are from the moment they contract the illness to recovery or death. This infectiousness period information is taken from clinical research data, is still an assumption, and a major one, in which these models depend on to deliver any valid insights, and that contact rates are constant across all time periods. Furthermore, they don’t consider birth or natural death, only death by removal from the infectious stage, and all recovered individuals are assumed to be immune moving forward. They also assume a constant death rate, when in reality, this parameter varies.              </p>
              <p class="article_text">For every age class greater than 1, their population only depends on the survival rate of the previous age class, so the remaining entries in this matrix are zeroes. As we are studying Uinta Ground Squirrels with 3 age classes, we know that m is equal to 3, and the following matrix model is formed, where L refers to the Leslie matrix. </p>
              <p class="article_text">The researchers utilize Volterra-integral equations to represent the variation in three segments of the population throughout consecutive time periods, namely, susceptible, infected, and recovered individuals. Volterra-integral equations are functions in which the current state depends on an integral over previous states, and they are used over the typical ordinary differential equations used in SIR models, offering the benefit of modelling distributed delays, or effects that are spread out over multiple time periods. One major assumption under this model is that the integral equations representing each cohort (SIR) have a finite delay, that is, their effect on future states is finite. However, they note that all epidemic diseases are inherently finite processes, as infected individuals either recover or die, depending on the disease. Hritonenko and Yatsenko note that there is a gradual departure from traditional SIR models to model the spread of COVID-19 due to evidence of waning immunity with vaccinations, positing that SIS models (susceptible-infected-susceptible) may be more accurate in modelling this disease’s spread.               </p>
              
              <br />
              <br />
              <p class="article_subheader_text" id="no_indent">Outline of the Mathematical Model</p>
              <br />

              <div class="expression">
                <span>
                        &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  &nbsp;&nbsp;

                    </span>
                    <span><i>I </i>(<i>t </i> )&nbsp;&nbsp; = &nbsp;</span>
                    <div class="bracket">∫</div>
                    <table class="matrix">
                        <tr>
                            <td><i>t</i><p class="integral_bounds">hello</p></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td ><i>t</i> -<i>T </i></td>
                        </tr>
                    </table>
                    <span class="after_integral">&nbsp; b(u, t - u)&nbsp;&nbsp; ⋅ &nbsp;&nbsp;I(u)&nbsp;&nbsp; ⋅ </span>
                    <span>
                    &nbsp;
                    &nbsp;
                        <div class="frac">
                            <span> S(u) </span>
                            <span class="symbol">/</span>
                            <span class="bottom">N</span>
                        </div>
                    &nbsp;
                    &nbsp;
                    </span>
                    <span>
                    ⋅&nbsp;&nbsp; f(t - u) du,

                    </span>
                    <span>
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&nbsp;&nbsp;&nbsp;

                    </span>
                    <span>
                        (1)
                    </span>
                
              </div>
              <br class="header_br" />
              <div class="expression">
                <span>
                    &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;   &nbsp;&nbsp;

                    </span>
                    <span><i>S </i>(<i>t </i> )&nbsp;&nbsp; =</span>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;- </span>
                    

                    <div class="bracket">∫</div>
                    <table class="matrix">
                        <tr>
                            <td><i>t</i><p class="integral_bounds"></p></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        </tr>
                        <tr>
                        <td > -<i>T </i></td>
                        </tr>
                    </table>
                    <span class="after_integral">&nbsp; b(u,&nbsp; t &nbsp;- &nbsp;u)&nbsp; ⋅ &nbsp;I(u)&nbsp; ⋅ </span>

                    <span>
                    &nbsp;
                    &nbsp;
                        <div class="frac">
                            <span> S(u) </span>
                            <span class="symbol">/</span>
                            <span class="bottom">N</span>
                        </div>
                    &nbsp;
                    </span>
                    <span>
                     du,

                    </span>
                    <span>
                        &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  &emsp; &emsp; &emsp;  &emsp; &nbsp;&nbsp;&nbsp;

                    </span>
                    <span>
                        (2)
                    </span>
                
              </div>
              <br class="header_br" />
              <br class="header_br" />
              <br class="header_br" />
              <div class="expression">
                <span>
                    &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;    &nbsp;&nbsp;

                    </span>
                    <span><i>R </i>(<i>t </i> )&nbsp;&nbsp; =  &nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;- &nbsp;</span>
                    <span><i>I </i>(<i>t </i> )&nbsp;&nbsp; - &nbsp;</span>
                    <span><i>S </i>(<i>t </i> ),&emsp; &emsp; &nbsp;&nbsp;&nbsp;   </span>
                    <span>
                        0 ≤ <i>t</i> ≤ ∞,
                    </span>
                    <span>
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp;&nbsp;

                    </span>
                    <span>
                        (3)
                    </span>
                
              </div>


              <br class="header_br" />
              <br class="header_br"/>
              <br class="header_br"/>
              <p class="figure_text">Figure 1: SIR model for COVID-19 transmission using Volterra-integral equations</p>
              <br class="header_br" />
              <br />
              <p class="article_text">The researchers employ the traditional SIR model to model the spread of COVID-19, with a few tweaks. Instead of using ordinary differential equations to describe the number of individuals in each cohort at a given time period, they use Volterra-integral equations, which account for difference delays from states in previous time periods. Two important difference delays are modelled, the infectiousness that varies as time moves forward, modelled with b(u, t-u), and the recovery of infected, after they become infected, modelled with f(t-u). This can be compared with the standard ODE SIR models if we consider the delay of each integral equation to be infinite, as the form of these VIEs more closely resemble ODEs.               </p>
              
              <br />
              <p class="article_subheader_text" id="no_indent">Interpretation of Findings</p>

              <p class="article_text">The researchers found that as the susceptibility and symptoms of a COVID virus infection vary among population age segments, an effective approach to controlling the disease spread is by vaccinating those at risk population segments, as they’d be the most likely to contract and spread the disease. Through simulations and considering different scenarios, they found that vaccinating populations early on through outbreaks was most effective in controlling the spread of the disease. Considering that vaccines have a waning immunity, by strategically deploying them in anticipation of spikes in COVID cases, we can prevent widespread infections. Finally, we can control and prevent outbreaks of COVID cases by targeting specific geographic locations which are either hotbeds for disease transmission, or key corridors between different geographic areas. These models assume a fixed infectiousness period in individuals, and they assume that a state in a given time period has a finite delay, or effects states in future time periods up to a finite number of time periods. These models can potentially be improved by incorporating more accurate data as it comes out, considering the study of the spread of COVID is new, and the disease has new mutations, our understanding of the virus and its virality continues to improve each day. In particular, the infectiousness period, infection rates, contact rates, and recovery rates are all assumptions based off other clinical data, and these variables drastically affect the state at each time period, so rates based off more accurate data should improve the quality of insights derived from these papers.               </p>
             
            
              <br/>
              <br/>
              <p class="references_text">References</p>
              <p class="references_text">Boucekkine, R., Hritonenko, N., & Yatsenko, Y. (2011). Age-structured models and optimal control in mathematical epidemiology: a survey. In Optimal Control of Age-Structured Populations in Economy, Demography, and the Environment (pp. 192–224). Routledge. https://doi.org/10.4324/9780203844557-15              </p>
              <p class="references_text">Hritonenko, N., Yatsenko, O., & Yatsenko, Y. (2022). Model with transmission delays for COVID‐19 control: Theory and empirical assessment. Journal of Public Economic Theory, 24(5), 1218–1244. https://doi.org/10.1111/jpet.12554              </p>
              <p class="references_text">Hritonenko, N., & Yatsenko, Y. (2024). Analysis of optimal lockdown in integral economic–epidemic model. Economic Theory, 77(1–2), 235–259. https://doi.org/10.1007/s00199-022-01469-7              </p>
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

// .figure_table > th {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .figure_table {
//   border: 1px solid white;
//   border-collapse: collapse;
// }
// .figure_table > tr {
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: flex-start;
//   justify-content: space-evenly;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   border: 1px solid white;
//   border-collapse: collapse;
// }

// .figure_table > tr > td {
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-evenly;
// }

// .figure_table > tr > th {
//   display: flex;
//   align-items: flex-start;
//   border-collapse: collapse;
// }

// th {
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: flex-start;
//   border: 1px solid white;
//   border-collapse: collapse;
// }
  

.inline-box {
  display: inline-box;
  align-items: center;
}

.formula_text {
    // display: flex;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
  }

.bracket {
   display: flexbox;
   font-size: 50px;
   font-weight: 100;
   transform: scaleY(170%);
   margin: 0px -13px 0px 10px;
}

.leslie_bracket {
   display: flexbox;
   font-size: 60px;
   font-weight: 100;
   transform: scaleY(420%);
   margin-top: -32px;
   margin: -32px 5px 0px 5px;
}

.bracket_close {
   display: flexbox;
   font-size: 50px;
   font-weight: 100;
   transform: scaleY(270%);
   margin-top: -16px;
   margin: -15px 5px 0px 5px;
}

.bracket_inline {
  display: flexbox;
   font-size: 50px;
   font-weight: 100;
   transform: scaleY(270%);
   margin: -15px 5px 0px 5px;
}

.matrix {
    display: flexbox;
    border: none;
}
.matrix td {
    border: none;
    text-align: center;
    padding: 5px 10px;
}
.expression {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 100px;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    margin-left: -70px;
}

.expression_LCG {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 100px;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    margin-left: 0px;
}

.table_expression {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 100px;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    border-collapse: collapse;
}

.expression_2 {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 100px;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    margin-left: 8px;
    margin-bottom: 30px;
}

.expression_inline {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 100px;
    font-size: 19px;
    flex-grow: 1;
    font-family: "Noto Serif Georgian", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    font-color: white;
    margin-left: -70px;
    gap: 55px;
}

.expression_span {
  margin-left: 5px;
  margin-right: 5px;
}
.lambda {
    font-weight: bold;
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
    overflow-x: hidden;
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

    .expression {
      margin: 0px -15px 0px -75px;
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      width: 200%;
      justify-content: center;
    
    }

    .flex-container {
      margin-left: 5px;
    }

    .row {
      margin-right: 5px;
    }
    

  }

   @media only screen and (max-width: 750px) {
    .row {
      height: 720px;
    }
  }

    @media only screen and (max-width: 530px) {
    .row {
      height: 698px;
    }
  }

  @media only screen and (max-width: 465px) {
    .row {
      height: 670px;
    }
  }

  @media only screen and (max-width: 410px) {
    .row {
      height: 650px;
    }
  }

  @media only screen and (max-width: 342px) {
    .row {
      height: 620px;
    }
  }

  @media only screen and (max-width: 615px) {
    
    .expression {
      margin: -40px -15px 0px -125px;
      transform: scale(0.6, 0.6);
      transition: transform 0.2s;
      width: 300%;
      justify-content: center;
    
    }
    

  }


 @media only screen and (max-width: 500px) {
    .expression {
      margin: -40px -15px 0px -90px;
      transform: scale(0.45, 0.45);
      transition: transform 0.2s;
      width: 400%;
      justify-content: center;
    
    }
}

`

export default Article_8