import banner from "./banner.png"
import styles from "./PaginaInicial.module.scss"

import Cabecalho from "components/Cabecalho"
import Menu from "components/Menu"
import Rodape from "components/Rodape"
import Galeria from "components/Galeria"
import Populares from "components/Populares"

const PaginaIncial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa de fotos do espaço!</h1>
                        <img src={banner} alt="Imagem da Terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaIncial