import React from "react";
import { makeStyles } from '@material-ui/core'
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
    root: {
        //background: theme.palette.primary.main,
       // padding: theme.spacing(2) , // 8px * 2
        height: '100vh'
    }
}));


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
        </div>
    )
}
