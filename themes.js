import {createGlobalStyles} from "styled-components";

export const lightTheme ={
    body: "afff",
    fontcolor: "0000"
}

export const darkTheme = {
    body: "0000",
    fontcolor: "afff"
}

export const GlobalStyles = createGlobalStyles

     body{
         background-color : {(props) => props.themes.body}
     }