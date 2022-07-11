import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav">
        <div>
          <Link href="/">Watermelone Home</Link>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
