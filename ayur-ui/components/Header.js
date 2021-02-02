import Link from 'next/link'
import styles from "../styles/Header.module.sass"
import {useRouter} from 'next/router'

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)
const Header = () => {
  const router = useRouter()
  // const {asPath} = router.query;  
  const route = capitalize(router.pathname.substring(1));
  // console.log(asPath.substring(1));
  return (
    <div>
      <header id="header" className="sticky l-0 r-0 t-0 w-100 flex-wrap  py-1 border-bottom border-neutral-light bg-light">
        <div className="section__container container">
          <div className="section__content">
          <div className="flex-wrap align-items-center child-mr-2">
            <div id="logo" className={styles.logo}>
              <Link href="/">
                <a className="text-decoration-none flex-wrap align-items-center">
                <div className="ico color-neutral hover-brand">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='none' stroke='currentColor' strokeLinecap='square' strokeMiterlimit='10' strokeWidth='48' d='M244 400L100 256l144-144M120 256h292'/></svg>
                </div>         
                </a>
              </Link>  
            </div>
            <div className="font-xl">:{route}</div>
          </div>
          
          </div>
        </div>
        
      </header>      
    </div>
  )
}

export default Header