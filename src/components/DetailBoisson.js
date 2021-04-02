// ./component/DetailAtelier.js
import {Link} from 'react-router-dom'

const DetailBoisson = ({boisson}) => {
        return (
            <li >
                <Link to={`/boisson/${boisson.id}`}>
                    {boisson.id} {boisson.titre}
                </Link>
            </li>
       )
}
export default DetailBoisson