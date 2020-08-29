import Head from 'next/head'
import Header from './components/Header'; 
import Footer from './components/Footer';
import styles from '../styles/Home.module.scss'
import Copyright from './components/Copyright';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Lydia Rebekah</title>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.svg"/>
        <link rel="alternate icon" href="/favicon.ico"/>
        <link rel="mask-icon" href="/icons/logo.svg" color="#ffffff"/>
      </Head>
      <Header/> 
      <main className={styles.main}>

       <Copyright/>
      </main>

     <Footer/> 
    </div>
  )
}
