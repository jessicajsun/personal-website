import Head from 'next/head'
import styles from '../components/about.module.css'
import Link from 'next/link'

export const siteTitle = 'Jessica Sun'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/js.svg" />
        <title>about</title>

        <meta
          name="description"
          content="About"
        />
        <meta property="og:title" content="about" key="title" />
      </Head>

      <header>
        <div>
          <Link href="/"><a><div className={styles.name}>jessica sun</div></a></Link>
          <Link href="/"><a><div className={`${styles.work} ${styles.tabs}`}>work</div></a></Link>
          <Link href="/about"><a><div className={`${styles.about} ${styles.tabs}`}>about</div></a></Link>
          <Link href="/Jessica_Sun.pdf">
            <a>
              <div className={`${styles.resume} ${styles.tabs}`}>resume</div>
            </a>
          </Link>

        </div>
      </header>

      <main>

        {/* about */}
        <div className={`${styles.titles} ${styles.aboutme}`}>about me.</div>

        {/* me */}
        <div className={styles.aboutCaption}>Caught mid-email in my favorite spot at HackMIT ‘18</div>
        <img src="/images/athack.svg" className={styles.profile}/>

        {/* intro */}
        <div className={styles.aboutsection}> Hi, I’m Jessica. I’m originally from St. Louis
        (<span style={{color: "#FC3F42"}}>Go Cards!</span>),
        but am currently a rising senior at MIT studying computer science and molecular biology.
        <p></p>
        This summer, I’m working at <span style={{color: "#2191FB"}}>Barclays</span>, building XXX.
        I previously interned at<span style={{color: "#FC3F42"}}> Moderna Therapeutics </span>
        and<span style={{color: "#FC3F42"}}> Mastercard</span>,
        building software to predict adverse immune responses and streamline business processes.
        <p></p>
        Along with designing meaningful products, I’m the former co-director of <span style={{color: "#2191FB"}}>HackMIT</span>,
        the student group that organizes MIT’s largest undergraduate hackathon, and a fellow for
        <span style={{color: "#2191FB"}}> Pear VC</span>, a seed-stage venture capital firm.
        <p></p>
        Outside of work and school, I enjoy going on long runs, baking cakes, and discovering new alternative & indie bands.
        </div>


        {/* FAVORITES */}
        <div className={`${styles.titles} ${styles.favorites}`}>current favorites.</div>

        {/* music */}
        <a href= "https://open.spotify.com/user/cellist777?si=XiXnREQ6TZu5palfc6jUxw">
          <div className={`${styles.circle} ${styles.bluecircle}`}>
            <img src="/images/favorites/music-library.svg" className={styles.icon}/>
          </div>
        </a>
        <div className={`${styles.fav} ${styles.music}`}>“WESTWORLD” by EVAN GIIA and “Nebraska” by Oh Wonder</div>

        {/* food */}
        <div className={`${styles.circle} ${styles.redcircle}`}>
          <img src="/images/favorites/bread.svg" className={styles.icon}/>
        </div>
        <div className={`${styles.fav} ${styles.food}`}>Fish tacos, corn-on-the-cob, and key lime pie</div>

        {/* book */}
        <div className={`${styles.circle} ${styles.lightbluecircle}`}>
            <img src="/images/favorites/book.svg" className={styles.icon}/>
        </div>
        <div className={`${styles.fav} ${styles.book}`}>Trick Mirror: Reflections on Self-Delusion by Jia Tolentino</div>

        {/* location */}
        <div className={styles.smlightbluecircle}>
          <img src="/images/favorites/map-pin-location.svg" className={styles.locationicon}/>
        </div>
        <img src="/images/favorites/denali.svg" className={styles.locationpic}/>
        <div className={styles.locationCaption}>Denali National Park, Alaska</div>

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

    </div>
  )
}
