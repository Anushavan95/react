import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { FetchContext } from '../context/FetchContext'

export default function Login() {
const login = useContext(Auth)
const fetch = useContext(FetchContext)

console.log(fetch, 'fetchfetch')
  return (
    <div>
      my login
    </div>
  )
}
