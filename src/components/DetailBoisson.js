// ./component/DetailAtelier.js
import {Link} from 'react-router-dom'

const DetailBoisson = ({boisson}) => {
        return (
            <li >
                <Link to={`/boisson/${boisson.id}`}>
                    <img src={`http://127.0.0.1:8000/image/${boisson.image}`} alt={boisson.titre} width="30" height="30"/> {boisson.titre}
                </Link>
            </li>
       )
}
export default DetailBoisson