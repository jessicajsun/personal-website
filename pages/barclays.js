import Head from 'next/head'
import styles from '../components/barclays.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default function Barclays(){

  return (
      <Layout>

        <Head>
          <title>barclays</title>
        </Head>

        <main>

        <section className={styles.topPanel}>

          <div className={styles.border}></div>

          <div className={styles.summary}>
            <div className={styles.title}>barclays.</div>
            <div className={styles.subtitle}>I’m working here this summer! Recap coming soon...</div>
          </div>

        </section>

        <Link href="/">
          <div className={`${styles.button} ${styles.grow}`}>
            <i className="fas fa-arrow-left fa-lg" style={{color: '#FFFFFF'}}></i>
            <div className={styles.backToHome}>back to home</div>
          </div>
        </Link>

        </main>

      </Layout>

  )
}
