import './styles.css';

export default function Listagem( { usuarios } ) {

  return (
    <div className='container-usuarios'>
        <span className='titulo-usuarios'>Usuários Cadastrados</span>
        <div className='container-listagem'>
          {
            usuarios.map(user => <Usuario key={user.nome} usuario={user} /> )
          }
        </div>
    </div>
  )
}

function Usuario( { usuario } ) {
  return(
    <div className='container-user'>
      <img src={usuario.foto} alt='foto do usuario' width={80} height={80} />
      <div className='dados-user'>
        <span>{usuario.nome} </span>
        <span>{usuario.email}</span>
      </div>
    </div>
  )
}