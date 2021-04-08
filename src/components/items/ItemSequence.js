import React  from "react"
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const ItemSequence = props => {
        return (
            <>
                <Container fluid >
                    <Row    >
                        <Col lg={1}>
                    <img src={"/Lvl"+props.sequence.niveau+".png"} width="30" height="30" alt="niveau"/>
                        </Col>
                        <Col lg={11} >
                {props.sequence.titre}
                        </Col>
                    </Row>
                </Container>

                </>
        )
}
export default ItemSequence