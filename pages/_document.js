import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200&family=Roboto:wght@100;300&family=Source+Code+Pro:wght@200&family=Source+Sans+Pro:wght@200&family=Titillium+Web:wght@200&family=Work+Sans:wght@100;200&display=swap');
        </style>

        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
