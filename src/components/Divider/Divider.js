import React from 'react'
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: "var(--darkColor)",
        height: '300px',
        width: "100%"
    }
}));

export default function Divider() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            
        </div>
    )
}
