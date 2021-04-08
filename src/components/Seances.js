import React from "react"

import ListeMesActivites from "./listes/ListeMesActivites";
import ListeProgrammesTypes from "./listes/ListeProgrammesTypes";
import ListeProgrammesPersos from "./listes/ListeProgrammesPersos";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const Seances = props => {
        return (
            <Container fluid >
                <Row  >
                    <Col >
                        <h1 align="center">Séances</h1>
                    </Col>
                </Row>
                <Row  >
                    <Col>
                        <ListeMesActivites token={props.token}/>
                    </Col>
                    <Col  >

                        <Container fluid >
                            <Row  >
                                <Col style={{textAlign: "center"}}>
                                    <h3>Programmes disponibles</h3>
                                </Col>
                            </Row>
                            <Row  >
                                <Col style={{textAlign: "center"}}>
                                    <ListeProgrammesTypes  />
                                </Col>
                                <Col style={{textAlign: "center"}}>
                                    <ListeProgrammesPersos   />
                                    <Link to="/creerseance">Créer ma séance personnelle</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        )
}
export default Seances