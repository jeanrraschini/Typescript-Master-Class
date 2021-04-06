import React, { useState, useEffect } from 'react';
import { User } from './components'
import api from './services/api';

interface IUser {
  name: string,
  email: string
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]) // Usando o <> pode-se especificar previamente o tipo de variável que a variável de estado terá

  useEffect(() => {
    api.get<IUser[]>('/users').then(res => { 
      // Um dos parâmetros de tipagem de get é data que pode receber qualquer 'any' tipo,
      // através do <InterfaceXpto> especificamos o tipo que será atribuído ao método (no caso, get)
      setUsers(res.data)
    })
  },[])
  return (
    <div className="App">
      Users list
      { users.map(item => <User key={item.email} user={item}/>) }
    </div>
  );
}

export default App;
