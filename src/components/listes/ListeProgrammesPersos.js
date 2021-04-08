import React, { useState, useEffect } from "react"
import axios from "../AxiosInterceptor";
import ItemSequence from "../items/ItemSequence"
import ListGroup from "react-bootstrap/ListGroup";
import { useHistory} from "react-router-dom";
import "../../App.css"

const ListeProgrammesPersos = (props) => {


    const [listeSequences, setListeSequences] = useState([]) //[] parce que l'on attend un tableau d'objet

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('listesequencespersonnelles'  )
                .then((response) => {
                    console.log(response )
                    setListeSequences(response.data)
                }, (error) => {
                    console.log(error)
                });
        };

        fetchData();
    }, []);

    let history = useHistory();
    const naviguer = (id) => {
        //alert("click" + id)
        history.push("/detailsequenceperso/"+id)
    }

    var nbResult = listeSequences.length
        return (
            <div className="container">
                <h5>Vos programmes</h5>
                <i>Vos programmes créés selon vos envies</i>
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
export default ListeProgrammesPersos