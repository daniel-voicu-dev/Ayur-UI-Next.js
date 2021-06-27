import Link from 'next/link'
import styles from '../styles/ElementsDrawer.module.sass'
import {forwardRef} from 'react'
import Drawer from './Drawer'
const ElementsDrawer = (props,ref) => {
  return (
    <Drawer ref={ref}>
      <div className={styles.drawer__elements}>
        <h3 className={styles.heading}>Base</h3>
        <Link href="/colors">
          <a>Colors</a>
        </Link>        
        <Link href="/typography">
          <a>Typography</a>
        </Link> 
        <Link href="/layout">
            <a>Container & Grid</a>
          </Link>
        <h3 className={styles.heading}>Components</h3>          
          <Link href="/buttons">
            <a>Buttons</a>
          </Link>
          <Link href="/notifications">
            <a>Notifications</a>
          </Link>

        <h3 className={styles.heading}>Elements</h3>
        
        <Link href="/banner-v2">
          <a>Buttons</a>
        </Link>
        <Link href="/banner-v2">
          <a>Banner</a>
        </Link>
        <Link href="/paragraph">
          <a>Paragraph</a>
        </Link>
        <Link href="/slider">
          <a className={styles.disabled}>Slider</a>
        </Link>
        <Link href="/carousel">
          <a className={styles.disabled}>Carousel</a>
        </Link>
        <Link href="/modal">
          <a className={styles.disabled}>Modal</a>
        </Link>
        <Link href="/confirmdialog">
          <a className={styles.disabled}>Confirm Dialog</a>
        </Link>
        <Link href="/notification">
          <a className={styles.disabled}>Notification</a>
        </Link>
        {/* <h3 className={styles.heading}>Components</h3>
        <Link href="/product-list">
          <a className={styles.disabled}>Product List</a>
        </Link>
        <Link href="/cart">
          <a className={styles.disabled}>Cart</a>
        </Link> */}
      </div>
    </Drawer>  
  )
}

export default forwardRef(ElementsDrawer);