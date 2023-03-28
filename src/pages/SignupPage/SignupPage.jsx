import React, { useState } from "react"
import './Signup.css'
import { Login } from '../../components/Login/Login'
import { Register } from "../../components/Register/Register"

export const SignupPage = () => {

  let [authMode, setAuthMode] = useState("login")

  const changeAuthMode = () => {
    setAuthMode(authMode === "register" ? "login" : "register")
  }

  return (
    <>
    {authMode === "register" && <Register changeAuthMode={changeAuthMode} />}
    {authMode === "login" && <Login changeAuthMode={changeAuthMode}/>}
    </>
  )
}