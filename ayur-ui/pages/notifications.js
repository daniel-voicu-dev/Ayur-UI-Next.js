import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import Heading from '../components/Heading'
import Container from '../components/Container'
import {useState,useEffect} from 'react'
import styles from "../styles/Notifications.module.sass"

const notifications = () => {  
  const [theme, settheme] = useState("muted");
  return (
    <>
      <Head>
          <title>Commergent UI | Notifications</title>       
      </Head>
      <BaseLayout>
        <Container container="narrow">
          <Heading style="hr1" weight="superbold" cssClass="w-100 my-3">Notifications</Heading>
        </Container>  
        <Container container="narrow">
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Pop-up</Heading>
          <div className="grid-1 grid-sm-2 gap-3 p-3 border dashed">
            <div className={styles.panel + ' notification--success'}>Payment successfull</div>
            <div className={styles.panel + ' notification--warning'}>Payment is pending...</div>
            <div className={styles.panel + ' notification--error'}>Payment error!</div>
            <div className={styles.panel + ' notification--information'}>Payment is being processed</div>
            <div className={styles.panel + ' notification--debug'}>[DEV] Payment API can not be reached</div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Pop-up::lighter</Heading>
          <div className="grid-1 grid-sm-2 gap-3 p-3 border dashed">
            <div className={styles.panel + ' notification--success lighter'}>Payment successfull</div>
            <div className={styles.panel + ' notification--warning lighter'}>Payment is pending...</div>
            <div className={styles.panel + ' notification--error lighter'}>Payment error!</div>
            <div className={styles.panel + ' notification--information lighter'}>Payment is being processed</div>
            <div className={styles.panel + ' notification--debug lighter'}>[DEV] Payment API can not be reached</div>
          </div>
          <Heading style="h3" weight="bold" cssClass="w-100 mt-3 mb-2">Confirm</Heading>
          <button type="button" className="btn-fill--muted">Confirm</button>
          
        </Container>
      </BaseLayout>
    </>
  )

}

export default notifications