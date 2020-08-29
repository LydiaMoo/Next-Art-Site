import Head from 'next/head'
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.scss'
import ColouringImage from '../components/ColouringImage';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colouring Page</title>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.svg"/>
        <link rel="alternate icon" href="/favicon.ico"/>
        <link rel="mask-icon" href="/icons/logo.svg" color="#ffffff"/>
      </Head>
      <Header/> 
      <main className={styles.main}>
        <h1> Free Colouring Page</h1>
        <ColouringImage
        url = {'/images/the_harrow.png'}
        alt = {'Black Outline drawing of a 3 storey pub. Black gates arched gates with writing Harrow.'}
        info={'Former Pub, 643 Compton Street, Clerkenwell, London. '}
        />
      </main>

     <Footer/> 
    </div>
  )
}
