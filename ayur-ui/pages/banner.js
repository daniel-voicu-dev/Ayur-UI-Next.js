import styles from "../styles/Banner.module.sass"
import {useRef,useState} from 'react'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Banner from "../components/Banner"
import ContentCustom from '../components/Content'
//import image from "../public/assets/img/banner-demo.jpg"

const bannerColor = () => (<div className={styles.component__backdrop__color}></div>)
const bannerImage = () => (<img className={styles.component__backdrop__image} src="assets/img/banner-demo.jpg" />)
const bannerVideo = () => (<><div className={styles.video__overlay}></div><video className={styles.component__backdrop__video} autoplay="" muted="" playsinline="" loop=""><source src="assets/img/banner-demo.mp4" type="video/mp4"></source></video></>)

const banner = () => {
  let [backdrop, setBackdrop] = useState("color")
  const contentRef = useRef(null);
  const handleClick = (s) => {   
    contentRef.current.style.removeProperty("justify-content");
    contentRef.current.style.setProperty("justify-content",s);
  }
  const handleAlignClick = (s) => {  
    contentRef.current.style.removeProperty("align-items");
    contentRef.current.style.setProperty("align-items",s);
  }
  

  return (
    <div>
      <Head>
        <title>Commergent UI | Banner</title>       
      </Head>
      <BaseLayout>
      <Container container="narrow" cssClass="font-lg">
          <Heading style="hr1" weight="superbold" cssClass="w-100 mb-3">The Banner</Heading>         
          <div className="mb-3">
            <p>The banner needs to have the following features:</p>
            <ul>
              <li>The backdrop needs to support color, image and video background</li>
              <li>The content needs to be aligned in any position currently supported by modern browsers</li>
            </ul>
          </div>          
          
          <Heading style="h2" font="subheading" weight="normal">1. HTML Markup</Heading>
          <pre className="p-2 border-top border-bottom mb-5"><code>
            &lt;div class="banner"&gt;<br/>
            &nbsp;&lt;div class="banner__content"&gt;<br/>
            &nbsp;&nbsp;&lt;div class="banner__decor"&gt;<br/>
            <span className="color-muted">&nbsp;&nbsp;&nbsp;[Content]<br/></span>
            &nbsp;&nbsp;&lt;/div&gt;<br/>
            &nbsp;&lt;/div&gt;<br/>
            &nbsp;&lt;div class="banner__backdrop"&gt;<br/>
            <span className="color-muted">&nbsp;&nbsp;[Image Element / Video Element]<br/>
            &nbsp;&nbsp;ex: &lt;img src="img.jpg" class="banner__backdrop__element" /&gt;<br/>
            &nbsp;&nbsp;ex: &lt;video autoplay muted playsinline loop class="banner__backdrop__element"&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4"&gt;&lt;/source&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/video&gt;<br/>
            </span>
            &nbsp;&lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
          </code></pre>
          <div className="demo-b-container my-5">
            <div className={styles.component}>
              <div ref={contentRef} className={styles.component__content}>
                <div className={styles.component__justify}>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleClick("flex-start")}>.justify-content-start</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleClick("center")}>.justify-content-center</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleClick("flex-end")}>.justify-content-end</button>
                </div>
                <div className={styles.component__align}>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleAlignClick("flex-start")}>.align-items-top</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleAlignClick("center")}>.align-items-center</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>handleAlignClick("flex-end")}>.align-items-bottom</button>
                </div>
                <div className={styles.component__backdrop__type}>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>setBackdrop("color")}>Color</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>setBackdrop("image")}>Image</button>
                  <button type="button" className="btn-fill--dark font-sm" onClick={e=>setBackdrop("video")}>Video</button>
                </div>
                <div className={styles.component__decor}><ContentCustom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae pretium massa. Sed et massa dictum, consequat magna sed, facilisis est. Proin pellentesque elementum velit. Sed ultrices consectetur tellus, eu tempor ante posuere a. Praesent ut porttitor mauris, eget tempor libero. Nunc egestas tortor fermentum purus blandit, ac elementum ligula mollis. Fusce ac feugiat neque. Cras tincidunt tincidunt ipsum vitae dignissim. Quisque fringilla at metus id iaculis.</ContentCustom></div>
              </div>
              <div className={styles.component__backdrop}>                
                {backdrop === "color" ? bannerColor() : backdrop === "image" ? bannerImage() : bannerVideo()}
              </div>
            </div>
          </div>
          <div className="pb-4"></div>
          <Heading style="h2" font="subheading" weight="normal" cssClass="mt-4">2. SASS</Heading>
          <div>
            <pre className="p-2 border-top border-bottom"><code>
            .banner<br/> 
            &nbsp;&nbsp;display: grid<br/>
            &nbsp;&nbsp;position: relative<br/>
            &nbsp;&nbsp;&__content<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;grid-area: 1/1/-1/-1<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;display: flex<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;flex-wrap: wrap<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;justify-content: center<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;align-items: center<br/>
            &nbsp;&nbsp;&__backdrop<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;overflow: hidden<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;grid-area: 1/1/-1/-1<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;z-index: -1<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;position: relative<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&__element<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: block<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 100%<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 100%<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object-fit: cover<br/>
            &nbsp;&nbsp;&__decor<br/> 
            <span className="color-muted">&nbsp;&nbsp;&nbsp;&nbsp; //optional for style only</span><br/>
            </code></pre>
          </div>         
        </Container>
      <div className="section__container container--narrow">
        <div className="section__content">
        <Heading style="h2" font="subheading" weight="normal" cssClass="mt-4 mb-2">3. Demo</Heading>       
        </div>
      </div>
      <div className="section__container">
        <div className="section__content">
          <div className={styles.component__demo}>
            <div className={styles.component__content__demo}>
              <div className={styles.component__decor__demo}>
                <Heading style="hr2" weight="superbold" cssClass="mb-2">Nam volutpat pellent ante non tristique</Heading>
                <ContentCustom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa dolor, auctor ut lacus quis, elementum efficitur est. Vestibulum a nulla gravida, pretium elit at, tristique nisl. Duis vestibulum sapien urna, sit amet blandit tortor convallis ut. Nullam quis blandit ipsum. Nam neque tortor, pharetra eu urna sit amet, tristique aliquet enim. Curabitur finibus ut erat auctor fermentum. Cras ex orci, scelerisque ut nisi et, sagittis egestas augue.</p></ContentCustom>
                <button type="button" className="btn-border--light mt-2">Find out more</button>
              </div>
            </div>
            <div className={styles.component__backdrop__demo}>
              <div className={styles.video__overlay}></div>
              <video autoPlay muted playsInline loop className={styles.banner__backdrop__element}>
                <source src="assets/img/banner-demo.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
      <Container container="container" cssClass="mt-4">
        <Banner>
          <Heading style="hr2" weight="superbold" cssClass="mb-2">Nam volutpat pellent ante non tristique</Heading>
          <ContentCustom><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa dolor, auctor ut lacus quis, elementum efficitur est. Vestibulum a nulla gravida, pretium elit at, tristique nisl. Duis vestibulum sapien urna, sit amet blandit tortor convallis ut. Nullam quis blandit ipsum. Nam neque tortor, pharetra eu urna sit amet, tristique aliquet enim. Curabitur finibus ut erat auctor fermentum. Cras ex orci, scelerisque ut nisi et, sagittis egestas augue.</p></ContentCustom>
          <button type="button" className="btn-border--light mt-2">Find out more</button>
        </Banner>
      </Container>  
      </BaseLayout>
    </div>
  )
}

export default banner