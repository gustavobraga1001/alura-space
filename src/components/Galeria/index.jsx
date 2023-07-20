import React from 'react'
import Tags from '../Tags'
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'

const Galeria = () => {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards fotos={fotos} styles={styles}/>
    </section>
  )
}

export default Galeria