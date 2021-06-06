import styles from "../styles/Grid.module.sass"
import {useRef,useState} from 'react'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Banner from "../components/Banner"
import ContentCustom from '../components/Content'


const typography = () => {  
  return (
    <div>
      <Head>
        <title>Commergent UI | Typography</title>
      </Head>
      <BaseLayout>
        <Container container="narrow">
          <Heading style="hr1" weight="superbold" cssClass="w-100 my-3">The <span className='color-brand'>Typography</span></Heading>
        </Container>
        <Container container="narrow">     
          <Heading style="hr1" cssClass="w-100 my-3">.hr1 Headings</Heading>
          <Heading style="hr2" cssClass="w-100 my-3">.hr2 Headings</Heading>          
          <Heading style="h1" cssClass="w-100 my-3">.h1 Headings</Heading>
          <Heading style="h2" cssClass="w-100 my-3">.h2 Headings</Heading>
          <Heading style="h3" cssClass="w-100 my-3">.h3 Headings</Heading>
          <Heading style="h4" cssClass="w-100 my-3">.h4 Headings</Heading>
          <Heading style="h5" cssClass="w-100 my-3">.h5 Headings</Heading>
          <Heading style="h6" cssClass="w-100 my-3">.h6 Headings</Heading>          
          <Heading style="h1" font='subheading' cssClass="w-100 my-3">.h1 Subheadings</Heading>
          <Heading style="h2" font='subheading' cssClass="w-100 my-3">.h2 Subheadings</Heading>
          <Heading style="h3" font='subheading' cssClass="w-100 my-3">.h3 Subheadings</Heading>
          <Heading style="h4" font='subheading' cssClass="w-100 my-3">.h4 Subheadings</Heading>
          <Heading style="h5" font='subheading' cssClass="w-100 my-3">.h5 Subheadings</Heading>
          <Heading style="h6" font='subheading' cssClass="w-100 my-3">.h6 Subheadings</Heading>
          <ContentCustom>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          
        </Container>
      </BaseLayout>
    </div>
  )
}

export default typography