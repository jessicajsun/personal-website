import Head from 'next/head'
import styles from '../components/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Home(){

  return (

    <Layout>


      <main>

        <div className={styles.centerScreen}>

            <section className={styles.topPanel}>

                {/* left */}
                <div className={styles.intro}>

                {/*bio*/}
                  <div className={styles.blurb}>
                    <span style={{fontWeight: "bold", fontSize: "24px"}}> Hi! I’m Jess.</span>
                      <p>
                      Passionate about building
                      <span style={{color: "#43B190"}}> impactful products</span> and designing <span style={{color: "#30BDD9"}}> engaging experiences.</span>
                      </p>

                      <p>
                      Currently product manager at Retool. Previously the first product manager at <a href="https://www.gather.town"><span className={styles.link} style={{color: "#43B190"}}>Gather</span></a>, where I lead the Events team.
                      Previously worked at <span style={{color: "#30BDD9"}}>Barclays</span>, <span style={{color: "#30BDD9"}}>Moderna</span>, and <span style={{color: "#30BDD9"}}>Mastercard</span>.
                      Studied computer science and molecular biology at MIT.
                      </p>

                      <p>
                      St. Louis native living in San Francisco. Big fan of black hoodies, reality TV, and modern art. Can usually find me running to alternative music or baking cakes.
                      </p>
                  </div>

                  {/*socials*/}
                  <section className={styles.socials}>
                    <div className={styles.socialIcon}>
                      <a href="mailto:sunjessica17@gmail.com">
                        <i className="far fa-envelope fa-2x"></i>
                      </a>
                    </div>

                    <div className={styles.socialIcon}>
                      <a href="https://www.linkedin.com/in/jessicajsun/">
                        <i className="fab fa-linkedin fa-2x"></i>
                      </a>
                    </div>

                    <div className={styles.socialIcon}>
                      <a href="https://twitter.com/sunjessica17">
                        <i className="fab fa-twitter fa-2x"></i>
                      </a>
                    </div>

                    <div className={styles.socialIcon}>
                      <a href="https://github.com/jessicajsun">
                        <i className="fab fa-github fa-2x"></i>
                      </a>
                    </div>
                  </section>

                </div>

                {/* right */}
                <div className={styles.grayRectangle}>
                  <div className={styles.circleContainer}>
                    <img src="/images/jan22.png"/>
                  </div>
                </div>

            </section>

        </div>

      </main>

      </Layout>

    )

}
