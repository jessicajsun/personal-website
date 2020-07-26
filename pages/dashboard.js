import Head from 'next/head'
import styles from '../components/dashboard.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Dashboard(){

  return (
      <Layout>

        <Head>
          <title>morning dashboard</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          <div className={styles.summary}>

            <div className={styles.title}>morning dashboard.</div>

            <div className={styles.subtitle}>designing a go-to panel to start the day off right.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FFD507'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>spring '20</div>
              </div>

              {/* roles */}
              <div className={`${styles.note}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FFD507'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>ux design</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#FFD507'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>figma</div>
              </div>

            </div>

            {/* intro */}
            <div className={styles.description}>
            For most of us, the first thing we do after waking up is check our phone. We want to know whether we need an umbrella on our walk to work or if we can catch the next subway train. Looking up this information requires scrolling through multiple apps, consuming time that should be spent getting ready for the day.
            <p></p>
            When a friend of mine working in NYC approached me about designing a morning dashboard for his apartment, <span style={{fontWeight: '600'}}>I started by asking what the most important features for him and his roommates were. They included: </span>
            <p></p>
            </div>

            {/* features circles */}
            <div className={styles.features}>

              {/* who's home */}
              <div className={styles.circle} style={{background: '#4A82DB'}}>
                  <i className="fas fa-house-user fa-inverse"></i>
                  <div className={styles.sectionText}>who's home</div>
              </div>


              {/* daily weather */}
              <div className={styles.circle} style={{background: '#040E51'}}>
                  <i class="fas fa-cloud-sun fa-inverse"></i>
                  <div className={styles.sectionText}>daily weather</div>
              </div>

              {/* covid-19 cases */}
              <div className={styles.circle} style={{background: '#FF5A5D'}}>
                  <i class="fas fa-virus fa-inverse"></i>
                  <div className={styles.sectionText}>covid-19 cases</div>
              </div>

              {/* subway times */}
              <div className={styles.circle} style={{background: '#8AB9FF'}}>
                  <i class="fas fa-subway fa-inverse"></i>
                  <div className={styles.sectionText}>subway times</div>
              </div>

            </div>

            <div className={styles.description}>
              Since they were going to be looking at this dashboard everyday, I wanted to create a fun and cheerful aesthetic. <span style={{fontWeight: '600'}}>I used bright primary colors and rounded edges throughout the design, </span> hoping to convey the feeling of a light and pleasant morning in the city.
            </div>

            <div className={styles.photo}>
              <img src="/images/dash/page.png"/>
            </div>

            <div className = {styles.featureTitle}> features. </div>

            {/* who's home */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> who's home. </div>
                  <p></p>
                  <div className = {styles.featureDescription}> With six people living in one apartment, it can be difficult to meet up at the same time. By displaying how long ago each person’s phone was connected to the Wifi router, the other roommates can determine if someone is still at work or just out running an errand.
                  <p></p>
                  <span style={{fontWeight: '600'}}>Wanting to incorporate an aspect of city life, I designed an apartment building with a window for each person.</span> When someone is home, their window is open. When they’re away, their window is closed and displays how long it’s been since they were home.
                  </div>
                </div>
              <div className = {styles.featureImg}><img src="/images/dash/apartment.png"/></div>
            </div>

            {/* daily weather */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> daily weather. </div>
                  <p></p>
                  <div className = {styles.featureDescription}> It’s easy to forget a raincoat or scarf when running out the door. Weather data can be pulled from the DarkSky API, which combines info from multiple weather sources in an easy-to-use format.
                  <p></p>
                  <span style={{fontWeight: '600'}}>The weather section highlights the current temperature, daily high and low, and forecast summary from DarkSky.</span> I also created weather icons to match hourly conditions.
                  </div>
                </div>
              <div className = {styles.featureImg}><img src="/images/dash/weather.png"/></div>
            </div>

            <div className = {styles.logos}>
              <img src="/images/dash/logos.png"/>
              <div className={styles.captions}>Examples of weather icons.</div>
            </div>

            {/* covid-19 cases */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> covid-19 cases. </div>
                  <p></p>
                  <div className = {styles.featureDescription}>Since I designed this dashboard when coronavirus cases were beginning to rise in NYC, <span style={{fontWeight: '600'}}>I included a section to track the number of cases, deaths, and recovered Covid-19 patients in the city.</span> The chart not only shows counts from the NYC Department of Health, but also indicates how the number of cases change from one day to the next.
                  </div>
                </div>
              <div className = {styles.featureImg}><img src="/images/dash/covid.png"/></div>
            </div>

            {/* subway times */}
            <div className = {styles.featureText} style={{marginBottom: '15px'}}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> subway times. </div>
                  <p></p>
                  <div className = {styles.featureDescription}> The subway is an integral part of a New Yorker’s life, especially when used for the morning commute. A commuter usually considers two criteria when choosing a train: line and arrival time, respectively.
                  <p></p>
                  Therefore,<span style={{fontWeight: '600'}}> I grouped lines together and arranged the groups by station and direction. Arrival times for incoming trains are listed within each line group.</span> I focused on the three stations closest to the apartment; if the next train time isn’t within how long it takes to walk to the station, the following train is displayed instead.
                  </div>
                </div>
                <div className = {styles.featureImg}><img src="/images/dash/subway.png"/></div>
            </div>

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
