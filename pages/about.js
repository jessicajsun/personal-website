import Head from 'next/head'
import styles from '../components/about.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'


export default function About(){

  return (
      <Layout>

        <Head>
          <title>about</title>
        </Head>

        <main>

          <section className={styles.topPanel}>

            {/* about */}
            <div className={styles.about}>

              <div className={styles.titleAbout}>about me.</div>

              <div className={styles.blurb}> Hi, I’m Jessica. I’m originally from St. Louis
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

            </div>

          {/* me */}
          <div className={styles.me}>
            <img src="/images/athack.svg"/>
            <div className={styles.captions}>Caught mid-email in my favorite spot at HackMIT ‘18</div>
          </div>

        </section>


          {/* FAVORITES */}


        <section className={styles.favs}>

          {/* music */}

          <div className={styles.writtenFavs}>

            <div className={`${styles.titleFavorites}`}>current favorites.</div>

            <div className={styles.favorite}>
              <a href= "https://open.spotify.com/user/cellist777?si=XiXnREQ6TZu5palfc6jUxw">
                <div className={`${styles.circle} ${styles.bluecircle}`}>
                  <i className="fas fa-music fa-inverse fa-2x"></i>
                </div>
              </a>
              <div className={styles.favText}>“WESTWORLD” by EVAN GIIA and “Nebraska” by Oh Wonder</div>
            </div>

            {/* food */}
            <div className={styles.favorite}>
              <div className={`${styles.circle} ${styles.redcircle}`}>
                <i class="fas fa-utensils fa-inverse fa-2x"></i>
              </div>
              <div className={styles.favText}>Fish tacos, corn-on-the-cob, and key lime pie</div>
            </div>

            {/* book */}
            <div className={styles.favorite}>
              <div className={`${styles.circle} ${styles.lightbluecircle}`}>
                <i class="fas fa-book fa-inverse fa-2x"></i>
              </div>
              <div className={styles.favText}>Trick Mirror: Reflections on Self-Delusion by Jia Tolentino</div>
            </div>

          </div>

          {/* location */}
          <div className={styles.location}>
            <img src="/images/favorites/denali.svg" className={styles.locationpic}/>

            <div className={styles.locationText}>
              <div className={styles.smlightbluecircle}>
                <i class="fas fa-map-marker-alt fa-inverse fa-lg"></i>
              </div>
              <div className={styles.smCaption}>Denali National Park, Alaska</div>
            </div>
          </div>

        </section>

        </main>

      </Layout>

  )
}
