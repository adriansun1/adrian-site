import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
    <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
