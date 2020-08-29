import styles from './Coffee.module.scss';

export default function Coffee(props) {
  return (
  <a className={styles.image} href='https://ko-fi.com/lydiarebekah' 
    target='_blank'>
    <img  
    src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' 
    alt='Buy Me a Coffee at ko-fi.com' />
    </a>
  )};