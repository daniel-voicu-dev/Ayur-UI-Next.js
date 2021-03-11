import Head from 'next/head'
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
        <Container container="wide" cssClass="mt-4">
          <Paragraph image="/assets/img/banner-demo.jpg" cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" cssClass="font-subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
              <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
          <Paragraph cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" cssClass="font-subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
              <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
          
        </Container>
      </BaseLayout>
    </div>
  )
}
export default paragraph