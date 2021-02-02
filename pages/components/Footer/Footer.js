import Coffee from '../Coffee';
import DashIcon from '../DashIcon';
import styles from './Footer.module.scss';

export default function Footer(props) {
return(
  <footer className={styles.footer}>
<div className={styles.nav}>
    <a href="/">
      Home
    </a>
    <span className={styles.dash}> <DashIcon/> </span>
    <a href="/about">
      About
    </a>
    <span className={styles.dash}> <DashIcon/> </span>
    <a href="https://www.instagram.com/lydiarebekahart">
      Instagram
    </a>
    </div>
{/* <span className={styles.coffee}>
    <Coffee/> 
    </span> */}


  </footer>
)
}