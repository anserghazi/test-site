import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link } from "gatsby"

const article_2 = () => {
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
      pageWrapper.style.backgroundPosition = "50% 0%" // change to 26?
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
            <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Eastern Honey Bees: Stool as a Tool to Defend the Hive</h1>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="row">
          <div class="flex-container">
          <br class="header_br" />
            <p class="article_text">A slender tree perches on the crest of a grassy slope, its horizontal branches overlook a valley of gently sloping, descending hills, in the highlands of northern Vietnam. A bulbous, green forest blankets the rolling hills and smooth, grassy peaks loom in the distance, each ridge taller and fainter than the one before it. At crown of the tree, a southern giant hornet scout hovers below a branch – it has just discovered a colony of eastern honey bees. Their drooping nest hangs near the base of the branch, a few bees emerge from holes in the hive. The southern giant hornet dives down towards the nest and lands near an entrance. It struts around and rubs its abdomen on the hive, marking it with pheromones to alert and rally other hornets for battle. Nearby honey bees buzz and hiss, alerting other hive members and preparing to defend themselves against an attack. The nest’s buzzing grows louder as the honey bee forces mobilize.</p>
            <p class="article_text">The hornet lunges forward and sinks its mandibles into an unlucky worker bee. The bee writhes and twists, desperately wielding its stinger, fighting till the end. Honey bees silently surround the hornet, with more bees joining their ranks at every passing moment. The hornet tosses and turns its thrashing prey, its mandibles hack and cleave the bee like Vince Offer working on some eggs in a Slap Chop infomercial. While the hornet is preoccupied with its dismembering, a swarm of bees rush in and envelop its body, still enclosed on its prey. The bees latch onto the invader and climb over each other, further entombing the wasp in layers of heat. Minutes pass, and the tide of bees subsides, revealing the motionless corpse of the giant hornet. The battle isn’t over, yet. The bees buzz and dance. They crowd their nest entrances. Workers forage for materials. The real battle will begin soon, when a group of southern giant hornets discover the scout’s pheromone mark on the nest, and come to annihilate all the bees. However, the honey bees will be ready. </p>
            <br class="header_br" />
            <p class="article_header_text">The research</p>
	        <p class="article_text">In 2020, Heather Mattila and her team of researchers from institutes in the United States, Canada, and Vietnam, discovered that eastern honey bees engage in a fascinating, newly-discovered defense response when their nests are threatened by southern giant hornets. They found that eastern honey bees collect animal feces and apply it in clumps to their nests in a process called fecal spotting, which deters attacks from their predator, the southern giant hornet. Mattila reported that instances of fecal spotting increased during a southern giant hornet attack, in the days following a hornet attack, and when the hornet pheromones have been applied to the nest. Researchers observed the occurrence of this defensive response in southern China and subtropical regions of Southeast Asia. </p>
            <br class="header_br" />
            <div>
               <StaticImage src="../../assets/images/bees.jpg"  placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" />
             </div>
            <p class="figure_text">Fig. C shows an eastern honey bee with feces in its mouth; Fig. D shows a spotted bee hive</p>
            <br class="header_br" />
            <p class="article_text">The researchers conducted their fieldwork in an apiary within the Ba Trai Commune in Hanoi, Vietnam. They observed the behaviour of 136 eastern honey bee colonies in similarly-sized wooden hives. Investigators scrubbed the wooden surface of the hives clean and painted them in colors that would easily contrast against the fecal spots. Mattila and her team placed fresh animal feces near entrances of these hives, painted the harvesters that collected the feces, and observed the behaviour of painted bees at the entrances of their hives over the course of ten days. Cameras recorded the front entrance of each hive from 9 am to 5 pm, and pictures captured the visible fecal spots before and after each naturally occurring hornet attack. During hornet attacks, investigators recorded a minute-by-minute record of events. They protected some nests from attack and compared their fecal spotting rate with attacked nests. </p>
            <br class="header_br" />
            <p class="article_header_text">Does it work?</p>
            <p class="article_text">For the purposes of this research, Mattila defined a hornet attack as a hornet visiting a bee hive for at least thirty seconds, in which the hornet can hover in front of the hive, land on the hive, chew on the entrance opening, deposit its attack pheromones, or attack other bees. The team found that spotted hives reduced the intensity and duration of southern giant wasps attacks by 90 percent. Although the number of hornets that land on hives didn’t change if the hive was spotted, the hornets quickly left spotted hives and spotted chewing on spotted entrances. Researchers posit that compounds in feces act as a deterrent against southern giant hornets and inhibit the action of their attack pheromones.  Attacks from a different wasp species, such as the Asian giant hornet resulted in an increased fecal spotting rate from their control group, however it was lower than the rate following a southern giant hornet attack. Researchers imply this is due to the hunting behaviours of the southern giant hornet, and suggest that eastern honey bee fecal spotting rates are highest in their presence. </p>
            <br class="header_br" />
            <p class="article_header_text">The arms race continues</p>
            <p class="article_text">The southern giant hornet “launches group attacks on nests of other social wasps and has been reported by beekeepers to slaughter and then occupy managed honey bee colonies.” It is reported that scout hornets mark the hives of honey bees with pheromones so their swarm can follow and attack the hive as a group. Honey bees can overwhelm hornets by “overheating and suffocating individual attackers in a ball of bees”, and crowd entrances of their hives, however many hives can be devasted from hornet group attacks. Mattila and her team discovered yet another defense mechanism in the honey bee arsenal to deal with their intense evolutionary pressures. </p>
            <br class="header_br" />
            <p class="references_text">References</p>
            <p class="references_text">Mattila, H. R., Otis, G. W., Nguyen, L. T., Pham, H. D., Knight, O. M., & Phan, N. T. (2020). Honey bees (apis cerana) use animal feces as a tool to defend colonies against group attack by Giant Hornets (vespa soror). PLOS ONE, 15(12). https://doi.org/10.1371/journal.pone.0242668 </p>
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

  @media only screen and (max-width: 359px) {
    .row {
      height: 670px;
    }
  }

`

export default article_2