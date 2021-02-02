import Head from 'next/head'
import Link from 'next/link'
import {useRef} from 'react'
import ElementsDrawer from '../components/ElementsDrawer'
import styles from '../styles/Home.module.sass'
import {animateCSS} from '../components/Utilities'
export default function Home() {
  const elementsDR = useRef(null);
  const handleElementsClick = async () => {   
    let node = elementsDR.current;      
    node.switch();     
  }
  return (
    <div>
      <Head>
        <title>Commergent UI</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div>
        <h1 className="hr1 w-100 text-center">Welcome to <span className="color-brand">Commergent UI</span></h1>
          <div className={styles.container__narrow}>            
            <p className="h1 weight-normal font-subheading mb-1">CSS Framework for Frontend Web Development</p>
            <p className="font-xl color-neutral">Functional CSS | Modern Scale-Based Typography | Easy to Use</p>
            <div className="flex-wrap align-items-center child-mr-2 justify-content-center">              
              <Link href="/docs">
                <a className="btn btn-fill--muted border-pill">Docs</a>
              </Link>     
              <button type="button" className="btn-fill--brand border-pill" onClick={e=>handleElementsClick(e)}>Elements</button>         
            </div>
            
          </div>
        </div>
        
      </main>
      <ElementsDrawer ref={elementsDR} />
    </div>
  )
}
