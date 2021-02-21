import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
        <link rel="icon" href="/favicon.ico" />
        <title>jessica sun</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="jessica sun" key="title" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170720179-1"/>

        <script
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-170720179-1');
              `,
          }}
        />
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
