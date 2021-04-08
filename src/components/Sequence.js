import React, {useState, useEffect} from "react"


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link, useParams} from "react-router-dom";
import axios from "./AxiosInterceptor";
import ListGroup from "react-bootstrap/ListGroup";
import ItemActivite from "./items/ItemActivite";

const Sequence = props => {
    const [sequence, setSequence] = useState([]) //[] parce que l'on attend un tableau d'objet

    const {id} = useParams()

    useEffect(() => {
        const fetchData = async (id) => {
            await axios.get(`api/sequencetheoriques/${id}`)
                .then((response) => {
                    console.log(response)
                    setSequence(response.data)
                }, (error) => {
                    console.log(error)
                });
        }
        fetchData(id)

    }, [id]);

    console.log(sequence === true)
    let activites = sequence.activitesequencetheoriques;
    if (activites !== undefined) {
        console.log(sequence) //{!!text && <Text>{text}</Text>}
        console.log(activites)
        let img = sequence.idcategoriesequence.image
        console.log(img)
        return (
            <Container fluid>
                <Row >
                    <Col >
                        <h1 align="center"> {sequence.titre}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        Categorie : <img src={`http://127.0.0.1:8000/image/${img}`}  width="30" height="30" alt="categorie"/>
                        Niveau : <img src={"/Lvl" + sequence.niveau + ".png"} width="30" height="30" alt="Niveau"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <Link to="/messeances">Retour</Link>
                        <ListGroup as="ul"  >
                            {
                                activites.map(
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
        )
    } else {
        console.log("else")
        console.log(sequence)
        return (<div className="container">
            En chargement...
        </div>)
    }
}
export default Sequence