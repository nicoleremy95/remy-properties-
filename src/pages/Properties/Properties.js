import React from 'react'
import PropertyCards from '../../components/PropertyCards/PropertyCards';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core/';

const useStyles = makeStyles((Theme) =>
    createStyles({
        box: {
            backgroundColor: '#f2f2f2'
        },
        title: {
            textAlign: "center",
            marginBottom: "100px",
            paddingTop: '20px'

        },
    })
);
export default function Properties() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Container>
                <h1 className={classes.title}>Properties</h1>
                <PropertyCards/>
            </Container>
        </div>
    )
}
