// ./component/ItemAtelier.js
import {Link} from 'react-router-dom'

const ItemAtelier = (props) => { //ici, props contient toutes les propriétés qui ont été envoyées à la création de ce composant. "props" a un attribut "atelier" donné par la page appelante : atelier={atelierAct}
        return (
            <li >
                <Link to={`/atelier/${props.atelier.id}`}>
                    <img src={`http://127.0.0.1:8000/image/${props.atelier.image}`} alt={props.atelier.titre} width="30" height="30"/> {props.atelier.titre}
                </Link>
            </li>
       )
}
export default ItemAtelier