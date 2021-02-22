import React from 'react'
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: "var(--darkColor)",
        height: "30ch",
        width: "auto",
    },
}));

export default function Divider() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
        </div>
    )
}
