import { forwardRef,useImperativeHandle, useRef,useState } from "react"
import {animateCSS} from '../components/Utilities'
import styles from '../styles/Drawer.module.sass'
const Drawer = ({children},ref) => {  
  const elementRef = useRef();   
  const contentRef = useRef(null);
  const backdropRef = useRef(null);
  const handleClick = async () => {
    let node = elementRef.current;  
    await Promise.all([animateCSS(contentRef.current,'fadeOutRight'),animateCSS(backdropRef.current, 'fadeOut')]);
    node.classList.add("hidden"); 
  }
  useImperativeHandle(ref, () => ({
    // open: async () => {
    //   let node = elementRef.current;     
    //   node.classList.remove("hidden");    
    //   await animateCSS(node,'fadeInRight');  
    // },
    // close: async ()=>{
    //   let node = elementRef.current;        
    //   await animateCSS(node,'fadeOutRight');
    //   node.classList.add("hidden"); 
    // },
    switch: async ()=>{
      let node = elementRef.current;        
      if(node.classList.contains("hidden")) {
        node.classList.remove("hidden");    
        await Promise.all([animateCSS(contentRef.current,'fadeInRight'),animateCSS(backdropRef.current, 'fadeIn')]);
      } else {
        await Promise.all([animateCSS(contentRef.current,'fadeOutRight'),animateCSS(backdropRef.current, 'fadeOut')]);
        node.classList.add("hidden"); 
      }
      
    }    
  }));
  return (
  <div ref={elementRef} className="drawer hidden">
    <div ref={contentRef} className={styles.drawer__content}>{children}</div>
    <div ref={backdropRef} onClick={e=>handleClick(e)} className={styles.drawer__backdrop}></div>
  </div>
  )

}

export default forwardRef(Drawer)