import Head from 'next/head'
import styles from '../components/mastercard.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Mastercard(){

  return (
      <Layout>

        <Head>
          <title>mastercard</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>mastercard.</div>

            <div className={styles.subtitle}>streamlining internal HR business processes to reduce ticket workload.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FC3F42'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>summer '18</div>
              </div>

              {/* roles */}
              <div className={`${styles.note}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FC3F42'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>web dev, design, user research, ERP integration</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FC3F42'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>python, html, css, node.js, workday</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
            Working in HR for a global corporation involves answering dozens of tickets a day, many of which ask similar questions. Some of these employee requests include wanting to know how many vacation days they have left, how to set up their 401k, and how to request maternal leave.
            <p></p>
            <span style={{fontWeight: '600'}}>As an HR technology intern at Mastercard, I built a chatbot to answer HR policy questions, signficantly reducing the HR ticket workload.</span> The chatbot responded to common employee questions, collected user feedback, and retrieved personal data. I conducted user research and quantitative analysis to inform the chatbot’s design and ensure a high-quality user experience. The chatbot was ultimately presented to the CPO and Executive VP of Operations.
            <p></p>
            Along with developing the chatbot, <span style={{fontWeight: '600'}}>I also automated case assignment for the HR Systems team and integrated acquisition company data into the Workday platform.</span>
            </div>

          </div>

          {/* intern photo */}
          <div className={styles.photo}>
            <img src="/images/work/gbsc.jpg"/>
            <div className={styles.captions}>Global Business Services Center (GBSC) interns on our last day together</div>
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
