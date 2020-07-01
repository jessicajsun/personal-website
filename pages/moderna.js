import Head from 'next/head'
import styles from '../components/moderna.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Moderna(){

  return (
      <Layout>

        <Head>
          <title>moderna</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>moderna therapeutics.</div>

            <div className={styles.subtitle}>predicting adverse immune responses from novel drug sequences.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#2191FB'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>summer '19</div>
              </div>

              {/* roles */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#2191FB'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>ml, web dev, design</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#2191FB'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>python (pytorch and altair), html, css, angularjs</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
              Understanding a drug’s immunogenicity is critical to developing safe and effective therapeutics. The major histocompatibility complex (MHC) plays a crucial role in provoking an immune response by binding drug fragments for T cells to recognize.
              <p></p>
              <span style={{fontWeight: '600'}}>As a software engineering intern at Moderna, I built a machine learning model that predicts immunogenicity, a model that performed 400x faster than the current standard.</span> The neural network generated binding predictions between input sequences and MHC receptors, highlighting how mutations induced off-target effects.
              <p></p>
              <span style={{fontWeight: '600'}}>I also designed and built a companion web app that generates interactive visualizations of these predictions.</span> This web app is now used in multiple major drug pipelines at the company.
            </div>

          </div>

          {/* intern photo */}
          <div className={styles.photo}>
            <img src="/images/work/canoe.jpeg"/>
            <div className={styles.captions}>Canoeing in the Boston Harbor on a team outing</div>
          </div>

        </section>



        <SlowLink href="/">
          <div className={`${styles.button} ${styles.grow}`}>
            <i className="fas fa-arrow-left fa-lg" style={{color: '#FFFFFF'}}></i>
            <div className={styles.backToWork}>back to work</div>
          </div>
        </SlowLink>

        </main>

      </Layout>

  )
}
