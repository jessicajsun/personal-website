import Document, { Html, Head, Main, NextScript } from 'next/document'

// https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://kit.fontawesome.com/9a2254ebc5.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
