import Head from 'next/head'
import styles from '../components/barclays.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Barclays(){

  return (
      <Layout>

        <Head>
          <title>barclays</title>
        </Head>

        <main>

        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>barclays.</div>

            <div className={styles.subtitle}>migrating production reporting pipeline for counterparty credit risk.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>summer '20</div>
              </div>

              {/* roles */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>data engineering, big data analytics</div>
              </div>

              {/* tools */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>python, sql, hadoop, qlik</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
              Running risk reporting processes on big data servers costs millions every year. Migrating these processes to the cloud not only lowers operating costs, but also allows for more control on machine specifications, increased scalability of data queries, and the ability to isolate problems quickly without affecting the work of other teams.
              <p></p>
              <span style={{fontWeight: '600'}}>As a technology summer analyst at Barclays, I migrated the production reporting pipeline for counterparty credit risk from an on-premise Hadoop cluster to AWS, reducing operating costs by tens of millions of dollars.</span> Once the process was migrated, I performed efficiency testing to identify the best output file type by analyzing run time, file size, and memory usage.
              <p></p>
              <span style={{fontWeight: '600'}}>I also optimized and documented risk-weighted asset calculators used on $10B+ of assets.</span> I analyzed Qlik reports and code detailing calculation logic and reporting transforms to generate end-to-end data lineages for each report attribute.
            </div>

          </div>

        </section>

        <SlowLink href="/">
          <div className={`${styles.button} ${styles.grow}`}>
            <i className="fas fa-arrow-left fa-lg" style={{color: '#FFFFFF'}}></i>
            <div className={styles.backToWork}>back to home</div>
          </div>
        </SlowLink>

        </main>

      </Layout>

  )
}
