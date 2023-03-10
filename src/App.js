import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [carregando, setCarregando] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
      .then(resp => resp.json())
      .then(dados => {
        const simplificados = dados.results.map(user => {
          return {
            nome: `${user.name.title} ${user.name.first} ${user.name.last}`,
            email: user.email,
            foto: user.picture.medium
          }
        })
        setUsuarios(simplificados);
        setCarregando(false);
      })  
      .catch(erro => console.log(erro))
  }, [])
  

if (carregando)
  return (<h1>Carregando dados...</h1>)

  return (
    <div className="App">
      <Cadastro usuarios={usuarios} atualizaUsuarios={setUsuarios} />
      <Listagem usuarios={usuarios} />
    </div>
  );
}

export default App;
