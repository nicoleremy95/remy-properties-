import React from 'react';
import Button from '@material-ui/core/Button'; 
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    outline: {
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'var(--secondaryColor)',
        width: 'auto',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: 'white',
        '&:hover': {
           backgroundColor: 'var(--thirdColor)',
           color: 'white'
        },
    },
    textStyle: {
        color: "var(--secondaryColor)",
        textTransform: 'uppercase',
    },
    link: {
        textDecoration: 'none'
    }
}));

export default function ButtonRemy(props) {
    const classes = useStyles();

    return (
        <div>
            <button className={classes.outline}>
                <a href={props.link} target="blank" className={classes.link}>
                    <h3 className={classes.textStyle}>{props.text}</h3>
                </a>
            </button>
        </div>
    )
}
