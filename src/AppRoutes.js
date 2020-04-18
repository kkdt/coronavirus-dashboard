import React from 'react';
import {Switch} from "react-router-dom";
import ReportedCasesController from "./controllers/ReportedCasesController";
import ApplicationRoute from "./components/ApplicationRoute/ApplicationRoute";
import HomePage from "./pages/HomePage";
import DefaultContent from "./pages/DefaultContent/DefaultContent";

function AppRoutes(props) {

    return (
        <Switch>
            <ApplicationRoute exact path="/" component={HomePage}/>,
            <ApplicationRoute path="/home" component={HomePage}/>,
            <ApplicationRoute path="/reported" component={ReportedCasesController}/>,

            // Opening a new tab will default to this page
            <ApplicationRoute component={DefaultContent} />
        </Switch>
    );
}
export default AppRoutes;