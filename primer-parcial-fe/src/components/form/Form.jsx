import React from 'react'
import styles from './Form.module.css'

const Form = ({setUser, handleSubmit}) => {

    const handleChange = (event) => {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
     })
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        
        <label htmlFor="nombre">Ingrse su nombre</label>
        <input className={styles.input} name='nombre' type="text" onChange={handleChange}/>
        <label htmlFor="color">Ingrse su color favorito (formato HEX)</label>
        <input className={styles.input} name='color' type="text" onChange={handleChange}/>
        <button className={styles.boton}>Enviar</button>
    </form>
  )
}

export default Form