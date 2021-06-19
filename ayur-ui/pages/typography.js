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
        <Container container="narrow" cssClass="my-5" >
          <div className='p-5 p-lg-5 box-shadow'>
            <Heading style="h4" font='subheading' cssClass="weight-normal color-muted mb-1 line-height-1">Ancient Stories</Heading>
            <Heading style="hr2" weight="superbold" cssClass="mb-4">The Epic of Gilgamesh</Heading>
            <Heading style="h3" cssClass="mb-2">Tablet I</Heading>
            <ContentCustom>            
              <p>He who has seen everything, I will make known (?) to the lands. <br/>
              I will teach (?) about him who experienced all things,<br/>
              ... alike,<br/>
              Anu granted him the totality of knowledge of all.<br/>
              He saw the Secret, discovered the Hidden,<br/>
              he brought information of (the time) before the Flood.<br/>
              He went on a distant journey, pushing himself to exhaustion,<br/>
              but then was brought to peace.<br/>
              He carved on a stone stela all of his toils,<br/>
              and built the wall of Uruk-Haven,<br/>
              the wall of the sacred Eanna Temple, the holy sanctuary.<br/>
              Look at its wall which gleams like copper(?),<br/>
              inspect its inner wall, the likes of which no one can equal!<br/>
              Take hold of the threshold stone--it dates from ancient times!<br/>
              Go close to the Eanna Temple, the residence of Ishtar,<br/>
              such as no later king or man ever equaled!<br/>
              Go up on the wall of Uruk and walk around,<br/>
              examine its foundation, inspect its brickwork thoroughly.<br/>
              Is not (even the core of) the brick structure made of kiln-fired brick,<br/>
              and did not the Seven Sages themselves lay out its plans?<br/>
              One league city, one league palm gardens, one league lowlands, the open area(?) of the Ishtar Temple,<br/>
              three leagues and the open area(?) of Uruk it (the wall) encloses.<br/>
              Find the copper tablet box,<br/>
              open the ... of its lock of bronze,<br/>
              undo the fastening of its secret opening.<br/>
              Take and read out from the lapis lazuli tablet<br/>
                how Gilgamesh went through every hardship.<br/>
              ...  
              </p>
            </ContentCustom>
          </div>
        </Container>
        <Container container="narrow">
          <Heading style="hr2" weight="superbold" cssClass="w-100 mb-3 mt-5">Headings</Heading>
          <Heading style="hr1" weight="normal" cssClass="w-100 my-3">.hr1 Headings</Heading>
          <Heading style="hr2" weight="normal" cssClass="w-100 my-3">.hr2 Headings</Heading>          
          <Heading style="h1" weight="normal" cssClass="w-100 my-3">.h1 Headings</Heading>
          <Heading style="h2" weight="normal" cssClass="w-100 my-3">.h2 Headings</Heading>
          <Heading style="h3" weight="normal" cssClass="w-100 my-3">.h3 Headings</Heading>
          <Heading style="h4" weight="normal" cssClass="w-100 my-3">.h4 Headings</Heading>
          <Heading style="h5" weight="normal" cssClass="w-100 my-3">.h5 Headings</Heading>
          <Heading style="h6" weight="normal" cssClass="w-100 my-3">.h6 Headings</Heading>
          <Heading style="hr2" weight="superbold" cssClass="w-100 mb-3 mt-5">Subheadings</Heading>
          <Heading style="h1" font='subheading' weight="normal" cssClass="w-100 my-3">.h1 Subheadings</Heading>
          <Heading style="h2" font='subheading' weight="normal" cssClass="w-100 my-3">.h2 Subheadings</Heading>
          <Heading style="h3" font='subheading' weight="normal" cssClass="w-100 my-3">.h3 Subheadings</Heading>
          <Heading style="h4" font='subheading' weight="normal" cssClass="w-100 my-3">.h4 Subheadings</Heading>
          <Heading style="h5" font='subheading' weight="normal" cssClass="w-100 my-3">.h5 Subheadings</Heading>
          <Heading style="h6" font='subheading' weight="normal" cssClass="w-100 my-3">.h6 Subheadings</Heading>
          <Heading style="hr2" weight="superbold" cssClass="w-100 mb-3 mt-5">Content</Heading>
          <ContentCustom cssClass="my-3" size="xxl">
            <p>.font-xxl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>

          <ContentCustom cssClass="my-3" size="xl">
            <p>.font-xl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          <ContentCustom cssClass="my-3" size="lg">
            <p>.font-lg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          <ContentCustom cssClass="my-3" size="md">
            <p>.font-md Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          <ContentCustom cssClass="my-3" size="sm">
            <p>.font-sm Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          <ContentCustom cssClass="my-3" size="xs">
            <p>.font-xs Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis non nisl in ultrices. Nullam mattis, arcu et ultrices volutpat, arcu ex viverra enim, ut venenatis nisl ligula eu leo. Ut sodales tortor sem, ac rhoncus leo ultricies eget. Duis varius, risus sit amet venenatis lobortis, odio lacus fermentum ipsum, vel elementum felis orci vitae ligula. Suspendisse suscipit nulla eu est aliquam porttitor. Fusce consectetur velit non enim elementum viverra. Duis vel mi vel felis malesuada porta. Maecenas eget commodo elit. Quisque venenatis nisi eget magna tristique molestie. Aliquam interdum mi fringilla mauris vestibulum, sed sagittis lorem malesuada. Aliquam in rutrum nisi. Fusce sollicitudin vestibulum tristique. Suspendisse eget quam felis.</p>
          </ContentCustom>
          <Heading style="hr2" weight="superbold" cssClass="w-100 mb-3 mt-5">Utilities</Heading>
          <ContentCustom cssClass="my-3" size="">
            <p><span className="text-underline">text-underline</span> <span className="text-line-through">text-line-through</span> <span className="text-uppercase">text-uppercase</span>  <span className="text-lowercase">TEXT-LOWERCASE</span>  <span className="link text-decoration-none">text-decoration-none</span> <span className="text-ellipsis">text-ellipsis...</span> <span>text-left</span> <span>text-center</span> <span>text-right</span><br/><span className="weight-superthin font-heading">weight-superthin</span> <span className="weight-thin font-heading">weight-thin</span> <span className="weight-normal font-heading">weight-normal</span> <span className="weight-bold font-heading">weight-bold</span> <span className="weight-superbold font-heading">weight-superbold</span> <br/>
            <span className="font-heading">font-heading</span> <span className="font-subheading">font-subheading</span> <span className="font-regular">font-regular</span> <br/>
            <span className="link">link</span> <span className="letter-spacing">letter-spacing</span> <span className="no-select">no-select</span> <span className="pointer">pointer</span> <span className="not-allowed">not-allowed</span><br/> 
            <small>small</small> <strong>strong</strong> <em>em</em>
            </p>
          </ContentCustom>
        </Container>
      </BaseLayout>
    </div>
  )
}

export default typography