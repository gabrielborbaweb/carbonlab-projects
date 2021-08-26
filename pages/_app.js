import '../styles/globals.css';
import snippet from '../scripts/globals.js';

window.onload = function() {
  snippet();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
