import {useState,useEffect} from 'react';
import styles from "./../styles/Banner.module.sass"
const Banner = ({children, cssClass, edit}) => {  
  let [config,setConfig] = useState(false)
  console.log({children});
  return(
    <article className={styles.component__demo}>
      <div className={styles.component__content__demo}>
        <div className={styles.component__decor__demo}>
          {children}
        </div>
      </div>
      <div className={styles.component__backdrop__demo}>        
        <img src="assets/img/banner-demo.jpg" className={styles.component__backdrop__image}/>
      </div>
    </article>
  )
}

export default Banner