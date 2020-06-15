import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Jessica Sun'

export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/js.svg" />
        <title>jessica sun</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="jessica sun" key="title" />
      </Head>

      <header>
        <div>
          <Link href="/"><a><div className={styles.name}>jessica sun</div></a></Link>
          <Link href="/" style={{ textDecoration: 'none' }}><a><div className={`${styles.work} ${styles.tabs}`}>work</div></a></Link>
          <Link href="/about"><a><div className={`${styles.about} ${styles.tabs}`}>about</div></a></Link>
          <Link href="/Jessica_Sun.pdf">
            <a>
              <div className={`${styles.resume} ${styles.tabs}`}>resume</div>
            </a>
          </Link>

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
        <div className={`${styles.rectangle} ${styles.barclaysRect} ${styles.grow}`}>
          <img src="/images/work/barclays.svg" className={styles.barclaysIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.barclays}`}>Barclays</div>

        {/* moderna */}
        <div className={`${styles.rectangle} ${styles.modernaRect} ${styles.grow}`}>
            <img src="/images/work/moderna.svg" className={styles.modernaIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.moderna}`}>Moderna Therapeutics</div>


        {/* mastercard */}
        <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow}`}>
            <img src="/images/work/mastercard.svg" className={styles.mastercardIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.mastercard}`}>Mastercard</div>


        {/* PROJECTS */}
        <div className={styles.titles} style={{top: "1321px"}}>what i've made.</div>


        {/* hackmit */}
        <img src="/images/projects/hackmit.svg" className={`${styles.rectangle} ${styles.hackRect} ${styles.grow}`}/>
        <div className={`${styles.captions} ${styles.hackmit}`}>HackMIT</div>


        {/* kelp */}
        <div className={`${styles.rectangle} ${styles.kelpRect} ${styles.grow}`}>
          <img src="/images/projects/kelp.svg" className={styles.kelpIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.kelp}`}>Kelp</div>


        {/* dash */}
        <div className={`${styles.rectangle} ${styles.dashRect} ${styles.grow}`}>
          <img src="/images/projects/dash.svg" className={styles.dashIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.dash}`}>Morning Dashboard</div>

        {/* heartsmart socks */}
        <div className={`${styles.rectangle} ${styles.heartRect} ${styles.grow}`}>
          <img src="/images/projects/heartsmart.svg" className={styles.heartIcon}/>
        </div>
        <div className={`${styles.captions} ${styles.heart}`}>HeartSmart Socks</div>

        {/* smart alarm */}
        <div className={`${styles.rectangle} ${styles.alarmRect} ${styles.grow}`}>
            <img src="/images/projects/alarm.svg" className={styles.alarmIcon}/>
        </div>
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
          <img src="/images/socials/facebook.svg" className={styles.socials} style={{left: "831px"}} onMouseOver={styles.socials}/>
        </a>

        <a href="https://github.com/jessicajsun">
          <img src="/images/socials/github.svg" className={styles.socials} style={{left: "962px"}}/>
        </a>

    </div>
  )
}
