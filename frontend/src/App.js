//import React, { useState } from 'react';
import React from 'react';
import './global.css';
//import Header from './Header';
//JSX Javascript XML
//import Logon from './pages/Logon'; //o arquivo index é procurado automaticamente em qualquer diretório
import Routes from './routes';

function App() {
  //const [contador, setContador] = useState(0); //array [valor,funcaoAtualizacaoDesseValor]

  //function incrementa(){
   // setContador( contador + 1);
    //console.log(contador);
  //}

  return (
    <Routes />
   //<Header title='Semana OmniStack'/>
   //<div>
   //  <Header>Contador: {contador}</Header>
  //<button onClick={incrementa}>Incrementar</button>
  // </div>
  );
}

export default App;
