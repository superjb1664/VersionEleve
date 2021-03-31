// ./component/DetailAtelier.js
import {Link} from 'react-router-dom'

const DetailAtelier = ({atelier}) => { //ici, atelier est une propriété. Cette valeur est donnée par la page appelante : atelier={atelier}
        return (
            <li >
                <Link to={`/atelier/${atelier.id}`}>
                    {atelier.id} {atelier.titre}
                </Link>
            </li>
       )
}
export default DetailAtelier