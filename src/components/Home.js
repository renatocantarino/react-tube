import React from "react";
import { makeStyles, Box, Toolbar, Typography } from '@material-ui/core'
import TopBar from "./TopBar";
import Video from "./Video";

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
            <Box style={{ marginLeft: 250 }}>
                <Toolbar />
                <Typography
                    variant='h6'
                    color='textPrimary'
                    style={{ fontWeight: 600 }}
                >
                    Recomendados
          </Typography>
                <Video />
            </Box>

            <TopBar />

        </div>
    )
}
