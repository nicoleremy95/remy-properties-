import React from 'react'
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: "var(--darkColor)",
        height: "30ch",
        width: "auto",
        position: "relative",
    },
    child:{
        margin: 0,
        position: "absolute",
        top: "50%",
        "-ms-transform": "translateY(-50%)",
        transform: "translateY(-50%)",
        padding: "2vw"
    },
    text: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontStyle: 'italic'
    }
}));

export default function Divider(props) {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.child}>
                <h2 className={classes.text}>{props.text}</h2>
            </div>
        </div>
    )
}
