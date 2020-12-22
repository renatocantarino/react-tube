import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Box, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from './Navbar';

//icones
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: { height: '100vh' },
    bar: { boxShadow: 'none' ,  zIndex: theme.zIndex.drawer + 1 },
    grow: { flexGrow: 1 },
    logo: { height: 25 },
    icon: { paddingRight: theme.spacing(2) }
}));


export default function TopBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" position="fixed" className={classes.bar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src='/images/preto.png' className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.icon} color="inherit" >
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icon} color="inherit" >
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icon} color="inherit" >
                        <MoreVert />
                    </IconButton>
                    <Button color="secondary" startIcon={<AccountCircle />} variant="outlined">Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <NavBar />

        </div>

    )
}
