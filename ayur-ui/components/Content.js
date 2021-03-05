import {useState,useEffect} from 'react'
import styles from './../styles/Container.module.sass'
const ContentCustom = ({size,cssClass,weight,children}) => { 
  let [localSize,setLocalSize] = useState("default");   
  let [localWeight, setLocalWeight] = useState("normal");
  let [config,setConfig] = useState(false);
  useEffect(() => {      
    if(size) {
      setLocalSize(size);
    } 
    if(weight) {     
      setLocalWeight(weight)
    } 
    
  }, [])
  return( 
    <div className="relative">
      <div className={styles.config + " border p-1 align-items-center child-mr-2 " + (config ? "inline-flex" : "hidden")}>
        <select onChange={e=>setLocalSize(e.currentTarget.value)} value={localSize}>
          <option disabled>Select content size</option>
          <option value="default">Default</option>
          <option value="xs">XS</option>
          <option value="sm">SM</option>
          <option value="md">MD</option>
          <option value="lg">LG</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>          
        </select>        
        <select onChange={e=>setLocalWeight(e.currentTarget.value)} value={localWeight}>
          <option disabled>Select the heading weight</option>
          <option value="superthin">Superthin</option>
          <option value="thin">Thin</option>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="superbold">Superbold</option>
        </select>
      </div>
      <div className={"font-" + localSize + " weight-" + localWeight+" " + (cssClass ?? "")}>{children}<span onClick={e=>setConfig(!config)} className={styles.config__heading + " ico"}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M292.6 407.78l-120-320a22 22 0 00-41.2 0l-120 320a22 22 0 0041.2 15.44l36.16-96.42a2 2 0 011.87-1.3h122.74a2 2 0 011.87 1.3l36.16 96.42a22 22 0 0041.2-15.44zm-185.84-129l43.37-115.65a2 2 0 013.74 0l43.37 115.67a2 2 0 01-1.87 2.7h-86.74a2 2 0 01-1.87-2.7zM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0040.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 01-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1044 .19v-143c0-56.18-45-102.56-101.23-102.97zM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 012 2.1C455 370.1 429.46 394.5 380 394.5z'/></svg></span></div>
    </div>   
  )
}

export default ContentCustom