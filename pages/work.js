import Head from 'next/head'
import styles from '../components/work.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'


export default function Work(){

  return (
      <Layout>

        <Head>
          <title>Work</title>
        </Head>

        <main>
          <div className={styles.centerScreen}>

              <section className={styles.topPanel}>


                  <div className={styles.items}>

                    {/*  WORK */}
                    <div className={styles.workTitle}>Where I've worked.</div>

                      <ul className={styles.list}>
                        <li className={styles.work}><a href="https://www.gather.town"><span className={styles.link}>Gather</span></a><span style={{color:"#797979"}}> - Building a delightful, all-in-one events platform.</span></li>
                        <li className={styles.work}>Barclays <span style={{color:"#797979"}}>- Migrated the production reporting pipeline for counterparty credit risk.</span></li>
                        <li className={styles.work}>Moderna <span style={{color:"#797979"}}>- Predicted adverse immune responses from novel drug sequences.</span></li>
                        <li className={styles.work}>Mastercard <span style={{color:"#797979"}}>- Streamlined internal HR business processes to reduce ticket workload.</span></li>
                      </ul>

                    {/* PROJECTS */}
                    <div className={styles.projectsTitle}>What I've made.</div>

                      <ul className={styles.list}>
                        <li className={styles.projects}>‍HackMIT <span style={{color:"#797979"}}>- Ran MIT’s largest undergraduate hackathon.</span></li>
                        <li className={styles.projects}>HeartSmart Socks <span style={{color:"#797979"}}>- Designed an app to prevent hospital readmission of heart failure patients.</span></li>
                        <li className={styles.projects}>Smart Alarm <span style={{color:"#797979"}}>- Used user movements and sounds to customize snooze length.</span></li>
                      </ul>

                  </div>

                {/* me */}
                <div className={styles.me}>
                  <img src="/images/about/hack18.jpg"/>
                </div>


            </section>

          </div>

        </main>

      </Layout>

  )
}
