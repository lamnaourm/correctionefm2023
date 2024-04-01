import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Stagiaire from './Stagiaire'
import styles from './liststgs.module.css'
import { useNavigate } from 'react-router-dom'

export default function ListStgs({log}) {

    const stgs = useSelector(state => state.stgs)
    const navigate = useNavigate()

    return (
    <div className={styles.list} >
        {stgs.map(s => 
        <Stagiaire image={s.image} nom={s.nom}/>
        )}
    </div>
  )
}
