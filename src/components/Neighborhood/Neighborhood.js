import React from 'react'
import Tacoma from '../../images/Tacoma.jpg';
import AmericanLakeSquare from '../../images/AmericanLakeSquare.jpg';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {Container, Grid} from '@material-ui/core/';
import ButtonRemy from '../ButtonRemy/ButtonRemy';

const useStyles = makeStyles((theme)=>({
    colorText: {
        color: "#3882A7",
        textTransform: "uppercase"
    },
    text: {
        marginTop: "200px",
        paddingRight: '100px'
    },
    textRight: {
        marginTop: "200px",
        paddingLeft: '100px'
    },
    title:{
        letterSpacing: "2px"
    },
    paragraph: {
        letterSpacing: "2px"
    },
    background: {
        // opacity: .5,
        filter: 'grayscale(70%) blur(1px)',
        background: AmericanLakeSquare
        // backgroundImage: "linear-gradient(180deg,rgba(18,18,18,0.5) 0%,#121212 100%)"
    },
    overlay: {
        position: 'relative',
        maxHeight: '500px',
        bottom: 700,
        right: 100,

    },
    backgroundRight: {
        // opacity: .5,
        width: '100%',
        filter: 'grayscale(70%) blur(1px)',
        background: AmericanLakeSquare
        // backgroundImage: "linear-gradient(180deg,rgba(18,18,18,0.5) 0%,#121212 100%)"
    },
    overlayRight: {
        position: 'relative',
        height: '500px',
        bottom: 600,
        left: 300,

    }
}));

export default function Neighborhood(props) {
    const classes = useStyles();

    return (
        <div>
            {props.boolean? 
            <Grid container>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                        <div className={classes.text}>
                            <h4 className={classes.colorText}>view the extraordinary</h4>
                            <h1 className={classes.title}>Homes in {props.name}</h1>
                            <p className={classes.paragraph}>{props.description}</p>
                            <Link>
                                <ButtonRemy
                                    text="view our properties"
                                />
                            </Link>
                        </div>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <img className={classes.background} src={props.image} alt={props.name}/>
                    <img className={classes.overlay} src={props.image} alt={classes.name}/>
                </Grid>
            </Grid> 
            :
            <Grid container>
                <Grid item lg={6}>
                    <img className={classes.backgroundRight} src={props.image} alt={props.name}/>
                    <img className={classes.overlayRight} src={props.image} alt={props.name}/>
                </Grid>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                    <div className={classes.textRight}>
                            <h4 className={classes.colorText}>view the extraordinary</h4>
                            <h1 className={classes.title}>Homes in {props.name}</h1>
                            <p className={classes.paragraph}> {props.description}</p>
                            <Link>
                                <ButtonRemy
                                    text="view our properties"
                                />
                            </Link>
                        </div>
                    </Container>
                </Grid>
            </Grid>   }
            
        </div>
    )
}
