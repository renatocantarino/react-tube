import React from 'react'
import {

    makeStyles,
    Box,
    Typography,
    Grid,




} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

}));


const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Renato Cantarino',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Renato Cantarino',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Renato Cantarino',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Renato Cantarino',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Renato Cantarino',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Renato Cantarino',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Renato Cantarino',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Renato Cantarino',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
];


export default function Video() {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            {videos.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box>
                        <img
                            style={{ width: '100%' }}
                            alt={item.title}
                            src={item.thumb}
                        />
                        <Box>
                            <Typography
                                style={{ fontWeight: 600 }}
                                gutterBottom
                                variant='body1'
                                color='textPrimary'
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                display='block'
                                variant='body2'
                                color='textSecondary'
                            >
                                {item.channel}
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                {`${item.views} • ${item.date}`}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>

    )
}