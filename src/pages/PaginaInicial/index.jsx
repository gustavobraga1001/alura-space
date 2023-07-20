import Cabecalho from "../../components/Cabecalho"
import Galeria from "../../components/Galeria"
import Menu from "../../components/Menu"
import Rodape from "../../components/Rodape"
import banner from "./banner.png"
import styles from "./PaginaInicial.module.scss"

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
            </main>
            <div>
                <Galeria />
            </div>
            <Rodape />
        </>
    )
}

export default PaginaIncial