import '../styles/globals.css';
import snippet from '../scripts/globals.js';
import ContactForm from '../components/ContactForm.js';

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    {snippet()}
    {ContactForm()}
    </>)
}

export default MyApp