import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { initGA, logPageView } from '../utils/analytics'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={router.pathname === href ? styles.menuActive : styles.menuInactive}>
      {children}
    </a>
  )
}

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

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {

    let tabClassName = `${styles.tab} ${this.state.isMenuOpen ? "" : styles.navClosed}`;

    let menuButton = this.state.isMenuOpen ?
      <div className={styles.menu}>
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x" style={{color: '#33D3FF'}}></i>
          <i className="fa fa-bars fa-stack-1x fa-inverse"></i>
        </span>
      </div> :
      <div className={styles.menu}>
        <span className="fa-stack">
          <i className="fas fa-bars fa-stack-1x"></i>
        </span>
      </div>;

  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/9a2254ebc5.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <title>jessica sun</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="jessica sun" key="title" />
      </Head>


      {/* top bar */}

      <nav>

        <ul className={styles.navBar}>
          <li className={styles.name}><Link href="/"><a>jessica sun</a></Link></li>
          <div onClick={this.menuToggle}>
            {menuButton}
          </div>

          <ul className={`${styles.navItems} ${this.state.isMenuOpen ? `${styles.fadeIn} ${styles.shadow}` : ""}`}>
            <li className={tabClassName}><ActiveLink href="/"><div>work</div></ActiveLink></li>
            <li className={tabClassName}><ActiveLink href="/about"><div>about</div></ActiveLink></li>
            <li className={`${tabClassName}`}><ActiveLink href="/Jessica_Sun.pdf"><div>resume</div></ActiveLink></li>
          </ul>
        </ul>

      </nav>

      {this.props.children}

      <footer className={styles.banner}>

        <div className={styles.bottomBlurb}>
          <div className={styles.connect}>connect with me!</div>
          <div className={styles.chat}>I’m always down to chat over a nice cup of tea.</div>
        </div>

        <section className={styles.socials}>

          <div className={styles.socialIcon}>
            <a href="mailto:jessjs@mit.edu">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.linkedin.com/in/jessicajsun/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.instagram.com/jessjsun/">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://www.facebook.com/jessjsun">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </div>

          <div className={styles.socialIcon}>
            <a href="https://github.com/jessicajsun">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

        </section>



      </footer>





      </div>
  )
}
}
