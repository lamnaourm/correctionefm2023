import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function DetailsStgs() {

    const navigate = useNavigate()

    const {nom} = useParams();
    const s = useSelector(state => state.stgs.find(s => s.nom === nom))

  return (
    <div>
        <img src={s.image} alt="" srcset="" />
        <h2>{s.nom}</h2>
        <h2>{s.prenom}</h2>
        <h2>{s.filiere}</h2>
    </div>
  )
}
