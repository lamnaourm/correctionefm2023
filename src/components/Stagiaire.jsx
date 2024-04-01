import React from 'react'
import styles from './Stagiaire.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Stagiaire({image, nom}) {

  return (
    <div className={styles.stg}>
        <Link to={`/${nom}`}> 
            <img src={image} alt="" srcset="" />
        </Link>
        <h2>{nom}</h2>
    </div>
  )
}