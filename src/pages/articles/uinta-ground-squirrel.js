import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/global.css"
import ContextConsumer from "../../components/Context.js"
import { Link, useScrollRestoration } from "gatsby"

const Article_4 = () => {
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
              <Link class="article_home_link" to="/articles"><span>articles ➤</span></Link><h1>Uinta Ground Squirrel Population Density Reduction in an Edge Habitat</h1>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="row" {...articleScrollRestoration}>
            <div class="flex-container">
              <br class="header_br"/>

              <div>
                <StaticImage src="../../assets/images/uinta-0.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" ></StaticImage>
              </div>
              <p class="figure_text">Figure 1: Survival and fertility data for 3 age classes of the Uinta Ground Squirrel population</p>
              <br class="header_br" />

              <p class="article_text">In the 1960s and 1970s, scientists performed an experimental reduction in the population density of Uinta Ground Squirrels in three types of habitats in Utah. These researchers consolidated six years of data collected before and after the population reduction, into a single life table containing the survival and fertility rates of female squirrels across three age classes that constitute the squirrel population. </p>
              
              <p class="article_text">In the context of this experiment, the survival rate is a number between 0 and 1 that refers to the probability than an individual within an age class will survive through the current time interval. The fertility rate refers to the average number of newborn females produced by one female in a particular age class that survive through the time interval in which they were born. </p>
              
              <p class="article_text">The study categorized the squirrel population into three age classes: young, yearlings, and adults. “Young” refers to squirrels less than 1 year old, “yearlings” refers to squirrels between 1 and 2 years of age, and “adults” are squirrels older than 2 years. Consequently, each time interval, denoted as t, represents a one-year interval. For example, t would be the current year, and t+1 would be the next year. </p>
              
              <p class="article_text" >In this paper, I will develop two linear system models and their corresponding life cycle graphs using the pre-reduction and post-reduction life table data of Uinta Ground Squirrels residing in the edge habitat. I will use the Leslie matrix model to study the age-structured population dynamics of the squirrels. </p>
              
              <p class="article_text" >We will examine the reducibility, primitivity, dominant eigenvalues and their corresponding eigenvectors for each matrix to analyze the long-term dynamics and age distributions of the pre- and post- reduction squirrel populations.</p>
              
              
              
              <br/>
              <p class="article_header_text">Leslie Matrix Models and Life Cycle Graphs </p>
              
              <p class="article_text">The simplest model with an age-structure is the Leslie Matrix model. To construct a Leslie matrix, we must establish some rules about the population and the age classes within it. Firstly, we must assume that the population is closed to migration, meaning that no individuals leave the population, and no new individuals enter the population, from the time it is under observation to any time interval it is projected forward onto.</p>
              
              <p class="article_text">Secondly, only the females of the population are modeled, and this is typically reserved for populations where the number of males can be described in a ratio to the number of females in a population, so we can extrapolate total population insights from the females alone.</p>
              
              <p class="article_text">Lastly, the time interval coincides with the age interval. To elaborate, let us denote i as the index of an age class in a population, where m is the maximum possible index representing the oldest age class. Under this model, if a squirrel survives the current time interval t and enters the next time interval t+1, they leave their current age class i, and enter the subsequent age class i+1, up until they reach the oldest age class m, where they will remain throughout further time intervals until their death. </p>
              
              <p class="article_text">Using these rules, it follows that the number of individuals belonging to age class i+1 at time interval t+1 is equal to the number of individuals belonging to the previous age class i at the previous time interval t multiplied by their survival rate, denoted as s<sub>i</sub>. In time interval t+1, the number of individuals in the first age class is equal to the sum of the products of each age class’s population at time interval t and their respective fertility rates, denoted b<sub>i</sub>.</p>
            
              <p class="article_text">Using these relationships between the age classes, we can construct equations X<sub>i</sub>(t+1) that refer to the number of individuals in an age class i at the subsequent time interval t+1. If we arrange these equations into rows by order of increasing age class, and place the survival rates of each age class under their respective birth rate from the first age group equation such that each term in the equations belongs to a column representing an age class, we see an (m x m) matrix form, where each row corresponds to an age class’s population, and each column corresponds to what that age class contributes to the population of every other age class. </p>
              
              <p class="article_text">For every age class greater than 1, their population only depends on the survival rate of the previous age class, so the remaining entries in this matrix are zeroes. As we are studying Uinta Ground Squirrels with 3 age classes, we know that m is equal to 3, and the following matrix model is formed, where L refers to the Leslie matrix. </p>
              
              <br />
              <br />
              <br />

              <div class="expression" id="margin_top_expression">
                <span><i>X </i>(<i>t</i> + 1) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t </i>+ 1)</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>b</i><sub>1</sub></td>
                        <td><i>b</i><sub>2</sub></td>
                        <td><i>b</i><sub>3</sub></td>
                    </tr>
                    <tr>
                      <td><i>s</i><sub>1</sub></td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td><i>s</i><sub>2</sub></td>
                      <td>0</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> × </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t</i> )</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <span> &emsp; </span>
                <span><i>LX </i> (<i>t</i> )</span>
              </div>
              <br />
              
              <p class="figure_text">Figure 2: An example of a Leslie matrix for a population with 3 age classes</p>
              <br />
              <br class="header_br" />
              
              <p class="article_text">Let us denote <b>P</b> as the Leslie matrix of the pre-reduction population, and <b>Q</b> as the Leslie matrix of the post-reduction population, with the x functions referring to the number of individuals in an age group n at time periods t and t+1 in both models. Using the data provided in the assignment description, we can construct the following linear system models in matrix form:</p>
              <br class="header_br"/>
              <p class="article_subheader_text" id="no_indent">Pre-reduction:</p>



              <br />
              <br />
              <br />

              <div class="expression" id="margin_top_expression">
                <span><i>P </i>(<i>t</i> + 1) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t </i>+ 1)</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.445</td>
                        <td>0.845</td>
                        <td>0.823</td>
                    </tr>
                    <tr>
                      <td>0.350</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>0.440</td>
                      <td>0</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> × </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t</i> )</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <span> &emsp; </span>
                <span><i>LP </i> (<i>t</i> )</span>
              </div>
              <br />
              
              <p class="figure_text">Figure 3: A Leslie matrix for the squirrel population in the edge habitat (before the population reduction)</p>
              <br />
              <br class="header_br" />



              <br class="header_br"/>
              <p class="article_subheader_text" id="no_indent">Post-reduction:</p>


              <br />
              <br />
              <br />

              <div class="expression" id="margin_top_expression">
                <span><i>Q </i>(<i>t</i> + 1) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t </i>+ 1)</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.334</td>
                        <td>1.880</td>
                        <td>0.934</td>
                    </tr>
                    <tr>
                      <td>0.167</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>1.000</td>
                      <td>0</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> × </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t</i> )</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
                <span> = </span>
                <span> &emsp; </span>
                <span><i>LQ </i> (<i>t</i> )</span>
              </div>
              <br />
              
              <p class="figure_text">Figure 4: A Leslie matrix for the squirrel population in the edge habitat (after the population reduction)</p>
              <br />
              <br />


        
              <p class="article_text">Life cycle graphs or directed graphs (digraphs) can be used to represent the relationship between the age groups in a Leslie Matrix. A life cycle graph is composed of nodes and edges, where every age class from 1 to m is represented by its own node, and unidirectional edges connect these nodes, representing what each age class contributes to each other at the subsequent time interval. For the directed graph of a Leslie Matrix, an age class’s node connects to its subsequent age class’s node if the survival rate of the age class is non-zero. Furthermore, every node connects back to the first node which represents the first age class if the fertility rate of the age class represented by that node is non-zero. As a rule of thumb, if any element <b>l<sub>ij</sub></b> in a Leslie Matrix L is non-zero, an arrow connects the node <b>j</b> to the node <b>i</b> in the digraph. </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div class="expression_LCG">
              
                <span><i>X </i>(<i>t</i> + 1) = </span>
                <div class="leslie_bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t </i>+ 1)</td>
                    </tr>
                    <tr>
                      <td><p class="vertical_ellipses">⋮</p></td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>m</sub>(<i>t </i>+ 1)</td>
                    </tr>
                </table>
                <div class="leslie_bracket">)</div>
                <span> = </span>
                <div class="leslie_bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>b</i><sub>1</sub></td>
                        <td><i>b</i><sub>2</sub></td>
                        <td class="top_horizontal_ellipses">. . .</td>
                        <td><i>b</i><sub>m-1</sub></td>
                        <td><i>b</i><sub>m</sub></td>
                    </tr>
                    <tr>
                      <td><i>s</i><sub>1</sub></td>
                      <td>0</td>
                      <td class="top_horizontal_ellipses">. . .</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td><i>s</i><sub>2</sub></td>
                      <td class="horizontal_ellipses">. . .</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><p class="vertical_ellipses">⋮</p></td>
                      <td><p class="vertical_ellipses">⋮</p></td>
                      <td class="diagonal_ellipses"><sup>. </sup> . <sub> .</sub></td>
                      <td><p class="vertical_ellipses">⋮</p></td>
                      <td><p class="vertical_ellipses">⋮</p></td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td class="horizontal_ellipses">. . .</td>
                      <td>s<sub>m-1</sub></td>
                      <td>0</td>
                    </tr>
                </table>
                <div class="leslie_bracket">)</div>
                <span> × </span>
                <div class="leslie_bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td><i>x</i><sub>1</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>2</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>3</sub>(<i>t</i> )</td>
                    </tr>
                    <tr>
                      <td><p class="vertical_ellipses">⋮</p></td>
                    </tr>
                    <tr>
                      <td><i>x</i><sub>m</sub>(<i>t</i> )</td>
                    </tr>
                </table>
                <div class="leslie_bracket">)</div>
                <span> = </span>
                <span> &emsp; </span>
                <span><i>LX </i> (<i>t</i> )</span>
              </div>
              
              <br />
              <br class="header_br" />
              <br class="header_br" />
              <br class="header_br" />
              <p class="figure_text">Figure 5: A Leslie matrix for a population with m age classes</p>
              <br />
              <br />
              <div>
                <StaticImage src="../../assets/images/uinta-4.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" ></StaticImage>
              </div>
              <p class="figure_text">Figure 6: A life cycle graph for a population with m age classes</p>
              <br class="header_br"/>
              <p class="article_text">We can construct the life cycle graphs for the pre-reduction and post-reduction populations of Uinta Ground Squirrels in this form using the provided survival and fertility rates, or using the non-zero elements of their respective Leslie matrices. 	</p>
              <br class="header_br"/>
              <br class="header_br"/>
              <p class="article_subheader_text" id="no_indent">Pre-reduction:</p>
              <br class="header_br"/>
              <div>
                <StaticImage  src="../../assets/images/uinta-5.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" ></StaticImage>
              </div>
              <p class="figure_text">Figure 7: A life cycle graph for the squirrel population before the population reduction</p>
              <br class="header_br"/>
              <br/>
              <p class="article_subheader_text" id="no_indent">Post-reduction:</p>
              <br class="header_br"/>
              <div>
                <StaticImage  src="../../assets/images/uinta-6.png" placeholder="blurred" quality={100} transformOptions={{ fit: "cover", cropFocus: "attention" }} layout="fullWidth" ></StaticImage>
              </div>
              <p class="figure_text">Figure 8: A life cycle graph for the squirrel population after the population reduction</p>
              <br class="header_br"/>
              <br/>
              <br/>
              <p class="article_header_text">Reducibility, Primitivity, Dominant Eigenvalues, and R0</p>
              
              <p class="article_text">The matrices of these two systems are irreducible. This is evident as the directed graphs of both pre- and post- reduction populations are strongly connected. In particular, the last element in the first row, which represents the fertility rate of females in the oldest age class, adults, is a non-zero element in both matrices. By definition, the subdiagonal elements of a Leslie matrix are greater than 0, and consequently, are strongly connected. Thus, a requirement for the system described by a Leslie matrix to be irreducible is that its b<sub>m</sub>, or fertility rate of its oldest age class is greater than 0, connecting the last state variable x<sub>m</sub> to the first state variable x<sub>1</sub>. We see that both systems’ adult fertility rates are greater than 0, and their subdiagonal elements are greater than 0, therefore, both systems are strongly connected and irreducible. </p>
              
              <p class="article_text">To determine primitivity, we can apply Theorem 1.7 which states that an irreducible Leslie matrix L is primitive if the set of numbers containing the indices of its positive birth rates aren’t factors of each other, or in other words, their greatest common divisor is 1. A simple method to determine primitivity in light of this theorem, is checking if b<sub>1</sub>, the birth rate of the youngest age class, is greater than 0. This element’s index is 1, which means that it doesn’t matter what combination the indices of the positive birth rates are, because the greatest common divisor of 1 and any other set of positive real numbers will always be 1. In both matrices P and Q, we see that their b<sub>1</sub> elements are both positive, thereby satisfying the condition outlined in Theorem 1.7, therefore, they are both primitive matrices.  </p>
              
              <p class="article_text">Another way to determine the primitivity of a matrix is by calculating the number of its eigenvalues with maximum modulus, or dominant eigenvalues. If a matrix has a single dominant eigenvalue, it is considered primitive, and if it has more than one dominant eigenvalue, it is considered imprimitive. Additionally, we can determine if a matrix is primitive by finding some positive, real number n such that L<sup>n</sup> > 0. This is evident in both matrices P and Q, where n = 3. In other words, if we raise either Leslie matrix to the power of 3, the resulting matrix contains all positive numbers. </p>
              
              <p class="article_text">The Frobenius Theorem states that an irreducible, nonnegative matrix always has a positive dominant eigenvalue that is a simple root of its characteristic equation.  The Perron Theorem states that a positive matrix always has a real, positive dominant eigenvalue that is a simple root of its characteristic equation. As we have determined that both Leslie matrices representing the population dynamics of pre- and post- reduction Uinta Squirrel populations in the edge habitat are irreducible and primitive, the Perron Theorem applies to both matrices, and we can find their dominant eigenvalues by solving for the roots of their respective characteristic polynomials. </p>
              
              <p class="article_text">To construct the characteristic polynomial of either system, we begin by finding (L – λI) for each matrix, where λI is the identity matrix multiplied by λ, resulting in a matrix with λ entries along its diagonal and zeroes everywhere else. We then calculate the determinant of each matrix, which should result in a cubic polynomial, which makes sense as both matrices have a dimension of 3. To find the determinant of a 3x3 matrix, we take the minor of each of the 9 terms in the matrix (L – λI), which is simply the determinant of the 2x2 matrix created when ignoring the line and column of the element we’re taking the minor of. Using the minors, we can find the cofactors of each element by taking the product of each element’s minor with its respective place sign, which alternates from + to – across rows and columns, starting with + at position l<sub>11</sub>. </p>
              <p class="article_text">Finally, we can construct the characteristic polynomial by taking the sum of the products of elements in any row or column in (L – λI) with their respective cofactors. I will outline this process by showing both cofactor matrices and their characteristic polynomials.</p>
              <br class="header_br" />
              <p class="article_subheader_text">Pre-reduction</p>



              <br/>
              <div class="expression">
                <span>(P - λI) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.445 - λ</td>
                        <td>0.845</td>
                        <td>0.823</td>
                    </tr>
                    <tr>
                        <td>0.350</td>
                        <td>- λ</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0.440</td>
                        <td>- λ</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>
              <div class="expression">
                <span>(P-λI)  cofactors =</span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>λ<sup>2</sup></td> 
                        <td>0.350λ</td>
                        <td>0.154</td>
                    </tr>
                    <tr>
                        <td>0.845λ + 0.362</td>
                        <td>λ<sup>2</sup> - 0.445λ</td>
                        <td>0.440λ - 0.196</td>
                    </tr>
                    <tr>
                        <td>0.823λ</td>
                        <td>0.288</td>
                        <td>λ<sup>2</sup> - 0.445λ - 0.296</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>
          
                
              <p class="formula_text">det⁡(P – λI) = (0 × 0.823λ) + (0.440 × 0.288) + (-λ × (λ<sup>2</sup> – 0.445λ – 0.296))</p>
              <p class="formula_text">det⁡(P – λI) = -λ<sup>3</sup> + (0.445 × λ<sup>2</sup>) + (0.296 × λ) + 0.128 </p>
              <br/>

              <br class="header_br" />
              <p class="article_text">By Descartes’ rule of signs, this characteristic polynomial has a single change in signs, meaning this polynomial has a single positive root. That positive root will be our dominant eigenvalue. </p>
              
              <p class="article_text">When we solve this characteristic polynomial, where a = -1, b = 0.445, c = 0.296, and d = 0.128, there are 3 roots. Two of these solutions are a pair of complex conjugates, x<sub>1</sub> = -0.237 + 0.288<i>i</i> and x<sub>2</sub> = -0.237 - 0.288<i>i</i>.</p>
              

              <p class="article_text">The last solution is a positive real number, x<sub>3</sub> = 0.918. We can conclude that 0.918 is the dominant eigenvalue as it is greater in magnitude than both complex conjugates, which have the same magnitude of √<p class="sqrt">(-0.237)<sup>2</sup>+0.288<sup>2</sup>.</p> </p>
              
              <p class="article_text">Since the dominant eigenvalue is less than 1, we can conclude that R<sub>0</sub>, the inherent net reproductive number, which refers to the number of offspring that an individual has in their lifetime, is also less than one. We can also calculate this in the following equation:</p>
              <br/>
              <p class="formula_text">R<sub>0</sub> = b<sub>1</sub> + b<sub>2</sub>s<sub>1</sub> + b<sub>3</sub>s<sub>1</sub>s<sub>2</sub> </p>
              <p class="formula_text">R<sub>0</sub> = 0.445 + (0.845 × 0.350) + (0.823 × 0.350 × 0.440) = 0.868</p>
              <br/>
              <p class="article_text">Both R<sub>0</sub> and λ<sub>1</sub> are less than 1, which means that this population eventually goes extinct, after enough time, given there are no changes in the state of this system. </p>
              <br/>
              <p class="article_subheader_text" >Post-reduction</p>
              <br/>
              <div class="expression">
                <span>(Q - λI) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.334 - λ</td>
                        <td>1.880</td>
                        <td>0.934</td>
                    </tr>
                    <tr>
                        <td>0.167</td>
                        <td>- λ</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1.000</td>
                        <td>- λ</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>
              <div class="expression">
                <span>(Q-λI)  cofactors =</span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>λ<sup>2</sup></td> 
                        <td>0.167λ</td>
                        <td>0.167</td>
                    </tr>
                    <tr>
                        <td>1.880λ + 0.934</td>
                        <td>λ<sup>2</sup> - 0.334λ</td>
                        <td>λ - 0.334</td>
                    </tr>
                    <tr>
                        <td>0.934λ</td>
                        <td>0.156</td>
                        <td>λ<sup>2</sup> - 0.334λ - 0.314</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>
          
                
              <p class="formula_text">det⁡(Q – λI) = (0 × 0.934λ) + (1.000 × 0.156) + (-λ × (λ<sup>2</sup> – 0.334λ – 0.314))</p>
              <p class="formula_text">det⁡(Q – λI) = -λ<sup>3</sup> + (0.334 × λ<sup>2</sup>) + (0.314 × λ) + 0.156 </p>
              <br/>

              <p class="article_text">By Descartes’ rule of signs, this characteristic polynomial has a single change in signs, meaning this polynomial has a single positive root. That positive root will be our dominant eigenvalue. </p>
              
              <p class="article_text">When we solve this characteristic polynomial, where a = -1, b = 0.334, c = 0.314, and d = 0.156, there are 3 roots. Two of these solutions are a pair of complex conjugates with the same absolute value, x<sub>1</sub> = -0.276 + 0.316<i>i</i> and x<sub>2</sub> = -0.276 - 0.316<i>i</i>. </p>
              
              <p class="article_text">The last solution is a positive real number, x<sub>3</sub> = 0.887. We can conclude that 0.887 is the dominant eigenvalue as it is greater in magnitude than both complex conjugates, which have the same magnitude of √<p class="sqrt">(-0.276)<sup>2</sup>+0.316<sup>2</sup>.</p></p>
            
              <p class="article_text">Since the dominant eigenvalue is less than 1, we can conclude that R<sub>0</sub>, the inherent net reproductive number, which refers to the number of offspring that an individual has in their lifetime, is also less than one. We can also calculate this in the following equation:</p>
              <br/>
              <p class="formula_text">R<sub>0</sub> = b<sub>1</sub> + b<sub>2</sub>s<sub>1</sub> + b<sub>3</sub>s<sub>1</sub>s<sub>2</sub> </p>
              <p class="formula_text">R<sub>0</sub> = 0.334 + (1.880 × 0.167) + (0.934 × 0.167 × 1.000) = 0.804</p>
              <br/>
              <p class="article_text">Both R<sub>0</sub> and λ<sub>1</sub> are less than 1, which means that this population eventually goes extinct, after enough time, given there are no changes in the state of this system. </p>
              

              <p class="article_text">Comparing both systems’ dominant eigenvalues and inherent net reproductive numbers, we can see that the post-reduction population’s values have decreased slightly across the board, meaning the long-term outcomes of the edge population have worsened as a result of this population density reduction. Interestingly enough, the dominant eigenvalues and inherent net reproductive numbers of lawn and non-lawn populations have increased dramatically after their population density reductions.  </p>
              
              <p class="article_text">This presents an interesting case study, as it raises some important questions. Namely, what is it about an edge habitat, which is a transitory space between two defined habitats, which results in such different outcomes compared to the lawn and non-lawn habitats? Lawn habitats are typically lower in biodiversity when it comes to other animals, as well as the flora and fauna in the ecosystem, compared to non-lawn habitats. I would imagine that the edge habitat between these two types has aspects of both in varying gradients across the landscape, but I don’t understand why a mixture of both habitats would result in such different outcomes compared to the individual habitats themselves. </p>
              

              <p class="article_text">Another interesting observation – the survival rate of yearlings after this reduction in the edge environment is 100%, which means that every single yearling survives the year it takes to become an adult. Not only that, but their fertility rate increased the most dramatically, and ended up being the highest fertility rate across age classes and habitats. </p>
              
              <p class="article_text">This raises another important question, why has the inherent net reproductive number for the edge habitat squirrels decreased when their yearling survival and fertility rates have exploded to astronomical amounts? This is intriguing, especially because the fertility and survival rates of adults and young remained relatively consistent across the reduction, except for the survival rate of young after the reduction. We see that this rate has halved as a result of the reduction, possibly because there are less squirrels to take care of their young in this habitat, where there are potentially more predators and variables at play which put these vulnerable segments of the population at risk. </p>
              <p class="article_text">In any case, the affect of this halved survival rate is evident when we look at the relationship it has with the inherent net reproductive number. We see that every term used to calculate R<sub>0</sub> is multiplied by s<sub>1</sub>. Since s<sub>1</sub> was effectively halved, so was R<sub>0</sub>, however this effect was cancelled out by the dramatic increase in survival and fertility rates of yearlings, but not quite, which is why we see a slight decrease overall. This serves as an important reminder, that the survival rate of the youngest age class of a population has far-reaching affects, as every other population segment depends on its previous age segments surviving and reproducing to exist. </p>
              
              
              <br/>
              <p class="article_header_text">Population Age Distributions</p>
              <p class="article_text">To see how the distribution of age segments in a population change over time, we must first calculate the stable age distribution, which is the eigenvector which corresponds to the dominant eigenvalue of a Leslie matrix. This vector is used to calculate future distributions as it is associated with the dominant eigenvalue, which defines the population number. As the dominant eigenvector, it makes sense that the dominant eigenvalues multiplied by this vector are also what define the segments in each population, over smaller eigenvectors. </p>
            
              <p class="article_text">To find our stable age distribution, or v<sub>1</sub> which corresponds to λ<sub>1</sub>, we calculate (L – λ<sub>1</sub>I), which is the Leslie matrix subtracting the dominant eigenvalue for each term in its diagonal. We then multiply this with the vector v<sub>1</sub> and set it to 0 to solve for v<sub>11</sub>, v<sub>12</sub>, and v<sub>13</sub> in a system of equations. </p>
            
              <p class="article_text">To project the population age distributions forward in time, we multiply the Leslie matrix by this stable age distribution. To project forward n years, we raise the power of the Leslie matrix by n, and multiply it with the stable age distribution to get the age distribution at time period n. </p>
              
              <br/>
              <p class="article_subheader_text" >Pre-reduction</p>
              <br/>
              <div class="expression">
                <span>(P - λ<sub>1</sub>I) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.445 - 0.918</td>
                        <td>0.845</td>
                        <td>0.823</td>
                    </tr>
                    <tr>
                        <td>0.350</td>
                        <td>-0.918</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0.440</td>
                        <td>-0.918</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <div class="expression">
                <span>(P - λ<sub>1</sub>I) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>-0.473</td> 
                        <td>0.845</td>
                        <td>0.823</td>
                    </tr>
                    <tr>
                        <td>0.350</td>
                        <td>-0.918</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0.440</td>
                        <td>-0.918</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>

              <div class="expression">
                <span>0 = [v<sub>1</sub>]</span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>-0.473</td> 
                        <td>0.845</td>
                        <td>0.823</td>
                    </tr>
                    <tr>
                        <td>0.350</td>
                        <td>-0.918</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0.440</td>
                        <td>-0.918</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>
              <br/>
              <p class="formula_text">(-0.473 × v<sub>11</sub>) + (0.845 × v<sub>12</sub>) + (0.823 × v<sub>13</sub>) = 0</p>
              <p class="formula_text">(0.350 × v<sub>11</sub>) – (0.918 × v<sub>12</sub>) = 0 </p>
              <p class="formula_text">(0.440 × v<sub>12</sub>) – (0.918 × v<sub>13</sub>) = 0</p>
              <br/>
              <br/>
              <p class="article_text" id="no_indent">Solving this system of linear equations we find that  
                <div class="expression_2">
                  <span class="expression_span">v<sub>1</sub> =</span>
                  <div class="bracket">(</div>
                  <table class="matrix">
                      <tr>
                          <td>1</td>
                      </tr>
                      <tr>
                        <td>0.381</td>
                      </tr>
                      <tr>
                        <td>0.183</td>
                      </tr>
                  </table>
                  <div class="bracket_close">)</div>
                </div>
                </p>
                <p class="article_text" id="no_indent">
                By arbitrarily setting v<sub>11</sub> to 1. Normalizing this vector, we find that 
                <div class="expression_2">
                  <span class="expression_span">v<sub>1</sub> =</span>
                  <div class="bracket">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.639</td>
                      </tr>
                      <tr>
                        <td>0.244</td>
                      </tr>
                      <tr>
                        <td>0.117</td>
                      </tr>
                  </table>
                  <div class="bracket_close">)</div>
                </div>
                
                </p>
                <br/>
                
              <p class="article_text" id="no_indent">I want to compare the age distribution after 1 year, 5 years, and 10 years, so we will compute P<sup>5</sup> and P<sup>10</sup> and multiply those matrices with v<sub>1</sub> to find those vectors. </p>
              <br/>
              <br/>
              <br/>
              <div class="expression_inline">
                <div class="inline-box">
                  <span>P<sup>5</sup> = </span>
                  <div class="bracket_inline">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.389</td>
                          <td>0.524</td>
                          <td>0.342</td>
                      </tr>
                      <tr>
                          <td>0.145</td>
                          <td>0.204</td>
                          <td>0.138</td>
                      </tr>
                      <tr>
                          <td>0.074</td>
                          <td>0.089</td>
                          <td>0.063</td>
                      </tr>
                  </table>
                  <div class="bracket_inline">)</div>
                </div>
                <div class="inline-box">
                  <span>P<sup>10</sup> = </span>
                  <div class="bracket_inline">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.252</td>
                          <td>0.341</td>
                          <td>0.226</td>
                      </tr>
                      <tr>
                          <td>0.096</td>
                          <td>0.130</td>
                          <td>0.086</td>
                      </tr>
                      <tr>
                          <td>0.046</td>
                          <td>0.062</td>
                          <td>0.041</td>
                      </tr>
                  </table>
                  <div class="bracket_inline">)</div>
                </div>
              </div>
              <br/>
              <br/>
              <br/>

              <p class="article_subheader_text" id="no_indent">Post-reduction</p>
              <br class="header_br" />
              <br/>

              <div class="expression">
                <span>(Q - λ<sub>1</sub>I) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>0.334 - 0.887</td>
                        <td>1.880</td>
                        <td>0.934</td>
                    </tr>
                    <tr>
                        <td>0.167</td>
                        <td>-0.887</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1.000</td>
                        <td>-0.887</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <div class="expression">
                <span>(Q - λ<sub>1</sub>I) = </span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>-0.553</td>
                        <td>1.880</td>
                        <td>0.934</td>
                    </tr>
                    <tr>
                        <td>0.167</td>
                        <td>-0.887</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1.000</td>
                        <td>-0.887</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <div class="expression">
                <span>0 = [v<sub>1</sub>]</span>
                <div class="bracket">(</div>
                <table class="matrix">
                    <tr>
                        <td>-0.553</td> 
                        <td>1.880</td>
                        <td>0.934</td>
                    </tr>
                    <tr>
                        <td>0.167</td>
                        <td>-0.887</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1.000</td>
                        <td>-0.887</td>
                    </tr>
                </table>
                <div class="bracket">)</div>
              </div>
              <br/>
              <br/>

              <p class="formula_text">(-0.553 × v<sub>11</sub>) + (1.880 × v<sub>12</sub>) + (0.934 × v<sub>13</sub>) = 0</p>
              <p class="formula_text">(0.167 × v<sub>11</sub>) – (0.887 × v<sub>12</sub>) = 0 </p>
              <p class="formula_text">(1.000 × v<sub>12</sub> – (0.887 × v<sub>13</sub>) = 0</p>
              <br/>

              <p class="article_text" id="no_indent">Solving this system of linear equations, we find that 
                

              <div class="expression_2">
                  <span class="expression_span">v<sub>1</sub> =</span>
                  <div class="bracket">(</div>
                  <table class="matrix">
                      <tr>
                          <td>1</td>
                      </tr>
                      <tr>
                        <td>4.705</td>
                      </tr>
                      <tr>
                        <td>4.173</td>
                      </tr>
                  </table>
                  <div class="bracket_close">)</div>
                </div>
                </p>
                <p class="article_text" id="no_indent">
                By arbitrarily setting v<sub>11</sub> to 1. Normalizing this vector, we find that 
                
                <div class="expression_2">
                  <span class="expression_span">v<sub>1</sub> =</span>
                  <div class="bracket">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.101</td>
                      </tr>
                      <tr>
                        <td>0.422</td>
                      </tr>
                      <tr>
                        <td>0.476</td>
                      </tr>
                  </table>
                  <div class="bracket_close">)</div>
                </div>
                
                </p>
              <br/>
              <p class="article_text" id="no_indent">Next, we compute Q<sup>5</sup> and Q<sup>10</sup> and multiply those matrices with v<sub>1</sub> to find those vectors. </p>
              <br/>
              <br/>
              <br/>
              <div class="expression_inline">
                <div class="inline-box">
                  <span>Q<sup>5</sup> = </span>
                  <div class="bracket_inline">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.300</td>
                          <td>0.978</td>
                          <td>0.299</td>
                      </tr>
                      <tr>
                          <td>0.053</td>
                          <td>0.193</td>
                          <td>0.063</td>
                      </tr>
                      <tr>
                          <td>0.067</td>
                          <td>0.186</td>
                          <td>0.066</td>
                      </tr>
                  </table>
                  <div class="bracket_inline">)</div>
                </div>
                <div class="inline-box">
                  <span>Q<sup>10</sup> = </span>
                  <div class="bracket_inline">(</div>
                  <table class="matrix">
                      <tr>
                          <td>0.162</td>
                          <td>0.538</td>
                          <td>0.171</td>
                      </tr>
                      <tr>
                          <td>0.031</td>
                          <td>0.101</td>
                          <td>0.032</td>
                      </tr>
                      <tr>
                          <td>0.035</td>
                          <td>0.114</td>
                          <td>0.036</td>
                      </tr>
                  </table>
                  <div class="bracket_inline">)</div>
                </div>
              </div>
              <br/>
              <br/>
              <br/>      

              <p class="article_text" id="no_indent">The results of the age distribution projections are summarized in the table below:</p>
              <br />
              <br />
              <table class="figure_table">
                <thead>
                    <tr class="figure_tr">
                      <th id="pop_table_header"><span>Population Type</span></th>
                      <th id="v1_table_header"><span>Stable Age Distribution (v<sub>1</sub>)</span></th>
                      <th>t = 1</th>
                      <th>t = 5</th>
                      <th>t = 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="figure_tr">
                        <td id="pre_table_header">
                            <span>Pre-reduction</span>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.639</td>
                                </tr>
                                <tr>
                                    <td>0.244</td>
                                </tr>
                                <tr>
                                    <td>0.117</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.639</td>
                                </tr>
                                <tr>
                                    <td>0.244</td>
                                </tr>
                                <tr>
                                    <td>0.117</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.640</td>
                                </tr>
                                <tr>
                                    <td>0.244</td>
                                </tr>
                                <tr>
                                    <td>0.117</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.641</td>
                                </tr>
                                <tr>
                                    <td>0.242</td>
                                </tr>
                                <tr>
                                    <td>0.116</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                    </tr>
                    <tr class="figure_tr">
                        <td id="post_table_header"><span>Post-reduction</span></td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.101</td>
                                </tr>
                                <tr>
                                    <td>0.422</td>
                                </tr>
                                <tr>
                                    <td>0.476</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.743</td>
                                </tr>
                                <tr>
                                    <td>0.010</td>
                                </tr>
                                <tr>
                                    <td>0.247</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.716</td>
                                </tr>
                                <tr>
                                    <td>0.142</td>
                                </tr>
                                <tr>
                                    <td>0.142</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                        <td>
                          <div class="table_expression">
                            <div class="bracket">(</div>
                            <table class="matrix">
                                <tr>
                                    <td>0.714</td>
                                </tr>
                                <tr>
                                    <td>0.134</td>
                                </tr>
                                <tr>
                                    <td>0.152</td>
                                </tr>
                            </table>
                            <div class="bracket">)</div>
                          </div>
                        </td>
                    </tr>
                    
                </tbody>
              </table>
              <p class="figure_text">Figure 9: Age distribution table for the population - each column corresponds to the proportion of an age-segment (young, yearling, adult) to the total population </p>
            
              <br />
              <p class="article_text">We can see that the age distribution for the pre-reduction remains stable throughout 10 years after the time of the experiment. For the post-reduction population, we see a stark difference in the stable age distribution, and that is outlined in the trend we see emerge as the years progress, among the three age classes. The distribution of young decreases and the distribution of yearlings and adults increase in lockstep to compensate. Furthermore, the rate at which this decrease occurs slows down, as we can see the distribution of young at t = 1 compared to t = 5 decreases faster than the distribution of young at t = 5 to t = 10. </p>
              <p class="article_text">Additionally, we observe that the proportion of adults increases more than the proportion of yearlings, which is reflected both in the post-reduction population’s stable age distribution, which guarantees that future age distribution will be a multiple of this vector, but it is also outlined in the life table of the population. The survival rate of young is effectively halved after the reduction, which drastically impacts the number of yearlings which exist in the following years. As for the yearlings that do survive, perhaps because of decreased competition, they thrive as all of them survive to adulthood, and their fertility rates indicate that they contribute heavily towards following years’ young population. </p>
              
              <br/>
              <br/>
              <p class="references_text">References</p>
              <p class="references_text">Allen, L. J. S. (2007). An introduction to mathematical biology. Pearson/Prentice Hall. </p>
              <p class="references_text">Oli, M. K., Slade, N. A., & Dobson, F. S. (2001). Effect of density reduction on Uinta Ground Squirrels: Analysis of Life Table Response Experiments. Ecology, 82(7), 1921–1929. </p>
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
   transform: scaleY(270%);
   margin-top: -16px;
   margin: -15px 5px 0px 5px;
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


height: 3000px;
// margin: 0vw 10vw 0vw 10vw;
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
      margin-left: -20px;
    }
      .flex-container {
      margin-left: 5px;
    }

    .row {
      margin-right: 5px;
    }
    

  }

  @media only screen and (max-width: 951px) {
    
    .header {
      margin-top: -1px;
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

  @media only screen and (max-width: 895px) {

    .expression {
      margin: 0px -15px 0px -15px;
      // transform: scale(0.9, 0.9);
      // transition: transform 0.2s;
      // width: 100%;
      // justify-content: center;
    }

    .expression_LCG {
      margin: 0px -15px 0px -15px;
      // transform: scale(0.9, 0.9);
      // transition: transform 0.2s;
      // width: 100%;
      // justify-content: center;
    }

    .expression_inline {
      margin: 0px 0px 0px 0px;
      transform: scale(0.9, 0.9);
      transition: transform 0.2s;
      width: 100%;
      justify-content: center;
    }

    .expression_2 {
      margin: 0px 0px 0px 0px;
      transform: scale(0.8, 0.8);
      transition: transform 0.2s;
      width: 100%;
      justify-content: center;
    }

    .formula_text {
      margin: 0px 0px 0px 0px;
      transform: scale(0.9, 0.9);
      transition: transform 0.2s;
      justify-content: flex-start;
    }
    
  }

   @media only screen and (max-width: 865px) {
   .expression_LCG {
      transform: scale(0.9, 0.9);
      transition: transform 0.2s;
      // width: 120%;
      justify-content: center;
    }

}

@media only screen and (max-width: 850px) {
  .row {
    overflow-x: hidden;
  }  

  #margin_top_expression {
    margin-top: -30px;
  }

   .expression {
      margin: 0px -65px 0px -65px;
      transform: scale(0.85, 0.85);
      transition: transform 0.2s;
      width: 160%;
      justify-content: center;
    }

     .expression_LCG {
      margin: -30px -65px 0px -65px;
      transform: scale(0.85, 0.85);
      transition: transform 0.2s;
      justify-content: center;
    }

}

@media only screen and (max-width: 750px) {
   .expression_LCG {
      margin: 0px -165px 0px -165px;
      transform: scale(0.75, 0.75);
      transition: transform 0.2s;
      width: 160%;
      justify-content: center;
    }

    .table_expression {
      margin: 0px 0px 0px 0px;
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      width: 120%;
      justify-content: center;
    }

    .figure_table thead .figure_tr th {
      font-size: 14px;
    }

    .figure_table tbody .figure_tr td {
      font-size: 14px;
    }

    .figure_tr td {
      padding: 0px 0px 0px 0px;
    }

}

@media only screen and (max-width: 680px) {

  #margin_top_expression {
    margin-top: -60px;
  }

  .expression {
    margin: 0px -65px 0px -65px;
    transform: scale(0.80, 0.80);
    transition: transform 0.2s;
    width: 160%;
    justify-content: center;
  }

   .expression_LCG {
      margin: -60px -165px 0px -165px;
      transform: scale(0.70, 0.70);
      transition: transform 0.2s;
      width: 160%;
      justify-content: center;
    }

    .expression_inline {
      transform: scale(0.80, 0.80);
      transition: transform 0.2s;
      margin-top: -20px;
    }

  

}

@media only screen and (max-width: 660px) {
   .expression {
      margin: 0px -65px 0px -65px;
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      width: 160%;
      justify-content: center;
    }

     .expression_LCG {
      margin: -30px -65px 0px -65px;
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      justify-content: center;
    }

    .expression_inline {
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      margin-top: -20px;
    }

}


@media only screen and (max-width: 600px) {
    

   .figure_table {
      transform: scale(0.88, 0.88);
      transition: transform 0.2s;
      justify-content: center;
      margin-left: -4%;
      margin-top: -60px;
    }

    .expression_LCG {
      margin: -70px -95px 0px -95px;
      transform: scale(0.60, 0.60);
      transition: transform 0.2s;
      justify-content: center;
    }

  .expression_inline {
      transform: scale(0.70, 0.70);
      transition: transform 0.2s;
      margin-top: -20px;
    }

    .expression_2 {
      transform: scale(0.60, 0.60);
      transition: transform 0.2s;
    }

    .formula_text {
      margin: 0px 0px 0px 0px;
      transform: scale(0.8, 0.8);
      transition: transform 0.2s;
      justify-content: flex-start;
    }
    

}

@media only screen and (max-width: 558px) {
    .row {
      height: 720px;
    }
  }
@media only screen and (max-width: 466px) {
    .row {
      height: 700px;
    }
  }
@media only screen and (max-width: 358px) {
  .row {
    height: 670px;
  }
}

@media only screen and (max-width: 345px) {
  .row {
    height: 650px;
  }
}
@media only screen and (max-width: 555px) {
  .expression {
      margin: 0px -65px 0px -65px;
      transform: scale(0.6, 0.6);
      transition: transform 0.2s;
      width: 160%;
      justify-content: center;
    }

     .expression_LCG {
      margin: -30px -335px 0px -335px;
      transform: scale(0.6, 0.6);
      transition: transform 0.2s;
      justify-content: center;
    }

    .expression_inline {
      transform: scale(0.6, 0.6);
      transition: transform 0.2s;
      margin-top: -20px;
    }
    .formula_text {
      margin: 0px 0px 0px -10px;
      transform: scale(0.7, 0.7);
      transition: transform 0.2s;
      justify-content: flex-start;
    }
}

@media only screen and (max-width: 530px) {

.expression {
      margin: -30px -535px 0px -535px;
      width: 300%;
      transform: scale(0.5, 0.5);
      transition: transform 0.2s;
      justify-content: center;
    }
  

     .expression_LCG {
      margin: -30px -535px 0px -535px;
      width: 300%;
      transform: scale(0.5, 0.5);
      transition: transform 0.2s;
      justify-content: center;
    }

    
}

@media only screen and (max-width: 470px) {
  table.figure_table {
    margin-left: -50px;
    width: 120%;
    transform: scale(0.70, 0.70);
    transition: transform 0.2s;
  }
}


@media only screen and (max-width: 430px) {
  .expression_inline {
      transform: scale(0.45, 0.45);
      transition: transform 0.2s;
    }

    .formula_text {
     transform: scale(0.6, 0.6);
      width: 190%;
      margin-left: -120px;
    }

    .expression {
      margin: -30px -535px 0px -535px;
      width: 300%;
      transform: scale(0.4, 0.4);
      transition: transform 0.2s;
      justify-content: center;
    }

    .expression_LCG {
      margin: -30px -535px 0px -535px;
      width: 300%;
      transform: scale(0.4, 0.4);
      transition: transform 0.2s;
      justify-content: center;
    }
}

// @media only screen and (max-width: 580px) {
//   #pre_table_header span {
//     display: none;
//   }
//   #pre_table_header:after {
//     content: "Pre"
//   }

//   #post_table_header span {
//     display: none;
//   }
//   #post_table_header:after {
//     content: "Post"
//   }

//   #pop_table_header span {
//     display: none;
//   }
//   #pop_table_header:after {
//     content: "Pop."
//   }

//   #v1_table_header span {
//     display: none;
//   }
//   #v1_table_header:after {
//     content: "V1"
//   }
// }

`

export default Article_4