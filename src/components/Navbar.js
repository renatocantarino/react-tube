import React from 'react'
import {
    Drawer,
    List,
    Divider,
    ListItem,
    makeStyles,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Box,
    Typography,
    Button



} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';


import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        borderRight: 'none'
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    listItemText: {
        fontSize: 14,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function NavBar() {
    const classes = useStyles();
    return (

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Início'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Em alta'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Inscrições'}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <VideoLibrary />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Biblioteca'}
                        />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.listItemText,
                            }}
                            primary={'Histórico'}
                        />
                    </ListItem>
                </List>
                <Divider />
                <Box p={7}>
                    <Typography variant='body2'>
                        Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                    <Box mt={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<AccountCircle />}
                        >
                            Fazer login
                  </Button>
                    </Box>
                </Box>
                <Divider />

            </div>
        </Drawer>
    )
}
