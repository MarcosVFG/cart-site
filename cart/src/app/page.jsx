'use client';

import { useState } from 'react'
import styles from './page.module.css'
import fundo from '/public/bg-main-desktop.png'
import cartaoFrente from '/public/bg-card-front.png'
import cartaoTras from '/public/bg-card-back.png'
import Image from 'next/image'

export default function Home() {

    const [valor, setValor] = useState('');
    const handleChange = (event) => {
      setValor(event.target.value);
    };

    function addSpaceEvery4Chars(str) {
      return str.replace(/(.{4})/g, '$1   ');
    };

    const [valor2, setValor2] = useState('');
    const handleChange2 = (event) => {
      setValor2(event.target.value);
    };

    const [valor3, setValor3] = useState('');
    const handleChange3 = (event) => {
      setValor3(event.target.value);
    };

    const [valor4, setValor4] = useState('');
    const handleChange4 = (event) => {
      setValor4(event.target.value);
    };

    const [valor5, setValor5] = useState('');
    const handleChange5 = (event) => {
      setValor5(event.target.value);
    };


    const [showText, setShowText] = useState(false);
    const handleButtonClick = () => {
      setShowText(true)};

  return (
    <main className={styles.principal}>
      <div>
        <Image className={styles.fundoAzul} src={fundo}/>
        <div>
          <h1 className={styles.textin}>{showText && addSpaceEvery4Chars(valor) || '0000 0000 0000 0000'}</h1>
          <h2 className={styles.textin2}>{showText && valor2 || 'John Dell'}</h2>
          <h2 className={styles.textin3}>{showText && valor3 || '00'}</h2>
          <h2 className={styles.textin4}>/</h2>
          <h2 className={styles.textin5}>{showText && valor4 || '00'}</h2>
          <h2 className={styles.textin6}>{showText && valor5 || '000'}</h2>
          <Image className={styles.cartaoFrente} src={cartaoFrente}/>
          <Image className={styles.cartaoTras} src={cartaoTras}/>
        </div>
      </div>
      <div className={styles.formularioDiv}>
        <div className={styles.formulario}>

          <div className={styles.divForm}>
            <p>Nome no Cartão</p>
            <input type="text" id="valor" placeholder="John Dell" required="required" name="valor" value={valor2} onChange={handleChange2} />
           </div>

           <div className={styles.divForm}>
            <p>Numero do Cartão</p>
            <input type="number" id="numeroid" placeholder="1234 4567 8912 3456"  maxLength="1" required="required" name="numero" value={valor} onChange={handleChange} />
           </div>
          
           <div className={styles.dataPlusCvc}>
            <div className={styles.divForm}>
                <p>Validade (MM / AA)</p>
                <input type="number" id="dataid" placeholder="12" required="required" name="data" value={valor3} onChange={handleChange3} />
            </div>

            <input type="number" id="datatwoid" placeholder="25" required="required" name="dataTwo" value={valor4} onChange={handleChange4}/>

            <div className={styles.divForm}>
              <p>CVC</p>
              <input type="number" id="segurancaid" placeholder="123" required="required" name="seguranca" value={valor5} onChange={handleChange5} />
            </div>
           </div>
           <button onClick={handleButtonClick}>Confirmar</button>

        </div>
      </div>
    </main>
  )
};
