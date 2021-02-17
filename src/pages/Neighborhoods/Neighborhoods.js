import React from 'react';
import {Container, Grid} from '@material-ui/core/';
import AmericanLakeSquare from '../../images/AmericanLakeSquare.jpg';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Tacoma from '../../images/Tacoma.jpg'


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

export default function Neighborhoods() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                        <div className={classes.text}>
                            <h4 className={classes.colorText}>view the extraordinary</h4>
                            <h1 className={classes.title}>Homes in Lakewood</h1>
                            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Button variant="contained"><Link>view our properties</Link></Button>
                        </div>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    {/* <div className={classes.background}></div> */}
                    <img className={classes.background} src={AmericanLakeSquare} alt="American Lake"/>
                    <img className={classes.overlay} src={AmericanLakeSquare} alt="American Lake"/>
                </Grid>
            </Grid> 
            <Grid container>
                <Grid item lg={6}>
                    {/* <div className={classes.background}></div> */}
                    <img className={classes.backgroundRight} src={Tacoma} alt="American Lake"/>
                    <img className={classes.overlayRight} src={Tacoma} alt="American Lake"/>
                </Grid>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                    <div className={classes.textRight}>
                            <h4 className={classes.colorText}>view the extraordinary</h4>
                            <h1 className={classes.title}>Homes in Tacoma</h1>
                            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Button variant="contained"><Link>view our properties</Link></Button>
                        </div>
                    </Container>
                </Grid>
            </Grid> 
            
        </div>
    )
}
