console.log("0 - app")

import '../styles/globals.css';
// import snippet from '../scripts/globals.js';

console.log("1 - app")

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    {/* {snippet()} */}
    </>)
}

console.log("2 - app")

export default MyApp

console.log("3 - app")