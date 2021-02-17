import React from 'react'
import Employees from '../../components/Employeees/Employees';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    title: {
        textAlign: "center",
        marginBottom: "100px"
    },
}));

export default function People() {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.title}>Meet Our Team</h1>
            <section>
                <Employees/>
            </section>
        </div>
    )
}
