//./components/BarreDeNavigation.js
import React from "react"
import Navbar from "react-bootstrap/Navbar";

const BarreDeNavigation = props => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Ma salle de Muscu</Navbar.Brand>
                <Navbar.Brand href="/atelier">Nos ateliers</Navbar.Brand>
                <Navbar.Brand href="/boisson">Nos boissons</Navbar.Brand>
                <Navbar.Brand href="/about">A propos</Navbar.Brand>
            </Navbar>
    )
}
export default BarreDeNavigation