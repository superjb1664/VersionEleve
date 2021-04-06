import React, {useEffect, useState} from "react";


import axios from "./AxiosInterceptor";

import Table from "react-bootstrap/Table"
const MesInfos = props => {
    //Liste des hooks : là où fait l'appel à des fonctions
    const [infosUser, setInfosUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('/getCurrentUser'  )
                .then((response) => {
                    console.log(response )
                    setInfosUser(response.data)
                }, (error) => {
                    console.log(error)
                });
        };

        fetchData();
    }, []);





        //Ce qu'affiche cet objet
        return (
            <div className="container">
                    <h3>Mes informations</h3>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Identifiant</td>
                                <td>{infosUser.login}</td>
                            </tr>
                            <tr>
                                <td>Nom</td>
                                <td>{infosUser.nomUtilisateur}</td>
                            </tr>
                            <tr>
                                <td>Prénom</td>
                                <td>{infosUser.prenomUtilisateur}</td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td>
                                    {infosUser.email}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
            </div>

        )

}
export default MesInfos