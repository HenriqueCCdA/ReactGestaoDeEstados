import styles from './TituloSemImagem.module.scss';


export default function TituloSemImagem({
    titulo,
    descricao
}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                {titulo}
            </h1>
            <h1 className={styles.descricao}>
                {descricao}
            </h1>
        </div>
    )
}
