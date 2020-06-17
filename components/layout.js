import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Jessica Sun'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

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
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.barclaysRect} ${styles.grow}`}>
              {/*<img src="/images/work/barclays.svg" className={styles.barclaysIcon}/>*/}
            </div>
            <div className={`${styles.captions} ${styles.barclays}`}>Barclays</div>
          </div>

            {/* moderna */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.modernaRect} ${styles.grow}`}>
                {/*<img src="/images/work/moderna.svg" className={styles.modernaIcon}/>*/}
            </div>
            <div className={`${styles.captions} ${styles.moderna}`}>Moderna Therapeutics</div>
          </div>

            {/* mastercard */}
          <div className={styles.item}>
            <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow}`}>
              {/*<img src="/images/work/mastercard.svg" className={styles.mastercardIcon}/>*/}
            </div>
            <div className={`${styles.captions} ${styles.mastercard}`}>Mastercard</div>
          </div>
        </div>

      </section>

      </main>

      </div>
  )
}
}
