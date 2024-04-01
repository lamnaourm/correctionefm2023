import React from 'react'
import { useSelector } from 'react-redux'
import Stagiaire from './Stagiaire'
import styles from './liststgs.module.css'

export default function ListStgs() {

    const stgs = useSelector(state => state.stgs)

  return (
    <div className={styles.list} >
        {stgs.map(s => 
        <Stagiaire image={s.image} nom={s.nom}/>
        )}
    </div>
  )
}
