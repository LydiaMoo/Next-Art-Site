import Head from 'next/head'
import Header from './components/Header'; 
import Footer from './components/Footer';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lydia Rebekah</title>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.svg"/>
        <link rel="alternate icon" href="/favicon.ico"/>
        <link rel="mask-icon" href="/icons/logo.svg" color="#ffffff"/>
      </Head>
      <Header/> 
      <main className={styles.main}>
        <h1>Welcome</h1>
        <p>Hello, you have made it to my little corner of the internet. There isn't much here at the moment as we're just getting started.</p>
        <a className={styles.preview} href='/colouring-page/1'>
          <img  src='/images/the_harrow.png'/>
          <p>Check out my first free colouring page here.</p>
        </a>
        <a className={styles.previewShop} href='https://www.etsy.com/uk/shop/LydiaRebekahArt'>
          <img  src='/images/etsy_logo.svg'/>
          <p>I made an Etsy shop, take a look here!</p>
        </a>
      </main>

     <Footer/> 
    </div>
  )
}
