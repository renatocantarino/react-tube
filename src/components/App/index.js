import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import Home from "../Home";

export default function App() {
    const tema = createMuiTheme({});
    return (

        <ThemeProvider theme={tema}>
            <Home />
        </ThemeProvider>
    );
}


