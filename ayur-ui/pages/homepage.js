import Head from 'next/head'
import Container from '../components/Container'
import Quicksearch from "../components/Quicksearch";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import ContentCustom from "../components/Content";
import BaseLayout from "../components/BaseLayout";
const homepage = () => {
  return(
    <div>
      <Head>
        <title>Commergent UI | Banner</title>
      </Head>
      <header id="header" className="header__main bg-light">
        <Container cssClass="header__top bg-neutral-light">
          <nav className="child-mr-2 py-1 font-sm">
            <a href="#">Phone: 0700123321</a>
            <a href="#">Email: contact@mail.com</a>
          </nav>
        </Container>
        <Container cssClass="py-2" cssClassContent="header__middle">
          <div id="logo">
            <img width="200" height="80" src="/demo/img/logo-v2.svg" alt="Logoipsum Logo" />
          </div>
          <div id="quicksearch">
            <Quicksearch></Quicksearch>
          </div>
          <div className="header__actions">
            <nav className="flex-wrap align-items-center child-ml-2  justify-content-end w-100">
              <button type="button" className="btn-icon icon-xl hidden-md" aria-label="placeholder button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'/></svg></span></button>
              <button type="button" className="btn-icon icon-xl" aria-label="placeholder button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z'/></svg></span>
              </button>
              <button type="button" className="btn-icon icon-xl" aria-label="placeholder button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='176' cy='416' r='32'/><circle cx='400' cy='416' r='32'/><path d='M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z'/></svg></span>
              </button>
              <button type="button" className="btn-icon icon-xl hidden-md" aria-label="placeholder button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='48' d='M88 152h336M88 256h336M88 360h336'/></svg></span>
              </button>
            </nav>
          </div>
        </Container>
        <Container>
          <nav id="nav__main" className="font-lg py-2">
            <ul className="flex-wrap child-mr-4 justify-content-center">
              <li><a href="#">!New In</a></li>
              <li><a href="#">Home Decor</a></li>
              <li><a href="#">Living</a></li>
              <li><a href="#">Lighting</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Container container="narrow" cssClass="mt-4">
          <Paragraph image="/assets/img/paragraph-nature-portrait-demo.jpg" contentWidth="4" contentPosition="1" cssClass="mb-4" mobileView="lg">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
          <Paragraph image="/assets/img/paragraph-nature-portrait-demo.jpg" contentWidth="3" contentPosition="-1" cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
        </Container>
        <Container cssClass="mt-4">
          <Paragraph image="/assets/img/paragraph-nature-landscape-demo.jpg" contentWidth="2" contentPosition="-1" cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
          <Paragraph cssClass="mb-4">
            <Heading style="hr2" weight="superbold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Heading style="h2" font="subheading">Cras convallis hendrerit lectus, non malesuada neque malesuada et</Heading>
            <div className="text">
              <ContentCustom size="lg" weight="normal">
                <p>In convallis, enim non hendrerit blandit, augue nisi feugiat lacus, nec vulputate ligula augue vel magna. Mauris gravida id arcu eu maximus. In eleifend sem massa, vel gravida risus ullamcorper eget. Nullam lorem ipsum, dapibus at porta at, fringilla tristique sapien. Donec nec elit condimentum, eleifend leo vitae, ultrices lorem. Nullam bibendum, arcu quis posuere luctus, libero ligula molestie felis, vitae convallis velit mi eget neque. </p>
              </ContentCustom>
            </div>
            <button type="button" className="btn-fill--brand" aria-label="button">Read more</button>
          </Paragraph>
        </Container>
      </main>
    </div>
  )
}

export default homepage