import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import ContentCustom from '../components/Content'
import {useState,useEffect,useRef} from 'react'
import styles from "../styles/Styleguide.module.sass"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import dynamic from "next/dynamic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../assets/index').then(mod=>mod.GNotificatioin),
  { ssr: false }
);

const styleguide = () => {  
  const [theme, settheme] = useState("muted");
  const notificationEl = useRef(null);
  const notify = () => toast.info('🦄 Wow so easy!');
  
  const PromiseNotification = () => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(
      resolveAfter3Sec,
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
    )
  }
  
  return (
    <>
      
      <Head>
          <title>Commergent UI | Style Guide</title>         
      </Head>
     
    
      <BaseLayout>
        <DynamicComponentWithNoSSR/>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
       
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
                <div className={styles.color__big} style={{'--color': 'var(--color-brand)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-brand-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Accent</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-accent)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-accent-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Buy</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-buy)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-buy-900)'}}></div>
              </div>
            </div>
          </div>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mb-2">Notification Colors</Heading>
          <div className="flex-wrap gap-3 justify-content-left mb-4">            
            <div>
              <span>Success</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-success)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-success-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Warning</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-warning)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-warning-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Error</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-error)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-error-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Information</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-information)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-information-900)'}}></div>
              </div>
            </div>
            <div>
              <span>Debug[DEV Only]</span>
              <div className="flex-wrap gap-2">
                <div className={styles.color__big} style={{'--color': 'var(--color-debug)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-hue-debug-900)'}}></div>
              </div>
            </div>
          </div>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mb-2">Neutral Colors</Heading>
          <div className="flex-wrap gap-2 justify-content-left mb-4">
            <div>              
              <div className="flex-wrap gap-2">            
                <div className={styles.color__big + ' border'} style={{'--color': 'var(--color-light)'}}></div>            
                <div className={styles.color__big} style={{'--color': 'var(--color-dark)'}}></div>
              </div>
            </div>
            <div>              
              <div className="flex-wrap gap-2">                 
                <div className={styles.color} style={{'--color': 'var(--color-gray-100)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-200)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-300)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-400)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-500)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-600)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-700)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-800)'}}></div>
                <div className={styles.color} style={{'--color': 'var(--color-gray-900)'}}></div>              
              </div>
            </div>
          </div>
          <Heading style="hr2" weight="superbold" cssClass="mt-5">Typography</Heading>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mt-5 mb-2">Hero Headings</Heading>
          <Heading style="hr1" weight="superbold" cssClass="color-neutral-light text-uppercase my-3">Montserrat</Heading>
          <Heading style="hr1" weight="superbold" cssClass="mb-2">The quick brown fox</Heading>
          <Heading style="hr2" weight="superbold" cssClass="mb-2">The quick brown fox</Heading>
          <Heading style="hr3" weight="superbold" cssClass="mb-2">The quick brown fox</Heading>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mt-5 mb-2">Content Headings</Heading>
          <Heading style="hr1" weight="superbold" cssClass="color-neutral-light text-uppercase my-3">Montserrat</Heading>
          <Heading style="h1" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h2" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h3" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h4" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h5" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h6" weight="bold" cssClass="mb-2">The quick brown fox jumps over the lazy</Heading>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mt-5 mb-2">Content</Heading>
          <Heading style="hr1" weight="superbold" cssClass="color-neutral-light text-uppercase my-3">Hind Madurai</Heading>
          <div className="flex-wrap gap-2 flex-direction-column">
            <ContentCustom cssClass="font-sm">
              <p>ALICE was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “ and what is the use of a book,” thought Alice, “ without pictures or conversations ?”</p>
            </ContentCustom>
            <ContentCustom cssClass="font-md">
              <p>ALICE was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “ and what is the use of a book,” thought Alice, “ without pictures or conversations ?”</p>
            </ContentCustom>
            <ContentCustom cssClass="font-lg">
              <p>ALICE was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “ and what is the use of a book,” thought Alice, “ without pictures or conversations ?”</p>
            </ContentCustom>
            <ContentCustom cssClass="font-xl">
              <p>ALICE was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “ and what is the use of a book,” thought Alice, “ without pictures or conversations ?”</p>
            </ContentCustom>
            <div className="col-2">
              <ContentCustom cssClass="font-xxl">
                <p>ALICE was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “ and what is the use of a book,” thought Alice, “ without pictures or conversations ?”</p>
              </ContentCustom>  
            </div>
            
          </div>
          <div className="grid-1 grid-lg-2 gap-3">
            <div className="p-3 border inline-flex child-basis-100 flex-direction-column">
              <Heading style="h4" font="subheading" weight="normal">Ancient Tales</Heading>
              <Heading style="h2" font="heading" weight="superbold" cssClass="mb-1">The Epic of Gilgamesh</Heading>            
              <ContentCustom>
                
                <p>He who has seen everything, I will make known (?) to the lands. <br/>
                I will teach (?) about <Tippy content={<span>Gilgamesh reigned c. 2900-2700 BC</span>}>
                    <span className="text-underline">him</span>
                  </Tippy> who experienced all things,<br/>
                ... alike,<br/>
                <span ref={notificationEl} className="text-underline pointer" onClick={e=>document.dispatchEvent(new CustomEvent("g-notification",{ detail:{node: notificationEl, type: "info", message: "Anu, Anum, or Ilu is the divine personification of the sky, supreme god, and ancestor of all the deities in ancient Mesopotamian religion"}}))}>Anu</span> granted him the totality of knowledge of all.<br/>
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
            <div className="p-3 border inline-flex child-basis-100 flex-direction-column">              
              <Heading style="h5" font="heading" weight="normal">Ancient Tales</Heading>
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
                <a href="#" className={'btn btn-fill--brand'}>Read more</a>
              </ContentCustom>
            </div>
            <div className="p-3 border inline-flex child-basis-100 flex-direction-column">
              <Heading style="h2" font="heading" weight="superbold">Ancient Tales</Heading>
              <Heading style="h3" font="subheading" weight="normal" cssClass="mb-1">The Epic of Gilgamesh</Heading>

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
                <a href="#" className={'btn btn-border--brand'}>Read more</a>
              </ContentCustom>
            </div>
            <div className="p-3 border inline-flex child-basis-100 flex-direction-column">
              <Heading style="h2" font="heading" weight="bold">Ancient Tales</Heading>
              <Heading style="h3" font="heading" weight="thin" cssClass="mb-1">The Epic of Gilgamesh</Heading>

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
                <a href="#" className={'btn btn-icon--brand'}><span className={'ico'}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></a>
              </ContentCustom>
            </div>
          </div>

          <Heading style="hr2" weight="superbold" cssClass="mt-5">UI Interactions</Heading>
          <div className={'flex-wrap gap-3'}>
            <Tippy content={<span>This is the tooltip</span>}>
              <button type={'button'} className={'btn-fill--brand'}>Tooltip</button>
            </Tippy>
            <button type={'button'} className={'btn-fill--brand'} onClick={notify}>Notification</button>
            <button type={'button'} className={'btn-fill--brand'} onClick={PromiseNotification}>Promise Notification</button>
          </div>

          
          
          
          
         
          
          
          
        </Container>
      </BaseLayout>
    </>
  )

}

export default styleguide