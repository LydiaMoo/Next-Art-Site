import styles from './ImageContent.module.css'

function ImageContent(props) {
  return (
    <div>
      Something
       <img className={styles.image} src={props.url} />  
    </div>
  )
}

export default ImageContent;

