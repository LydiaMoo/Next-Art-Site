import styles from './ColouringImage.module.scss';
import InfoIcon from '../InfoIcon ';

export default function ColouringImage(props) {
  return (
    <>
    <div className={styles.colouringInfo}>

    <a href="/info" target="_blank"> <InfoIcon fill={'#6E6E6E'}/></a>
    </div> 
   
      <div className={styles.gridContainer}>
        <div className={styles.image}>
          <img src={props.url} alt={props.alt}/> 
        </div>
        <div className={styles.text}>
          {props.info}
        </div>
        <div className={styles.downloads}>
              <a href='/downloads/the_harrow/transparent_background.png'>
                <button>Transparent Background</button>
              </a>
              <a href='/downloads/the_harrow/white_background.png'>
                <button>White Background</button>
              </a>
        </div>
     
      </div>
      </>

)};