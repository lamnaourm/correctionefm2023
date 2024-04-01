import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function LogIn({setlog}) {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    const stags = useSelector(state => state.stgs)
    const navigate = useNavigate()

    const connecter = () => {
        const stg = stags.filter(e => e.nom == login && e.pass == pass)
        console.log('stg : ' + stg)
        if(stg.length > 0){
            navigate('/')
            setlog(true)
        }else {
            setlog(false)
        }
    }

  return (
    <div>
        Nom : <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/> <br />
        Password : <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/> <br />
        <input type="button" value="Se Connecter" onClick={connecter} />
    </div>
  )
}
