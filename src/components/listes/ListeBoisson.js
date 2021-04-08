// ./components/ListeAtelier.js
import React, { useState, useEffect } from "react"

import axios from "../AxiosInterceptor";
import ItemBoisson from "../items/ItemBoisson";


const ListeBoisson = props => {
    const [boissons, setBoissons] = useState([]) //mémorise les ateliers après leur chargement

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('api/boissons'  )
                .then((response) => {
                    console.log(response )
                    setBoissons(response.data)
                }, (error) => {
                    console.log(error)
                });
        };

        fetchData();
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
            <h1>Nos boissons</h1>
            En choississant la bonne boisson adaptée à vos efforts, vous progresserez encore plus vite !
            <ul  >
                {boissons.map(boissonAct => (
                    <ItemBoisson key={boissonAct.id} boisson={boissonAct}/>
                ))}
            </ul>
        </div>
    )
}
export default ListeBoisson