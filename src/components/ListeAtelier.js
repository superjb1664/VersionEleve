// ./components/ListeAtelier.js
import React, { useState, useEffect } from "react"

import DetailAtelier from "./DetailAtelier";
import axios from "./AxiosInterceptor";


const ListeAtelier = props => {
    const [ateliers, setAteliers] = useState([]) //mémorise les ateliers après leur chargement

    useEffect( async() => {
        await axios.get('api/ateliers'  )
            .then((response) => {
                console.log(response )
                setAteliers(response.data)
            }, (error) => {
                console.log(error)
            });
    }, []);

    //useEffect sert à suivre le cycle de vie de l'objet.
    // Qu'est-ce que le cycle de vie d'un objet ?
    // Chaque composent rect est crée, mise à jour en boucle puis est détruit.
    // les useEffect sont appelés à la création puis à la mise à jour puis à la destruction ! Tout ça avec la même méthode...
    // Comment s'aiguiller  ? tout dépend de la valeur entre croche ;
    // useEffect( () => { ... } , []) ; // code exécuté uniquement au chargement de la page
    // useEffect( () => { ... }) ; // code exécuté à chaque cycle de mise à jour de la page (donc à chaque frame !)
    // useEffect( () => { ... } , [variable]) ; // code exécuté à chaque changements de valeur de la variable
    // useEffect( () => { ... } , [props]) ; // code exécuté à chaque changements des props (donc une fois leur valorisation,puis à chaque changement depuis le composant père


    //Voici le scénario de cette page :
    // 1. useEffect est appelé
    // 2. dans useEffect on appelle "setAteliers" qui met à jour l'état "ateliers"
    // 3. "ateliers" changeant, l'affichage de ce composant est reconstruit

    return (
        <div className="container">
            <h1>Nos ateliers</h1>
            <ul  >
                {ateliers.map(atelier => (
                    <DetailAtelier key={atelier.id} atelier={atelier}/>
                ))}
            </ul>
        </div>
    )
}
export default ListeAtelier