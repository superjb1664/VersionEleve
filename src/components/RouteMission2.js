// ./components/RouteMission2.js
/*Les bibliothèques liées à React*/

import { BrowserRouter, Route, Switch } from "react-router-dom"
/*Les composants*/

/*Les pages statiques*/
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Accueil from "../pages/Accueil"

import BarreDeNavigation from "./BarreDeNavigation";
import ListeAtelier from "./ListeAtelier";
import ListeBoisson from "./ListeBoisson";

const RouteMission2 = props => {
        return (
        <BrowserRouter>
            <BarreDeNavigation />
            <Switch>
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