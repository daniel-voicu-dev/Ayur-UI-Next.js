import {useState,useEffect} from 'react'
import Image from 'next/image'
const Paragraph = ({children,image,cssClass,contentWidth,contentPosition,mobileView ="md",...props}) => {
  const [localImage,setLocalImage] = useState(null);
  const [localContentWidth, setLocalContentWidth] = useState("3")
  const [localImageWidth, setLocalImageWidth] = useState("3")
  const [localContentPosition,setLocalContentPosition] = useState("1");
  
  useEffect(() => {
     if(image) {
       setLocalImage(image);
       setLocalImageWidth(6 - parseFloat(contentWidth) ?? "3")
       setLocalContentWidth(contentWidth ?? "3");
     } else {
       setLocalImageWidth("0")
       setLocalContentWidth(contentWidth ?? "6");
     }   
     setLocalContentPosition(contentPosition ?? "1");
  }, []);
  
  return (
  <div className={`paragraph grid-1 grid-${mobileView}-6 gap-2 gap-${mobileView}-3 ${cssClass}`}>  
      { localImage !== null &&
        <div className={"paragraph__image flex-wrp align-items-center justify-content-center order-0 col-"+localImageWidth}>
          <img
            src={localImage}
            data-src={localImage}
            width={1900}
            height={1080}            
          />
             
        </div>  
      }    
    <div className={`paragraph__content flex-wrap align-items-center justify-content-center col-${localContentWidth} order-1 order-${mobileView}-${localContentPosition}`}>
      <div className="pargraph__decor child-mb-2">
        {children}
      </div>
    </div>
  </div>
  )

}

export default Paragraph