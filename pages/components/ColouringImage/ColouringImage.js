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
              <a>
                Transparent Background
              </a>
              <a>
                White Background
              </a>
        </div>
     
      </div>
      </>

)};