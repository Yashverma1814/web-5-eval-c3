import React, { createContext } from "react";
import axios from 'axios'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = React.useState('');

  const handleLogin = (body) => {
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: body
    }).then(res => {
      setToken(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }
  const handleLogout = () =>{
    setToken('');
  }

  const value = {
    token,
    handleLogin,
    handleLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
