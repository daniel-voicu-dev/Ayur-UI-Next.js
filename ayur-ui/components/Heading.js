import {useState,useEffect} from 'react'
import styles from './../styles/Container.module.sass'
const Heading = ({style,cssClass,weight,font,children, edit}) => { 
  const [localText,setLocalText] = useState("");
  const [localStyle,setLocalStyle] = useState("h1"); 
  const [localFont, setLocalFont] = useState("heading");
  const [localWeight, setLocalWeight] = useState("bold");
  const [config,setConfig] = useState(false);
  const [localEdit,setLocalEdit] = useState(false);
  useEffect(() => {      
    setLocalStyle(style);  
    setLocalText(children);
    setLocalFont(font ?? "heading");
    setLocalWeight(weight ?? "bold");
    setLocalEdit(edit ?? false);
  }, [style, children, font, weight, edit]);
  return( 
    <div className="relative">      
      {localEdit ?        
        <div className={(cssClass ?? "")}>
          <input onKeyUp={e=>setLocalText(e.currentTarget.value)} className={styles.input + " " + localStyle + " font-" + localFont + " weight-" + localWeight} defaultValue={localText}/>
          <div className={styles.config__inline + " p-1 align-items-center child-mr-2 inline-flex"}>
            <select onChange={e=>setLocalStyle(e.currentTarget.value)} value={localStyle}>
              <option disabled>Select a heading style</option>
              <option value="hr1">Hero 1</option>
              <option value="hr2">Hero 2</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
            </select>
            <select onChange={e=>setLocalFont(e.currentTarget.value)} value={localFont}>
              <option disabled>Select a heading style</option>
              <option value="heading">Heading</option>
              <option value="subheading">Subheading</option>
              <option value="regular">Regular</option>
            </select>
            <select onChange={e=>setLocalWeight(e.currentTarget.value)} value={localWeight}>
              <option disabled>Select the heading weight</option>
              <option value="superthin">Superthin</option>
              <option value="thin">Thin</option>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="superbold">Superbold</option>
            </select>
            <div onClick={e=>setLocalEdit(!localEdit)} className={'ico icon-lg color-accent hover-success'}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z'/></svg></div>
          </div>
        </div>        
        :         
        <h2 className={localStyle + " font-" + localFont + " weight-" + localWeight+" " + (cssClass ?? "")}><span>{localText}</span><span onClick={e=>setLocalEdit(!localEdit)} className="ico mr-2 color-light hover-accent"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M292.6 407.78l-120-320a22 22 0 00-41.2 0l-120 320a22 22 0 0041.2 15.44l36.16-96.42a2 2 0 011.87-1.3h122.74a2 2 0 011.87 1.3l36.16 96.42a22 22 0 0041.2-15.44zm-185.84-129l43.37-115.65a2 2 0 013.74 0l43.37 115.67a2 2 0 01-1.87 2.7h-86.74a2 2 0 01-1.87-2.7zM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0040.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 01-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1044 .19v-143c0-56.18-45-102.56-101.23-102.97zM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 012 2.1C455 370.1 429.46 394.5 380 394.5z'/></svg></span></h2>
      }
      
    </div>   
  )
}

export default Heading