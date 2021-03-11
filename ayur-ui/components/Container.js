import {useState,useEffect} from 'react';
import styles from "./../styles/Container.module.sass"
const Container = ({children, container, cssClass}) => {
  let [localContainer, setLocalContainer] = useState("container");
  let [config,setConfig] = useState(false)
  useEffect(() => {
    if(container!==undefined) {      
        setLocalContainer(container);
    }
  }, [])  
  return(
    <section className={`section__container ${cssClass} ${localContainer === "container" ? "container" : `container--${localContainer}`}`}>      
      <div className="section__content relative">
        <span onClick={e=>setConfig(!config)} className={"ico"}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='26'/><circle cx='346' cy='256' r='26'/><circle cx='166' cy='256' r='26'/><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 368L32 256l128-112M352 368l128-112-128-112'/></svg></span>
        <div className={styles.config + " border p-1 align-items-center child-mr-2 " + (config ? "inline-flex" : "hidden")}>
          <select onChange={e=>setLocalContainer(e.currentTarget.value)} value={localContainer}>
            <option disabled>Select the container size</option>
            <option value="narrow">Narrow Size</option>
            <option value="container">Default Size</option>
            <option value="wide">Full Size</option>
          </select>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Container