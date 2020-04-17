import React from "react";
import {Switch} from "react-router-dom";

function Routes(props) {
    return (
       <Switch>
           {props.routes}
       </Switch>
    );
}

export default Routes;