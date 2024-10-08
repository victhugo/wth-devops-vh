import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import Hours from '../components/Hours';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            Home
          </Link>
          <Link href="/new">
            Add Pet
          </Link>
        </div>

        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>
      </div>
      <h1>Adoption shelter</h1>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
      <Hours/>
    </>
  )
}

export default MyApp
