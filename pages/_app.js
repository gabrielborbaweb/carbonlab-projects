import '../styles/globals.css';
import snippet from '../scripts/globals.js';

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    {snippet()}
    </>)
}

export default MyApp