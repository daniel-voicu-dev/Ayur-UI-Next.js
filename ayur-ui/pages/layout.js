import styles from "../styles/Grid.module.sass"
import {useRef,useState} from 'react'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Banner from "../components/Banner"
import ContentCustom from '../components/Content'


const layout = () => {
  let [columns, setColumns] = useState(4);
  let [gap,setGap] = useState(3);
  let [container,setContainer] = useState('wide');
  let [col,setCol] = useState(4) 
  return (
    <div>
      <Head>
        <title>Commergent UI | Layout</title>
      </Head>
      <BaseLayout>
        <Container container="narrow" cssClass="my-3">
          <Heading style="hr1" weight="superbold" cssClass="w-100">The <span className='color-brand'>Layout</span></Heading>
        </Container>
        <Container container="narrow" cssClass="mt-5 mb-3">
          <Heading style="hr2" weight="superbold" cssClass="w-100">The Container</Heading>          
        </Container>
        
       
        <Container cssClass={'mb-3'} container="wide" cssClassContent={'flex-wrap align-items-center justify-content-center  ' + styles.container} style={'height: 10rem;'}>Container Wide</Container>
        <Container cssClass={'mb-3'} cssClassContent={'flex-wrap align-items-center justify-content-center  ' + styles.container} style={'height: 10rem;'}>Container</Container>
        <Container cssClass={'mb-3'} container="narrow" cssClassContent={'flex-wrap align-items-center justify-content-center  ' + styles.container} style={'height: 10rem;'}>Container Narrow/Text</Container>       
        <Container cssClass={'mt-2 mb-4'} container={container}>         
        <div className={'flex-wrap align-items-center justify-content-center ' + styles.container__demo}>  
          <select onChange={e=>setContainer(e.target.value)} defaultValue={container} className="bg-light">
            <option value='wide'>Wide</option>
            <option value='container'>Container</option>
            <option value='narrow'>Container Narrow/Text</option>
          </select>
        </div>  
        </Container>
        <Container container="narrow">
          <div className="html-code">
<pre><code className="language-html" data-lang="html">
{`<div class="section__container ${container !== "container" ? "container-"+container : container}">
    <div class="section__content">
        <!-- Content here -->  
    </div>  
</div>
`}</code></pre>
          </div>
        </Container>
        <Container container="narrow" cssClass="my-5">
          <Heading style="hr2" weight="superbold" cssClass="w-100 mb-3">The Grid</Heading>
          <ContentCustom size="xl" cssClass="my-3">
            <p>Future proofing with CSS Grid.</p>
            <p>Highly customizable.</p>
            <p>CSS Variable custom grid with no fixed amount of columns: --grid-cols: 4</p>
          </ContentCustom>
          <div className={'grid-1 grid-xs-2 grid-lg-4 gap-3 mb-3 ' + styles.card__container}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
          <Heading style="h2" weight="bold" cssClass="w-100 mb-2 color-accent mt-5">Demo</Heading>
          <div className={'mb-2 child-mr-2'}>
            <div className={'w-100'}><p>Grid container class: <strong>grid-1 grid-sm-2 grid-md-3 <span className={'color-accent'}>grid-lg-{columns} grid-xl-{columns} grid-xxl-{columns} gap-{gap}</span></strong></p></div>
            <select id="columns" className="color-accent" onChange={e=>setColumns(e.target.value)} defaultValue={columns}>
              <option value={1}>Grid Columns: 1</option>
              <option value={2}>Grid Columns: 2</option>
              <option value={3}>Grid Columns: 3</option>
              <option value={4}>Grid Columns: 4</option>
              <option value={5}>Grid Columns: 5</option>
              <option value={6}>Grid Columns: 6</option>
              <option value={7}>Grid Columns: 7</option>
              <option value={8}>Grid Columns: 8</option>
              <option value={9}>Grid Columns: 9</option>
              <option value={10}>Grid Columns: 10</option>
              <option value={11}>Grid Columns: 11</option>
              <option value={12}>Grid Columns: 12</option>
            </select>
            <select id="gap" className="color-accent" onChange={e=>setGap(e.target.value)} defaultValue={gap}>
              <option value={1}>Gap: 1</option>
              <option value={2}>Gap: 2</option>
              <option value={3}>Gap: 3</option>
              <option value={4}>Gap: 4</option>
              <option value={5}>Gap: 5</option>              
            </select>
          </div>
          <div className={`grid-1 grid-sm-2 grid-md-3 grid-lg-${columns} gap-${gap} mt-3 ` + styles.card__container}>
            <div className={styles.card__demo + " " + `col-1 col-md-3 col-lg-${col}`}>
              <div>.col-1 .col-md-3 .col-lg-<span className="color-accent">{col}</span></div>
              <div className="flex-wrap mt-1">                
                <select id="col" className="color-accent" onChange={e=>setCol(e.target.value)} defaultValue={4}>
                  <option value={1}>Span 1</option>
                  <option value={2}>Span 2</option>
                  <option value={3}>Span 3</option>
                  <option value={4}>Span 4</option>
                </select>  
              </div>
              
            </div>
            <div className={'col-md-2 col-lg-1 ' + styles.card}>.col-md-2 col-lg-1</div>
            <div className={'col-md-1 col-lg-1 ' + styles.card}>.col-md-1 col-lg-1</div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            {/*<div className={styles.card}></div>*/}
            {/*<div className={styles.card}></div>*/}
            {/*<div className={styles.card}></div>            */}
          </div>
          
        </Container>
      </BaseLayout>
    </div>
  )
}

export default layout