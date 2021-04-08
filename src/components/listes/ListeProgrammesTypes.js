import React, { useState, useEffect } from "react"
import axios from "../AxiosInterceptor";
import ItemSequence from "../items/ItemSequence";
import ListGroup from "react-bootstrap/ListGroup"

import "../../App.css"
import {useHistory} from "react-router-dom";

const ListeProgrammesTypes = (props) => {

    const [listeSequences, setListeSequences] = useState([]) //[] parce que l'on attend un tableau d'objet
    useEffect( () => {
        const fetchData = async () => {
            await axios.get('api/sequencetheoriques')
                .then((response) => {
                    console.log(response)
                    setListeSequences(response.data)
                }, (error) => {
                    console.log(error)
                });
        };
        fetchData()
    },[props]  );

    let history = useHistory();
    const naviguer = (id) => {
        //alert("click" + id)
        history.push("/detailsequencetype/"+id)
    }

    var nbResult = listeSequences.length
    return (
        <div className="container">
            <h5>Nos programmes pour vous !</h5>
            <i>Des activités proposées à tous nos adhérents</i>
            {nbResult !== 0 ?
                (
                    <>
                        <ListGroup as="ul" style={{width: "100%"}}>
                            {
                            listeSequences.map(sequence => (
                                <ListGroup.Item key={sequence.id} style={{width: "100%"}} className="interactivediv" onClick={() => naviguer(sequence.id)}>
                                    <ItemSequence key={sequence.id} sequence={sequence} style={{width: "100%"}}/>
                                </ListGroup.Item>
                            ))
                            }
                        </ListGroup>
                    </>
                ):
                (
                    <>
                        Pas encore de séquence
                    </>
                )

            }
        </div>
    )

}
export default ListeProgrammesTypes