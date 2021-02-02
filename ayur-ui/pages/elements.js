import Head from 'next/head'
import BaseLayout from "../components/BaseLayout"

export const docs = () => {
  return (
    <div>
      <Head>
        <title>Ayur UI : Elements</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <BaseLayout>        

        <main>
          <div className="section__container container">
            <div className="section__content">
              <h2>:Elements</h2>
              <article></article>
            </div>
          </div>
          
        </main>
        
      </BaseLayout>
      
    </div>
  )
}

export default docs;