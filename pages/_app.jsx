import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
