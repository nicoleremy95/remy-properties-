import React from 'react'
import PropertyCards from '../../components/PropertyCards/PropertyCards';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core/';

const useStyles = makeStyles((Theme) =>
    createStyles({
        title: {
            textAlign: "center",
            marginBottom: "100px"
        },
    })
);
export default function Properties() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <h1 className={classes.title}>Properties</h1>
                <PropertyCards/>
            </Container>
        </div>
    )
}
