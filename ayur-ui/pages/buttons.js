import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import {useState,useEffect} from 'react'

const buttons = () => {  
  const [theme, settheme] = useState("muted");
  return (
    <>
      <Head>
          <title>Commergent UI | Buttons</title>       
      </Head>
      <BaseLayout>
        <Container container="narrow">
          <Heading style="hr1" weight="superbold" cssClass="w-100 my-3">The Buttons</Heading>
        </Container>  
        <Container container="narrow">
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Theming</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <button type="button" className="btn-fill--brand">Brand Button</button>
            <button type="button" className="btn-fill--accent">Accent Button</button>
            <button type="button" className="btn-fill--buy">Buy Button</button>  
            <button type="button" className="btn-fill--dark">Dark Button</button>
            <button type="button" className="btn-fill--muted">Muted Button</button>
            <button type="button" className="btn-fill--neutral">Neutral Button</button>
            <button type="button" className="btn-fill--neutral-light">Neutral Light Button</button>
            <button type="button" className="btn-fill--light">Light Button</button>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Theming::Border</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <button type="button" className="btn-border--brand">Brand Button</button>
            <button type="button" className="btn-border--accent">Accent Button</button>
            <button type="button" className="btn-border--buy">Buy Button</button>
            <button type="button" className="btn-border--dark">Dark Button</button>
            <button type="button" className="btn-border--muted">Muted Button</button>
            <button type="button" className="btn-border--neutral">Neutral Button</button>
            <button type="button" className="btn-border--neutral-light">Neutral Light Button</button>
            <button type="button" className="btn-border--light">Light Button</button>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Icons</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed">
            <button type="button" className="btn-icon--brand"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--accent"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--buy"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--dark"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--muted"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--neutral"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--neutral-light"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
            <button type="button" className="btn-icon--light"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z'/></svg></span></button>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Sizing</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed align-items-center">
            <button type="button" className="btn-fill--muted btn-xs">XSmall</button>
            <button type="button" className="btn-fill--muted btn-sm">Small</button>
            <button type="button" className="btn-fill--muted btn-md">Medium</button>
            <button type="button" className="btn-fill--muted btn-lg">Large</button>
            <button type="button" className="btn-fill--muted btn-xl">XLarge</button>
            <button type="button" className="btn-fill--muted btn-xxl">XXLarge</button>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Customization with utility classes</Heading>
          <div className="flex-wrap gap-2 mb-2 p-3 border dashed align-items-center">
            <button type="button" className="btn-border--dark bg-hover-brand hover-light">:Hover Background Brand</button>
            <button type="button" className="bg-brand color-light bg-hover-accent hover-light">Default + :Hover Customization</button>            
          </div>
        </Container>
      </BaseLayout>
    </>
  )

}

export default buttons