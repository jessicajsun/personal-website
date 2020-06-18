import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Jessica Sun'

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={isMenuOpen: false};

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }


  render() {

    let tabClassName = `${styles.tab} ${this.state.isMenuOpen ? "" : styles.navClosed}`;

    let menuButton = this.state.isMenuOpen ?
      <div>
        <span class="fa-stack">
          <i class="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
          <i class="fa fa-bars fa-stack-1x fa-inverse"></i>
        </span>
      </div> :
      <div>
        <span class="fa-stack">
          <i class="fas fa-bars fa-stack-1x"></i>
        </span>
      </div>;

  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/9a2254ebc5.js" crossorigin="anonymous"></script>
        <link rel="icon" href="/images/js.svg" />
        <title>home</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="jessica sun" key="title" />
      </Head>


      {/* top bar */}

      <nav>
        <div onClick={this.menuToggle} className={styles.menu}>
          {menuButton}
        </div>

        <ul className={styles.navBar}>
          <li className={styles.name}><Link href="/"><a>jessica sun</a></Link></li>

          <ul className={`${styles.navItems} ${this.state.isMenuOpen ? `${styles.fadeIn} ${styles.shadow}` : ""}`}>
            <li className={tabClassName}><Link href="/"><a><div className={styles.home}>work</div></a></Link></li>
            <li className={tabClassName}><Link href="/about"><a><div className={styles.about}>about</div></a></Link></li>
            <li className={`${tabClassName}`}><Link href="/Jessica_Sun.pdf"><a><div className={styles.resume}>resume</div></a></Link></li>
          </ul>
        </ul>

      </nav>


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
              <img src="/images/work/barclays.svg"/>
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
              <img src="/images/projects/dash.svg"/>
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

      <footer className={styles.banner}>

        <div className={styles.bottomBlurb}>
          <div className={styles.connect}>connect with me!</div>
          <div className={styles.chat}>I’m always down to chat over a nice cup of tea.</div>
        </div>

        <section className={styles.socials}>

          <div className={styles.socialIcon}>
            <a href="mailto:jessjs@mit.edu">
              <i class="far fa-envelope fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.linkedin.com/in/jessicajsun/">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.instagram.com/jessjsun/">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.facebook.com/jessjsun">
              <i class="fab fa-facebook-square fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://github.com/jessicajsun">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>

        </section>



      </footer>





      </div>
  )
}
}
