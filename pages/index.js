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

                <div className={styles.intro}>

                {/*bio*/}
                  <div className={styles.blurb}>
                    <span style={{fontWeight: "bold", fontSize: "24px"}}> Hi! I’m Jess.</span>
                      <p>
                      Passionate about building
                      <span style={{color: "#3EA384"}}> impactful products</span> and designing <span style={{color: "#3EA384"}}> engaging experiences.</span>
                      </p>

                      <p>
                      Currently a product manager at <a href="https://www.retool.com"><span className={styles.link} style={{color: "#26B3CF"}}>Retool</span></a>, where I lead the IDE team. Previously the first product manager at <a href="https://www.gather.town"><span className={styles.link} style={{color: "#26B3CF"}}>Gather</span></a> and
                      engineer at <span style={{color: "#26B3CF"}}>Barclays</span>, <span style={{color: "#26B3CF"}}>Moderna</span>, and <span style={{color: "#26B3CF"}}>Mastercard</span>.
                      Studied computer science and molecular biology at <span style={{color: "#26B3CF"}}>MIT</span>.
                      </p>

                      <p>
                      St. Louis native living in San Francisco. Big fan of black hoodies, reality TV, and modern art. Can usually find me weightlifting, running, or baking.
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
