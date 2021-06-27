import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import ContentCustom from '../components/Content'
import {useState,useEffect} from 'react'
import styles from "../styles/Styleguide.module.sass"

const styleguide = () => {  
  const [theme, settheme] = useState("muted");
  return (
    <>
      <Head>
          <title>Commergent UI | Style Guide</title>       
      </Head>
      <BaseLayout>
        <Container container="container">
          
        </Container>  
        <Container container="container">
          <Heading style="hr1" weight="superbold" cssClass="my-3">Style Guide</Heading>
          <Heading style="hr2" weight="superbold" cssClass="mt-5 color-brand">Theme Colors</Heading>
          <Heading style="h2" font="subheading" weight="normal" cssClass="">Main Colors</Heading>
          <div className="flex-wrap gap-3 justify-content-left mb-4">
          <div>
              <span>Brand</span>
              <div className="flex-wrap gap-2">            
                <div class={styles.color__big} style={{'--color': 'var(--color-brand)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-brand-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Accent</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-accent)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-accent-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Buy</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-buy)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-buy-900)'}}></div>
              </div>
            </div>
          </div>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mb-2">Notification Colors</Heading>
          <div className="flex-wrap gap-3 justify-content-left mb-4">            
            <div>
              <span>Success</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-success)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-success-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Warning</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-warning)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-warning-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Error</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-error)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-error-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Information</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-information)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-information-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Debug[DEV Only]</span>
              <div className="flex-wrap gap-2">
                <div class={styles.color__big} style={{'--color': 'var(--color-debug)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-hue-debug-900)'}}></div>
              </div>
            </div>
          </div>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mb-2">Neutral Colors</Heading>
          <div className="flex-wrap gap-2 justify-content-left mb-4">
            <div>              
              <div className="flex-wrap gap-2">            
                <div class={styles.color__big + ' border'} style={{'--color': 'var(--color-light)'}}></div>            
                <div class={styles.color__big} style={{'--color': 'var(--color-dark)'}}></div>
              </div>
            </div>
            <div>              
              <div className="flex-wrap gap-2">                 
                <div class={styles.color} style={{'--color': 'var(--color-gray-100)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-200)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-300)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-400)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-500)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-600)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-700)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-800)'}}></div>
                <div class={styles.color} style={{'--color': 'var(--color-gray-900)'}}></div>              
              </div>
            </div>
          </div>
          <Heading style="hr2" weight="superbold" cssClass="mt-5 color-muted">Typography</Heading>
          <div className="grid-1 grid-lg-2 gap-3">
            <div className="p-3 border inline-flex flex-direction-column">
              <Heading style="h4" font="subheading" weight="normal">Ancient Tales</Heading>
              <Heading style="h2" font="heading" weight="superbold" cssClass="mb-1">The Epic of Gilgamesh</Heading>            
              <ContentCustom>
                <p>He who has seen everything, I will make known (?) to the lands. <br/>
                I will teach (?) about him who experienced all things,<br/>
                ... alike,<br/>
                Anu granted him the totality of knowledge of all.<br/>
                He saw the Secret, discovered the Hidden,<br/>
                he brought information of (the time) before the Flood.<br/>
                He went on a distant journey, pushing himself to exhaustion,<br/>
                but then was brought to peace.<br/>
                He carved on a stone stela all of his toils,<br/>
                and built the wall of Uruk-Haven,<br/>
                the wall of the sacred Eanna Temple, the holy sanctuary.<br/>
                Look at its wall which gleams like copper(?),<br/>
                ...</p>
                <a href="#">Read more</a>
              </ContentCustom>
            </div>
            <div className="p-3 border inline-flex flex-direction-column">              
              <Heading style="h5" font="heading" weight="normal" cssClass="color-muted">Ancient Tales</Heading>
              <Heading style="h2" font="heading" weight="bold" cssClass="mb-1">The Epic of Gilgamesh</Heading>            
              
              <ContentCustom>
                <p>He who has seen everything, I will make known (?) to the lands. <br/>
                I will teach (?) about him who experienced all things,<br/>
                ... alike,<br/>
                Anu granted him the totality of knowledge of all.<br/>
                He saw the Secret, discovered the Hidden,<br/>
                he brought information of (the time) before the Flood.<br/>
                He went on a distant journey, pushing himself to exhaustion,<br/>
                but then was brought to peace.<br/>
                He carved on a stone stela all of his toils,<br/>
                and built the wall of Uruk-Haven,<br/>
                the wall of the sacred Eanna Temple, the holy sanctuary.<br/>
                Look at its wall which gleams like copper(?),<br/>
                ...</p>
                <a href="#">Read more</a>
              </ContentCustom>
            </div>
          </div>
          
          

          
          
          
          
         
          
          
          
        </Container>
      </BaseLayout>
    </>
  )

}

export default styleguide