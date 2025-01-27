import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_1 = () => {
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Identity theft is not a joke - How millions of ants suffer every year</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
          <br class="header_br" />
            <p class="article_text" id="no_indent">Ants are social creatures – they use chemical and audible signals to communicate with each other. Whether they’ve stumbled upon a nice piece of bread on the ground, discovered termites invading their nest, or if they’ve just fallen and can’t get up, they secrete chemicals in trails to alert other ants in their colony. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">Depending on the urgency of the situation, other ants can also secrete these short-lasting chemicals to amplify their signal, which can result in a flood of ants in your picnic. Ants also stridulate to communicate. Stridulating is when ants rub their bodies together to produce sound in the same way that crickets and cicadas do.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">This sophisticated arsenal of communication benefits ants greatly, but it's also their Achilles heel.</p>
            <br class="header_br" />
            <p class="article_header_text">An environmental game of ‘King of the hill’</p> 
            <br class="header_br" />
            <p class="article_text" id="no_indent">In May 2010, Professor Andrea Di Giulio and his team of researchers from the University Roma Tre and the University of Turin travelled to the High Atlas Mountains in El Borma, Algeria, where they discovered a fascinating parasitic relationship between the ground beetle and the harvester ant.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">In their article “The Pied Piper: A Parasitic Beetle’s Melodies Modulate Ant Behaviours”, they explain that ground beetles secrete chemicals that mimic the harvester ant’s own pheromones, which allows the beetles to live among the ants without arousing any suspicion. Researchers noticed that these ants emitted different stridulations depending on which caste they belonged to. Ant queens, soldiers, and workers produce their own distinct sounds that the colony can distinguish. Not only can ground beetles hijack this method of communication, but they're capable of impersonating all of the observed ant stridulations, and they parrot each sound to their benefit.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">Using their counterfeit chemicals and clicks, they quickly climb the social ladder and reward themselves with the vast resources and protection of the nest. Beetles can roam freely in any tunnel, chamber, or crevice - they essentially have a full security clearance to do whatever they want. These imposters can directly interact with legitimate queens without raising any alarm. Alarmingly enough, beetles can devour ants in the safety of their own nests and nobody would lift a mandible in resistance - not even the ants being actively consumed.</p>
            <br class="header_br" />

            <p class="article_header_text">The research</p>
            <p class="article_text" id="no_indent">Researchers collected ants and beetles living together in nests in a shrubland on the High Atlas Mountains of El Borma, Algeria, and transported the specimens to artificial nests where they waited for ten days for the bugs to get used to their new environment before conducting their research. The nests consisted of transparent glass boxes with layers of moistened plaster, and paths to foraging areas. The ants were well fed on a diet of diluted sugar or honey, fruit flies, and caterpillars, three times a week. Andrea and his colleagues then identified queens, soldiers, and workers among the ants and recorded the sounds they made in their interactions. Scientists analyzed 482 sequences of beetle sounds and 276 sequences of ant sounds. Of those 276 sequences, 66 belonged to queens, 107 belonged to soldiers, and 103 belonged to workers.</p>
            <br class="header_br" />
            <div>
              <StaticImage src="../../assets/images/ants.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth"  />
            </div>
            <p class="figure_text" id="no_indent">Fig.1 In each recording, researchers analyzed the frequency, length, and volume of each audio sample, and performed statistical analyses to determine their differences. </p>
            <br class="header_br" />
            <p class="source_text" id="no_indent">Source: Di Giulio, A., Maurizi, E., Barbero, F., Sala, M., Fattorini, S., Balletto, E., & Bonelli, S. (2015). The Pied Piper: A parasitic beetle’s melodies modulate ant behaviours. PLOS ONE, 10(7). https://doi.org/10.1371/journal.pone.0130541</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">Queens emitted single pulses, while soldiers and workers emitted varying lengths of pulses. Researchers found that two distinct sounds produced by the beetle had “the same pulse length as those emitted by soldiers and workers”, and the third sound emitted by the beetle “had the same intensity and pulse length as that of the queens”. Analysts then performed playback experiments in which they played the sounds back to ants and recorded their responses in thirty second intervals.</p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">They found that the ants always exhibited “non-aggressive responses involving attraction” and “interaction with other ant castes.” The ants responded by digging at the microphones, walking over the microphones, or simply standing guard. Although pulses from queens resulted in the highest instances of guarding behaviour, researchers noted that pulses from beetles elicited a “guarding behaviour [in ants] that is statistically no different than when presented with emissions of the queen”. Andrea and his team recall the high similarity between queen and beetle stridulations and suggest that a beetle produces the single pulse stridulation to be “treated like a queen by its host ants.”  Testing chambers were similarly sanitized between experiments. Researchers also played static and silent audio through the speakers, in which the ants didn’t respond to, which further indicates that those sounds elicit these protective responses in ants. </p>
            <br class="header_br" />
            <p class="article_text" id="no_indent">This study further supports the hypothesis of a complex acoustic communication network that exists in ant colonies. Andrea and his colleagues note that their research is the first documented case of interactions between ants and beetles using sound. The ground beetle's mimicry is more sophisticated than previously studied parasites, and researchers suggest that acoustic mimicry may have evolved several times among different species, and is an underrated form of colony infiltration.</p>
            <br/>
            <br class="header_br" />
            <p class="references_text">References</p>
            <p class="references_text">Di Giulio, A., Maurizi, E., Barbero, F., Sala, M., Fattorini, S., Balletto, E., & Bonelli, S. (2015). The Pied Piper: A parasitic beetle’s melodies modulate ant behaviours. PLOS ONE, 10(7). https://doi.org/10.1371/journal.pone.0130541</p> 
            <p class="references_text">Parker, J., & Grimaldi, D. A. (2014). Specialized myrmecophily at the ecological dawn of modern ants. Current Biology, 24(20), 2428–2434. https://doi.org/10.1016/j.cub.2014.08.068</p>
            <p class="references_text">Wilson, E. O. (1962). Chemical communication among workers of the fire Ant Solenopsis Saevissima (fr. smith) 1. the organization of mass-foraging. Animal Behaviour, 10(1-2), 134–147. https://doi.org/10.1016/0003-3472(62)90141-0</p>
            
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
    margin-left: 5px;
    margin-right: 35px; //specifically for shorter titles
    align-self: flex-start;
    margin-bottom: 3px;
  }


   .header {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: flex-start;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    align-items: center;
    // justify-content: center;
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
    }
    

  } 

  @media only screen and (max-width: 922px) {
    .row {
      height: 700px;
    }
  }

  
  
  @media only screen and (max-width: 753px) {
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

 @media only screen and (max-width: 792px) {
    .row {
      height: 700px;
    }
  }

  @media only screen and (max-width: 721px) {
    .row {
      height: 700px;
    }
  }

  
  //   @media only screen and (max-width: 517px) {
  //   .row {
  //     height: 670px;
  //   }
  // }

  // @media only screen and (max-width: 507px) {
  //   .row {
  //     height: 640px;
  //   }
  // }

  @media only screen and (max-width: 365px) {
    .row {
      height: 670px;
    }
  }

`

export default article_1