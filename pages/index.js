import Head from 'next/head'
import styles from '../components/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'


export default function Home(){

  return (
    <Layout>
      <main>

        <section className={styles.topPanel}>

            {/* left */}
            <div className={styles.intro}>
              <div className={styles.hi}> hi! i’m jessica.</div>
              <div className={styles.blurb}>
                I’m passionate about building
                <span style={{color: "#FC3F42"}}> impactful products</span> and designing <span style={{color: "#2191FB"}}> engaging experiences.</span>
              </div>
            </div>

            {/* right */}
            <div className={styles.circleContainer}>
              <img src="/images/Group 6.png"/>
            </div>

        </section>


        {/*  WORK */}
      <section className={styles.work}>

        <div className={styles.titles}>where i've worked.</div>

        <div className={styles.threeitemrow}>

          {/* barclays */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.barclaysRect} ${styles.grow} ${styles.cappedSize}`}>
              <img src="/images/work/barclays.jpg"/>
            </div>
            <div className={styles.captions}>Barclays</div>
          </div>

          {/* moderna */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.modernaRect} ${styles.grow} ${styles.cappedSize}`}>
                <img src="/images/work/moderna.png"/>
            </div>
            <div className={styles.captions}>Moderna Therapeutics</div>
          </div>

          {/* mastercard */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow} ${styles.cappedSize}`}>
              <img src="/images/work/mastercard.svg"/>
            </div>
            <div className={styles.captions}>Mastercard</div>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className={styles.projects}>

        <div className={styles.titles}>what i've made.</div>

        <div className={styles.threeitemrow}>

          {/* hackmit */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.hackRect} ${styles.grow}`}>
              <img src="/images/projects/hack.png"/>
            </div>
            <div className={styles.captions}>HackMIT</div>
          </div>

          {/* kelp */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.kelpRect} ${styles.grow} ${styles.cappedSize}`}>
              <img src="/images/projects/kelp.svg"/>
            </div>
            <div className={styles.captions}>Kelp</div>
          </div>

          {/* dashboard */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.dashRect} ${styles.grow}`}>
              <img src="/images/projects/dash.png"/>
            </div>
            <div className={styles.captions}>Morning Dashboard</div>
          </div>

        </div>

        <div className={styles.threeitemrow}>

          {/* heartsmart socks */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.heartRect} ${styles.grow}`}>
              <img src="/images/projects/heartsmart.png" className={styles.heartIcon}/>
            </div>
            <div className={styles.captions}>HeartSmart Socks</div>
          </div>

          {/* smart alarm */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.alarmRect} ${styles.grow}`}>
                <img src="/images/projects/alarm.png" className={styles.alarmIcon}/>
            </div>
            <div className={styles.captions}>Smart Alarm</div>
          </div>


        </div>

      </section>

      </main>

    </Layout>

    )

}
