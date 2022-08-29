import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {Link,Navigate} from 'react-router-dom'

export const Login = () => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const {token,handleLogin} = useContext(AuthContext);

    if(token){
        return <Navigate to={'/'} />
    }

  return (
    <div>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <Link to={'/'}>
            <button onClick={()=>handleLogin({email,password})}>Login</button>
        </Link>
    </div>
  )
}
