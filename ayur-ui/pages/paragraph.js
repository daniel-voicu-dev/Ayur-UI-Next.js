import Head from 'next/head'
import Link from "next/link";
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from "../components/Paragraph"
import BaseLayout from './../components/BaseLayout'
import styles from "../styles/Paragraph.module.sass"
import ContentCustom from '../components/Content'
const paragraph = () => {
  return(
    <div>
       <Head>
        <title>Commergent UI | Paragraph</title>       
      </Head>
      <BaseLayout>
        <Container container="narrow" cssClass="font-lg">
          <Heading style="hr1" weight="superbold" cssClass="w-100 mb-3">The Paragraph</Heading>                 
        </Container>
        <Container container="narrow" cssClass="mt-4">
          <Paragraph image="/assets/img/paragraph-nature-portrait-demo.jpg" contentWidth="4" contentPosition="1" cssClass="mb-4" mobileView="lg">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
              <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button" icon-position="left"><span className="icon"><span className="ico"><svg
              xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Add</title><path
              fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'
              d='M256 112v288M400 256H112'/></svg></span></span><span>Read more</span></button>
          </Paragraph>
          <Paragraph image="/assets/img/paragraph-nature-portrait-demo.jpg" contentWidth="3" contentPosition="-1" cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <div className="flex-wrap child-mr-2">
              <button type="button" className="btn-border--accent" aria-label="button" icon-position="right"><span className="icon"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Arrow Forward</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></span><span>Read more</span></button>
              <button type="button" className="btn-icon--brand" aria-label="button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Arrow Forward</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></button>
              <button type="button" className="btn-icon--neutral" aria-label="button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Arrow Forward</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></button>
            </div>
            
          </Paragraph>
        </Container>
        <Container cssClass="mt-4">
          <Paragraph image="/assets/img/paragraph-nature-landscape-demo.jpg" contentWidth="2" contentPosition="-1" cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. <span className="color-buy hover-accent">Mauris</span> gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. <span className="color-muted">Nullam lorem</span> ipsum, <Link href="/">dapibus at porta at</Link>, fringilla tristique sapien. Donec <Link href="/"><a className="color-buy hover-accent">nec elit condimentum</a></Link>, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--neutral" aria-label="button" icon-position="right"><span className="icon"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Arrow Forward</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></span><span>Read more</span></button>
          </Paragraph>
          <Paragraph cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-border--neutral-light" aria-label="button">Read more</button>
          </Paragraph>
        </Container>  
      </BaseLayout>
    </div>
  )
}
export default paragraph