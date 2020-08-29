import Head from 'next/head'
import Header from './components/Header'; 
import Footer from './components/Footer';
import styles from '../styles/Home.module.scss'


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
        <h1>About Me</h1>
        <p> 
          Hello, my name is Lydia and I am an architectural design graduate. I am currently working full-time as a software engineer.

          I love exploring and drawing London's beautiful architecture and sharing it with the world.
        </p>
      </main>

     <Footer/> 
    </div>
  )
}
