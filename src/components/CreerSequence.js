import React, {useEffect, useState} from "react";


import axios from "./AxiosInterceptor";

import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ItemActivite from "./items/ItemActivite";


const CreerSequence = (props) => {
    //plan
    // 1. vérifier si on a un élément donné en propriété
    // 2. Si on n'en a pas : on crée un nouveau
    // 3. Si on en a, on charge et on affiche la liste, vide de faite !
    const [sequence, setSequence] = useState([])

    useEffect( () => {

        const chargerSequence = async (id) => {
            await axios.get(`api/sequencetheoriques/${id}`)
                .then((response) => {
                    console.log(response)
                    setSequence(response.data)
                }, (error) => {
                    console.log(error)
                });
        }

        const creerSequence = async () => {
            await axios.get(`creerunesequence`)
                .then((response) => {
                    console.log(response)
                    setSequence(response.data)
                }, (error) => {
                    console.log(error)
                });
        }

        if(typeof props.idSequence  === 'undefined')
            creerSequence()
        else
            chargerSequence(props.idSequence)

    },[props])

    //Ce qu'affiche cet objet
    if (sequence.idcategoriesequence !== undefined) {
        //je teste ce champ pour savoir s'il l'objet a été chargé
        //On peut utiliser tout un montage avec un booléen
        console.log(sequence)
    return (
        <>
            <Container fluid>
                <Row >
                    <Col >
                        <h1 align="center"> {sequence.titre}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        Categorie : <img src={`http://127.0.0.1:8000/image/${sequence.idcategoriesequence.image}`}  width="30" height="30" alt="categorie"/>
                        Niveau : <img src={"/Lvl" + sequence.niveau + ".png"} width="30" height="30" alt="Niveau"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <Link to="/messeances">Retour</Link>
                        <ListGroup as="ul"  >
                            {
                                sequence.activitesequencetheoriques.map(
                                    (activite) => (
                                        <ListGroup.Item key={activite.id} style={{width: "100%"}}>
                                            <ItemActivite activite={activite} />
                                        </ListGroup.Item>

                                    ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>

    )  } else {
        console.log("else")
        console.log(sequence)
        return (<div className="container">
            En chargement...
        </div>)
    }

}
export default CreerSequence