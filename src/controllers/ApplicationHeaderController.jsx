import React from "react";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom';
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
 * @link https://material-ui.com/guides/composition/
 */
function ApplicationHeaderController(props) {
    // const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

    const handleOpen = props.handleOpen || (value => console.log("Draw state", value))

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
            return (
                <ListItem button component={Link} to={value.route} underline="none" color="inherit">
                    {item}
                    {/*<Link underline="none" color="inherit" to={value.route}><ListItemText primary={text}/></Link>*/}
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
            "text":"Navigation1",
            "item": <ListItemIcon><DashboardIcon/></ListItemIcon>,
            "route":"/nav1"
        },
        {
            "text":"Navigation2",
            "item": <ListItemIcon><BarChartIcon/></ListItemIcon>,
            "route":"/nav2"
        }
    ]);

    return (
        <HeaderBar handleOpen={handleOpen}
            drawerWidth={props.drawerWidth}
            title={props.title}
            github={props.github}
        >
            {actions}
        </HeaderBar>
    );
}
export default ApplicationHeaderController;