import React from "react";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';

/**
 * The top-level component that holds all state and properties for the <HeaderBar> for this application - i.e. the view
 * controller.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function ApplicationBarController(props) {
    // const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

    /**
     * Create a collection of <ListItem> from the passed-in elements array.
     *
     * @param elements { text, item, callback }
     * @returns {*}
     */
    function listItems(elements) {
        var items = elements.map((value, index) => {
            var text = value.text;
            var item = value.item;
            var handler = value.handler;
            return (
                <ListItem onClick={handler} button>
                    {item}
                    <ListItemText primary={text}/>
                </ListItem>
            );
        });
        return items;
    }

    /**
     * The actions defined from the parent properties.
     *
     * @type {*}
     */
    const actions = listItems(props.actions || [
        {
            "text":"Home",
            "item": <ListItemIcon><DashboardIcon/></ListItemIcon>,
            "handler": () => alert("Home")
        },
        {
            "text":"Reported Cases",
            "item": <ListItemIcon><BarChartIcon/></ListItemIcon>,
            "handler": () => alert("Reported Cases")
        }
    ]);

    return (
        <HeaderBar drawerWidth={props.drawerWidth}
            title={props.title}
            github={props.github}
        >
            {actions}
        </HeaderBar>
    );
}
export default ApplicationBarController;