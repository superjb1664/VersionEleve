// ./components/RouteMission2.js
/*Les bibliothèques liées à React*/

import { BrowserRouter, Route, Switch } from "react-router-dom"
/*Les composants*/

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Accueil from "../pages/Accueil"

import BarreDeNavigation from "./BarreDeNavigation";
import ListeAtelier from "./listes/ListeAtelier";
import ListeBoisson from "./listes/ListeBoisson";
import Atelier from "./Atelier";
import Boisson from "./Boisson";
import Connexion from "./Connexion";
import Deconnexion from "./Deconnexion";
import MesInfos from "./MesInfos";
import React from "react";
import Seances from "./Seances";
import Sequence from "./Sequence";
import CreerSequence from "./CreerSequence";

const RouteMission2 = props => {
        return (
        <BrowserRouter>
            <BarreDeNavigation login={props.login}/>
            <Switch>
                <Route path="/connexion" >
                    <Connexion gereChangementSession={props.gereChangementSession} />
                </Route>
                <Route path="/messeances" >
                    <Seances   />
                </Route>
                <Route path="/creerseance">
                    <CreerSequence />
                </Route>


                <Route path="/deconnexion">
                    <Deconnexion gereChangementSession={props.gereChangementSession} />
                </Route>
                <Route path="/mesinfos" >
                    <MesInfos />
                </Route>
                <Route path="/atelier/:id" >
                    <Atelier login={props.login} />
                </Route>
                <Route path="/boisson/:id" >
                    <Boisson />
                </Route>
                <Route path="/detailsequenceperso/:id" >
                    <Sequence />
                </Route>
                <Route path="/detailsequencetype/:id" >
                    <Sequence />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/boisson">
                    <ListeBoisson />
                </Route>

                <Route path="/atelier">
                    <ListeAtelier />
                </Route>


                <Route path="/">
                    <Accueil />
                </Route>

                <Route path="*">
                    <NotMatch />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default RouteMission2