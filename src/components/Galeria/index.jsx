import React from 'react'
import Tags from '../Tags'
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import open from './open.png'
import favotirto from './favorito.png'

const Galeria = () => {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <ul className={styles.galeria__cards}>
          {fotos.map((foto) => {
            return (
              <li key={foto.id} className={styles.galeria__card}>
                <img 
                  className={styles.galeria__imagem}
                  src={foto.imagem} 
                  alt={foto.titulo} 
                />
                <p className={styles.galeria__descricao}>{foto.titulo}</p>
                <div>
                  <p>{foto.creditos}</p>
                  <span>
                    <img src={favotirto} alt="" />
                    <img src={open} alt="" />
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
    </section>
  )
}

export default Galeria