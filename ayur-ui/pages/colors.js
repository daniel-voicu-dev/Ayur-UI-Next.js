import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import {useState,useEffect} from 'react'
import styles from "../styles/Colors.module.sass"

const colors = () => {  
  const [theme, settheme] = useState("muted");
  return (
    <>
      <Head>
          <title>Commergent UI | Colors</title>       
      </Head>
      <BaseLayout>
        <Container container="narrow">
          <Heading style="hr1" weight="superbold" cssClass="w-100 my-3">The Colors</Heading>
        </Container>  
        <Container container="narrow">
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Brand</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-brand)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-brand-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Accent</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-accent)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-accent-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Buy</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-buy)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-buy-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Success</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-success)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-success-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Warning</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-warning)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-warning-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Error</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-error)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-error-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Information</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-information)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-information-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Debug[DEV Only]</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <div class={styles.box} style={{'--color': 'var(--color-debug)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-hue-debug-900)'}}></div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Neutral</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">            
            <div class={styles.box + ' border'} style={{'--color': 'var(--color-light)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-100)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-200)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-300)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-400)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-500)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-600)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-700)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-800)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-gray-900)'}}></div>
            <div class={styles.box} style={{'--color': 'var(--color-dark)'}}></div>
          </div>
          
         
          
          
          
        </Container>
      </BaseLayout>
    </>
  )

}

export default colors