import '../styles/globals.css';
import snippet from '../scripts/globals.js';
import contactform from '../components/ContactForm.js';

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    {snippet()}
    {contactform()}
    </>)
}

export default MyApp