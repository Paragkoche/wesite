import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import axois from "axios";
function MyApp({ Component, pageProps }: AppProps) {
  // axois({
  //   url: 'https://ipinfo.io/json',
  //   method: 'GET',

  // }).then(r => {
  //   if (r.data.country === 'IN') {
  //     window.alert('this website is ban in ' + r.data.country)
  //     window.location.href = 'www.google.com'
  //   }
  // })
  return (<>
    <Nav />


    <Component {...pageProps} />

  </>)
}

export default MyApp
