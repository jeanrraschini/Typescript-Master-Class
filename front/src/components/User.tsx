import React from 'react'

interface IUser {
  name: string,
  email?: string
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => { 
  // O próprio React dispõe de tipagens já exportadas, uma delas é FC -> Function Components que podem receber any tipos de argumento
  // Inclusive Props, dessa forma damos acesso aos atributoscontidos na interface correspondente à prop, no caso 'name' e 'email'
  return (<div>
    <strong>Nome:</strong> {user.name} <br/>
    <strong>E-mail:</strong> {user.email || ' E-mail não cadastrado'} <br/><br/>
  </div>)
}

export default User