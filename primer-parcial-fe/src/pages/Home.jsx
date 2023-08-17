import React, {useState} from 'react'
import Form from '../components/form/Form'
import Card from '../components/card/Card'
import styles from './Home.module.css'



const Home = () => {
    const [user, setUser] = useState({
        nombre: '',
        color: ''
      })

      const [show, setShow] = useState(false)
      const [error, setError] = useState(false)
    
      const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.trim().length > 2 && user.color.length > 5){
          setShow(true)
          setError(false)
        } else {
          setError(true)
          setShow(false)
        }
      }


  return (
    <div className={styles.home}>
      <h1>Elige un color</h1>
      <Form className={styles.form} setUser={setUser} handleSubmit={handleSubmit}/>
      {error &&  <span className={styles.spanErr} >Por favor chequea que la información sea correcta</span>}
      {show && <Card user={user}/> }
    </div>
  )
}

export default Home