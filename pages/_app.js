import '../styles/global.css'
import Router from "next/router";
import withGA from "next-ga";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA("UA-170720179-1", Router)(App);
