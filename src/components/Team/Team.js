import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const useStyles = makeStyles((theme)=>({
   title: {
       fontSize: '50px',
       color: "white",
       textTransform: 'uppercase'
   },
   subTitle: {
    //    fontSize: '50px',
       color: "white",
       fontStyle: 'italic'
   },
   icon: {
       color: 'white'
   }
}));

export default function Team() {
    const classes =useStyles();

    return (
        <div>
            <h1 className={classes.title}>remy properties</h1>
            <h2 className={classes.subTitle}>see our projects</h2>
            <ArrowDropDownCircleIcon className={classes.icon}/>
        </div>
    )
}
