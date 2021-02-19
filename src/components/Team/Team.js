import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: 'white',
        opacity: '80%',
        // width: '50%',
        // left: "auto",
        // right: "auto",
        // zIndex: -1
    },
    title: {
        fontSize: '50px',
        color: "--var(darkColor)",
        textTransform: 'uppercase',
        // zIndex: 1
    },
    subTitle: {
        //    fontSize: '50px',
        color: "--var(darkColor)",
        fontStyle: 'italic'
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
