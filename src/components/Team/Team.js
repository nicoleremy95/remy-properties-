import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: 'white',
        opacity: '80%',
        textAlign: 'center',
        padding: "2vw"
    },
    title: {
        fontSize: '50px',
        color: "--var(darkColor)",
        textTransform: 'uppercase',
        // zIndex: 1
    },
    subTitle: {
        color: "--var(darkColor)",
        fontStyle: 'italic',
        textTransform: 'uppercase'
    },
    icon: {
        color: '--var(darkColor)'
    }
}));

export default function Team() {
    const classes =useStyles();

    return (
        <div className={classes.box}>
            <h1 className={classes.title}>remy properties</h1>
            <h2 className={classes.subTitle}>see our projects</h2>
            <ArrowDropDownCircleIcon className={classes.icon}/>
        </div>
    )
}
