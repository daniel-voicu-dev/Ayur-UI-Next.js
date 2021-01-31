import Head from 'next/head'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayur UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}><h1 className="hr1">Welcome to Ayur UI</h1></main>
    </div>
  )
}
