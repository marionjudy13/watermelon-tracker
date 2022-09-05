import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/home.module.scss'
import { sanityClient } from '../lib/sanity'
import Table from '../components/table'

const watermelonQuery = `*[_type == "watermelon"] {
  count,
  purchased,
  purchaseLocation,
  origin,
  image,
  sweetScale,
  textureScale,
  rating
}`

export default function Home({ watermelons }) {
  return (
    <div className={styles.container}>
      <div className="polka-dot" />
      <Head>
        <title>Snatch from the Patch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/watermelon-icon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/hbl5gnh.css" />
      </Head>
      <div className="wrapper">
        <div className="header">
          <img src="/watermelon-metor.svg" alt="Watermelon Metor" />
          <h1>Snatch from the Patch</h1>
          <h2>On a Mission for the Best Melons</h2>
        </div>
        <Table watermelons={watermelons} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const watermelons = await sanityClient.fetch(watermelonQuery)
  return { props: { watermelons } }
}
