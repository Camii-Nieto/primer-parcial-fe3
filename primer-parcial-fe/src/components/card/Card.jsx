function Card({user}) {

    const fondo = {
        backgroundColor: '#'+user.color,
        padding: '1rem 5rem',
        borderRadius:'15px',
        marginTop:'.5rem'
       
      };


    return (
      <div style={fondo}>
        <h2>{user.nombre}</h2>
        <h4>Tu color favorito es: </h4>
        <h3>{user.color}</h3>
      </div>
    );
  }
  
  export default Card;