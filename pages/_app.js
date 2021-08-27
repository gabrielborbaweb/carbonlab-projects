console.log("0 - app")

import '../styles/globals.css';

console.log("1 - app")

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

console.log("2 - app")

export default MyApp

console.log("3 - app")