import styles from './page.module.css'
import fundo from '/public/bg-main-desktop.png'
import cartaoFrente from '/public/bg-card-front.png'
import cartaoTras from '/public/bg-card-back.png'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={styles.principal}>
      <div>
        <Image className={styles.fundoAzul} src={fundo}/>
        <div>
          <Image className={styles.cartaoFrente} src={cartaoFrente}/>
          <Image className={styles.cartaoTras} src={cartaoTras}/>
        </div>
      </div>

      <div className={styles.formularioDiv}>
        <form action="" className={styles.formulario}>

          <div className={styles.divForm}>
            <label for="nome">Nome no Cartão</label>
            <input type="text" id="nomeid" placeholder="John Dell" required="required" name="nome" />
           </div>

           <div className={styles.divForm}>
            <label for="numero">Numero do Cartão</label>
            <input type="number" id="numeroid" placeholder="1234 4567 8910 1112" required="required" name="numero" />
           </div>
          
           <div className={styles.dataPlusCvc}>
            <div className={styles.divForm}>
                <label for="data">Data de Validade</label>
                <input type="number" id="dataid" placeholder="12" required="required" name="data" />
                <input type="number" id="datatwoid" placeholder="25" required="required" name="dataTwo" />
            </div>

            <div className={styles.divForm}>
              <label for="seguranca">CVC</label>
              <input type="number" id="segurancaid" placeholder="123" required="required" name="seguranca" />
            </div>
           </div>
           <button type="submit">Confirmar</button>

        </form>
      </div>
    </main>
  )
}
