import React from 'react';
import {Switch} from "react-router-dom";
import ReportedCasesController from "./controllers/ReportedCasesController";
import ApplicationRoute from "./components/ApplicationRoute/ApplicationRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import HomePage from "./pages/HomePage";

function AppRoutes(props) {

    return (
        <Switch>
            <ApplicationRoute exact path="/" component={HomePage}/>,
            <ApplicationRoute path="/home" component={HomePage}/>,
            <ApplicationRoute path="/reported" component={ReportedCasesController}/>,
            <ApplicationRoute component={PageNotFound} />
        </Switch>
    );
}
export default AppRoutes;