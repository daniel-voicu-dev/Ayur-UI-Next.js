import {useState,useEffect} from 'react'

const Paragraph = ({children,image,cssClass}) => {
  const [localImage,setLocalImage] = useState(null);
  const [contentWidth, setContentWidth] = useState("3")
  const [imageWidth, setImageWidth] = useState("3")
  useEffect(() => {
     if(image) {
       setLocalImage(image);
     } else {
       setImageWidth("0");
       setContentWidth("6");
     }   
  }, []);
  
  return (
  <div className={"paragraph grid-6 gap-2"+` ${cssClass}`}>  
      { localImage !== null &&
        <div className={"paragraph__image flex-wrp align-items-center justify-content-center col-"+imageWidth}>
          <img src={localImage} alt="image" />
        </div>  
      }    
    <div className={"paragraph__content flex-wrap align-items-center justify-content-center col-"+contentWidth}>
      <div className="pargraph__decor">
        {children}
      </div>
    </div>
  </div>
  )

}

export default Paragraph