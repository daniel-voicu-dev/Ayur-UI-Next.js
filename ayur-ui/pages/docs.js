import Head from 'next/head'
import BaseLayout from "../components/BaseLayout"

export const docs = () => {
  return (
    <div>
      <Head>
        <title>Commergent UI | Documentation</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <BaseLayout>
        <main>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
          <p className="font-xxl">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
          <p className="font-xl">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
          <p className="font-lg">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
          <p className="font-md">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
          <p className="font-sm">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
          <p className="font-xs">Maecenas eu pellentesque purus. Integer varius quam sit amet turpis vehicula hendrerit. Nunc sit amet risus nec turpis tincidunt malesuada non quis risus. In vel tempor leo.</p>
        </main>
      </BaseLayout>
      
    </div>
  )
}

export default docs;