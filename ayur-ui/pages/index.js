import Head from 'next/head'
import Link from 'next/link'
import {useRef} from 'react'
import ElementsDrawer from '../components/ElementsDrawer'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.sass'
import {animateCSS} from '../components/Utilities'

// import dynamic from "next/dynamic";

// const lazysizes = dynamic(()=>{return import ('lazysizes').then(mod=>mod.)},{ssr:false})
// lazysizes.init()

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
        <Heading style="hr1" weight="superbold" cssClass="w-100 text-center">Welcome to <span className="color-brand">Commergent UI</span></Heading>          
          <div className={styles.container__narrow}>      
            <Heading style="h1" weight="normal" font="subheading" cssClass="mb-1">CSS Framework for Frontend Web Development</Heading>                 
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
