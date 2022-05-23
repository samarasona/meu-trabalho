import Link from 'next/link'
import Image from 'next/image'
import { Heart,  House, Laptop, Phone  } from 'phosphor-react'

import styles from '../styles/Menu.module.css'

export default function Menupg() {
  return (
    <>
      <div className={styles.cabecalho}>
        <Link href="/">
          <img src="/images/logo1.png" height={80} 
    width={250} 
  />
        </Link> 

        <Link href="/sobre" >
          <a className={styles.text}> Login</a>
        </Link>

        <Link href="/cadastrol" >
          <a className={styles.text}>Cadastro de livros</a>
        </Link>
        <Link href="/login" >
          <a className={styles.text}>Cadastrar autor</a>
        </Link>
       </div>
<div className={styles.barrasec}>
      
			</div>
      
   
    </>
  )
}
