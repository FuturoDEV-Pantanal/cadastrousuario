import { useRef } from 'react';
import './styles.css';

export default function Cadastro( { usuarios, atualizaUsuarios } ) {

  const inputNomeRef = useRef();
  const inputEmailRef = useRef();
  const inputFotoRef = useRef();

  function handleIncluirUsuario(e) {
    e.preventDefault();
    const nome = inputNomeRef.current.value;
    const email = inputEmailRef.current.value;
    const foto = inputFotoRef.current.value;
    const novo = {
      nome: nome,
      email: email,
      foto: foto
    };
    const atualizados = [...usuarios, novo];
    atualizaUsuarios(atualizados);
    inputNomeRef.current.value = '';
    inputEmailRef.current.value = '';
    inputFotoRef.current.value = '';
  }

  return (
    <div className='container-cadastro'>
      <div className='titulo-cadastro'>Cadastro</div>
        <form onSubmit={ handleIncluirUsuario }>
          <div className='grupo-campos'>
            <label htmlFor='nome-usuario'>Nome:</label>
            <input type='text' id='nome-usuario' ref={inputNomeRef} placeholder='Informe o nome do usuário' />
          </div>
          <div className='grupo-campos'>
            <label htmlFor='email-usuario'>E-mail:</label>
            <input type='email' id='email-usuario' ref={inputEmailRef} placeholder='Informe o email do usuário' />
          </div>
          <div className='grupo-campos'>
            <label htmlFor='foto-usuario'>URL Foto:</label>
            <input type='url' id='foto-usuario' ref={inputFotoRef} placeholder='Informe a URL da foto do usuário' />
          </div>
          <input type='submit' value='Incluir' className='btn-incluir' />
        </form>
    </div>
  )
}