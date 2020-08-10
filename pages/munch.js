import Head from 'next/head'
import styles from '../components/munch.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Barclays(){

  return (
      <Layout>

        <Head>
          <title>munch</title>
        </Head>

        <main>

        <section className={styles.topPanel}>

          <div className={styles.border}></div>

          <div className={styles.summary}>
            <div className={styles.title}>munch.</div>
            <div className={styles.subtitle}>I’m currently building a better restaurant recommendation platform for college diners with allergies! Recap coming soon...</div>
          </div>

        </section>

        <SlowLink href="/">
          <div className={`${styles.button} ${styles.grow}`}>
            <i className="fas fa-arrow-left fa-lg" style={{color: '#FFFFFF'}}></i>
            <div className={styles.backToHome}>back to home</div>
          </div>
        </SlowLink>

        </main>

      </Layout>

  )
}
