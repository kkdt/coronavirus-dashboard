import React from 'react';

import DefaultContentController from "./controllers/DefaultContentController";
import ReportedCasesController from "./controllers/ReportedCasesController";
import ApplicationRoute from "./components/ApplicationRoute/ApplicationRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const routes = [
    <ApplicationRoute exact path="/" component={DefaultContentController}/>,
    <ApplicationRoute path="/home" component={DefaultContentController}/>,
    <ApplicationRoute path="/reported" component={ReportedCasesController}/>,
    <ApplicationRoute component={PageNotFound} />
];

export {routes};