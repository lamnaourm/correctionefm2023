import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStag } from '../redux/StgSlice'
import { useNavigate } from 'react-router-dom'

export default function AddStgs({log}) {
    const [image, setImage] = useState()
    const [nom, setNom] = useState()
    const [prenom, setPrenom] = useState()
    const [filiere, setFiliere] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
    <div>
        <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} /> <br/>
        <input type="text" name="nom" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} /> <br/>
        <input type="text" name="prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} /> <br/>
        <input type="text" name="filiere" id="filiere" value={filiere} onChange={(e) => setFiliere(e.target.value)} /> <br/>
        <input type="button" value="ajouter" onClick={() => dispatch(addStag({image, nom, prenom, filiere}))} />
    </div>
  )
}
