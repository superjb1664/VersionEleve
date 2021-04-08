// ./component/ItemAtelier.js
import React from "react";

const ItemActivite = ({activite}) => { //ici, props contient toutes les propriétés qui ont été envoyées à la création de ce composant. "props" a un attribut "atelier" donné par la page appelante : atelier={atelierAct}


            return (
                <>
                    <img src={"http://127.0.0.1:8000/image/" + activite.idatelier.image} alt="Activite" width="30" height="30"/> : {activite.idatelier.titre} {activite.perfobjectif} {activite.idatelier.unitedeperformance} - {activite.intensiteobjectif} {activite.idatelier.unitedintensite}
                </>
            )



}
export default ItemActivite