import styles from './valores.module.css'


export default function Valores({ ...escritos }) {

  return(
    <>
      <div className={styles.containerValores}>
        <div className={styles.middle}>
          <h2 className={styles.titleGrande}>{escritos.titulo}</h2>
        </div>
        <div className={styles.topLeft}>
          <h3 className={styles.titleValores}>{escritos.titulo1}</h3>
          <p className={styles.textValores}>{escritos.texto1}</p>
        </div>
        <div className={styles.topRight}>
          <h3 className={styles.titleValores}>{escritos.titulo2}</h3>
          <p className={styles.textValores}>{escritos.texto2}</p>
        </div>
        <div className={styles.bottomLeft}>
          <h3 className={styles.titleValores}>{escritos.titulo3}</h3>
          <p className={styles.textValores}>{escritos.texto3}</p>
        </div>
        <div className={styles.bottomRight}>
          <h3 className={styles.titleValores}>{escritos.titulo4}</h3>
          <p className={styles.textValores}>{escritos.texto4}</p>
        </div>
      </div>
    </>
  )
}