import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";

/**
 * The navigation action links.
 *
 * @type {({item: *, route: string, text: string}|{item: *, route: string, text: string})[]}
 */
const actions = [
    {
        "text":"Home",
        "item": <ListItemIcon><DashboardIcon/></ListItemIcon>,
        "route":"/home"
    },
    {
        "text":"Reported Cases",
        "item": <ListItemIcon><BarChartIcon/></ListItemIcon>,
        "route":"/reported"
    }
];

export default actions;
