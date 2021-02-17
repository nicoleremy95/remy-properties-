import React from 'react'
import Employees from '../../components/Employeees/Employees';
import {makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: '#f2f2f2'
    },
    title: {
        textAlign: "center",
        marginBottom: "100px",
        paddingTop: '20px'
    },
}));

export default function People() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Container>
            <h1 className={classes.title}>Meet Our Team</h1>
            <section>
                <Employees/>
            </section>
            </Container>
        </div>
    )
}
