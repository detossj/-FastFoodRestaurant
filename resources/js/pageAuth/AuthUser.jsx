import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const token = JSON.parse(tokenString);
        return token;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token',JSON.stringify(token))
        sessionStorage.setItem('user',JSON.stringify(user))

        setUser(user)
        setToken(token)
    }

    const getLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }


  return {
    setToken:saveToken,
    token,
    user,
    getToken,getUser,getLogout
  }
}

export default AuthUser