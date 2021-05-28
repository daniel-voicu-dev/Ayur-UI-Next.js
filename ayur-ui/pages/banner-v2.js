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
        <Container container="narrow">
          <Heading style="hr1" weight="superbold" cssClass="w-100 my-3">The <span className='color-brand'>Banner</span></Heading>
        </Container>  
        <Container container="narrow">
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