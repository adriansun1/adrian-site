import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
