// the conventional 'index.js' import-export file reference pattern

import './core.css';
import theme from "./theme";
import actions from './actions'

// https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories
export {theme, actions};