import Head from 'next/head'
import Image from 'next/image'

import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Contatos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livro e café</title>
        <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="images/coffee-break.png" />
      </Head>
			<Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>
             
            <h1>Login</h1>
            <form>
  <label>Nome:</label>
   <input type="text" id="name" name="name" required />
  
      <div>
  <label>Senha:</label>
  <input type="text" id="name" name="name" required />
 </div>
       <div>
     <a href="https://wipsites.com.br"><button>Entrar</button></a>
       </div>
</form>
          
            
				</h1>
      </main>

      <footer className={styles.footer}>
		  <a href="https://replit.com/@SamaraFernandes" target="_blank">   © 2022 - SamaraFernandes.</a>
        
      </footer>
    </div>
  )
}
