import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Jessica Sun'

Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/js.svg" />
        <title>about</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="jessica sun" key="title" />
      </Head>

      <header>
        <div>
          <div className={styles.name}>jessica sun</div>
          <div className={`${styles.work} ${styles.tabs}`}>work</div>
          <div className={`${styles.about} ${styles.tabs}`}>about</div>
          <a href="/public/Jessica_Sun.pdf">
            <div className={`${styles.resume} ${styles.tabs}`}>resume</div>
          </a>

        </div>
      </header>

      <main>

        {/* circles */}
        <div className={`${styles.circle} ${styles.redcircle}`}></div>
        <div className={`${styles.circle} ${styles.bluecircle}`}></div>
        <div className={`${styles.circle} ${styles.lightbluecircle}`}></div>

        {/* me */}
        <img src="/images/profile.svg" className={styles.profile}/>

        {/* intro */}
        <div className={styles.intro}>
          <div style={{marginBottom: "40px"}}> hi! i’m jessica.</div>
          <div style={{fontWeight: "normal", fontSize: "40px", lineHeight: "53px"}}>
            I’m passionate about building
            <span style={{color: "#FC3F42"}}> impactful products</span> and designing <span style={{color: "#2191FB"}}> engaging experiences.</span>
          </div>
        </div>


        {/*  WORK */}
        <div className={styles.titles}>where i've worked.</div>

        {/* barclays */}
        <div className={`${styles.rectangle} ${styles.barclaysRect}`}></div>
        <img src="/images/work/barclays.svg" className={styles.barclaysIcon}/>
        <div className={`${styles.captions} ${styles.barclays}`}>Barclays</div>

        {/* moderna */}
        <div className={`${styles.rectangle} ${styles.modernaRect}`}></div>
        <img src="/images/work/moderna.svg" className={styles.modernaIcon}/>
        <div className={`${styles.captions} ${styles.moderna}`}>Moderna Therapeutics</div>


        {/* mastercard */}
        <div className={`${styles.rectangle} ${styles.mastercardRect}`}></div>
        <img src="/images/work/mastercard.svg" className={styles.mastercardIcon}/>
        <div className={`${styles.captions} ${styles.mastercard}`}>Mastercard</div>


        {/* PROJECTS */}
        <div className={styles.titles} style={{top: "1321px"}}>what i've made.</div>


        {/* hackmit */}
        <img src="/images/projects/hackmit.svg" className={styles.hackRect}/>
        <div className={`${styles.captions} ${styles.hackmit}`}>HackMIT</div>


        {/* kelp */}
        <div className={`${styles.rectangle} ${styles.kelpRect}`}></div>
        <img src="/images/projects/kelp.svg" className={styles.kelpIcon}/>
        <div className={`${styles.captions} ${styles.kelp}`}>Kelp</div>


        {/* dash */}
        <div className={`${styles.rectangle} ${styles.dashRect}`}></div>
        <img src="/images/projects/dash.svg" className={styles.dashIcon}/>
        <div className={`${styles.captions} ${styles.dash}`}>Morning Dashboard</div>

        {/* heartsmart socks */}
        <div className={`${styles.rectangle} ${styles.heartRect}`}></div>
        <img src="/images/projects/heartsmart.svg" className={styles.heartIcon}/>
        <div className={`${styles.captions} ${styles.heart}`}>HeartSmart Socks</div>

        {/* smart alarm */}
        <div className={`${styles.rectangle} ${styles.alarmRect}`}></div>
        <img src="/images/projects/alarm.svg" className={styles.alarmIcon}/>
        <div className={`${styles.captions} ${styles.alarm}`}>Smart Alarm</div>

      </main>


        <footer className={styles.banner}>connect with me!
          <span style={{fontWeight: "normal", fontSize: "20px", lineHeight: "25px"}}> I’m always down to chat over a nice cup of tea.</span>
        </footer>

        <a href="mailto:jessjs@mit.edu">
          <img src="/images/socials/mail.svg" className={styles.socials} style={{left: "438px"}}/>
        </a>

        <a href="https://www.linkedin.com/in/jessicajsun/">
          <img src="/images/socials/linkedin.svg" className={styles.socials} style={{left: "569px"}}/>
        </a>

        <a href="https://www.instagram.com/jessjsun/">
          <img src="/images/socials/instagram.svg" className={styles.socials} style={{left: "700px"}}/>
        </a>

        <a href="https://www.facebook.com/jessjsun">
          <img src="/images/socials/facebook.svg" className={styles.socials} style={{left: "831px"}}/>
        </a>

        <a href="https://github.com/jessicajsun">
          <img src="/images/socials/github.svg" className={styles.socials} style={{left: "962px"}}/>
        </a>


      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
