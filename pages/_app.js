import WorkInProgress from '../components/work-in-progress'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <WorkInProgress />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
