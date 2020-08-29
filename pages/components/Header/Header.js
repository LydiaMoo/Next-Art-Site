import styles from './Header.module.scss'
import LogoIcon from '../LogoIcon';
import HomeLogo from '../HomeLogo';
import AboutLogo from '../AboutLogo';
import InstagramLogo from '../InstagramLogo';

function Header(props) {
  return (
    <div className={styles.headerNav}>
    <header className={styles.header}>
      <span className={styles.logo}> 
          <LogoIcon fill='white'/> 
      </span>
      <h1 className={styles.title}> 
        Lydia Rebekah
      </h1>
    </header>
    <nav className={styles.navIcons}>
      <a href='/'> <HomeLogo fill="white"/> </a>
      <a href='/about'><AboutLogo fill="white"/> </a>
      <a href='https://www.instagram.com/lydiarebekahart'><InstagramLogo fill="white"/></a>
    </nav>
    </div>
  )
}

export default Header;