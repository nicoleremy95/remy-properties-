import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core/';
import ButtonRemyExternal from '../ButtonRemyExternal/ButtonRemyExternal';
import { Link } from 'react-router-dom';
import FadeInSection from '../FadeIn/FadeInSection';
import AmericanLakeSquare from '../../images/AmericanLakeSquare.jpg';
import Divider from '../Divider/Divider';

const useStyles = makeStyles((theme)=>({
    text: {
        // paddingRight: '20vw',
        marginTop: '20vh'

    },
    title:{
        letterSpacing: "2px",
        // fontSize: '10vh'
    },
    paragraph: {
        letterSpacing: "2px",
        marginTop: '7vh'
    },
    background: {
        // filter: 'sepia(30%) ',
        width: '100%',
        height: '100%',
        opacity: '.5',
        // backgroundImage: "linear-gradient(180deg,rgba(18,18,18,0.5) 0%,#121212 100%), url('src/images/AmericanLakeSquare.jpg')"
    },
    colorText: {
        color: "#3882A7",
        textTransform: "uppercase"
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    button: {
        marginTop: '7vh',
        marginBottom: '7vh'
    },
    textOverlay: {
        position: 'absolute',
        top: 100,
        left: 0,
        textAlign: 'center',
        color: 'black',
        fontStyle: 'italic',
        fontSize: '4vw',
        padding: '1vw'
    },
    parent: {
        position: 'relative',
        width: '100%'
    }
}));

export default function ContactUs() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                        <div className={classes.text}>
                            <h4 className={classes.colorText}>contact us</h4>
                            <h1 className={classes.title}>Let's Connect</h1>
                            <h2 className={classes.paragraph}>Call Our Office</h2>
                            <p>(253) 625-7902</p>
                            <h2 className={classes.paragraph}>Email the Team</h2>
                            <a target="blank" href="mailto:management@remy-properties.com" className={classes.link}>management@remy-properties.com</a>
                            <h2 className={classes.paragraph}>Visit Our Office</h2>
                            <p>10609 Gravelly Lake DR SW, Lakewood WA 98499-1327</p>
                            <section className={classes.button}>
                                    <ButtonRemyExternal
                                        text="apply today"
                                        link="https://remyproperties.managebuilding.com/"
                                    />
                            </section>
                        </div>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <div className={classes.parent}>
                        <img className={classes.background} src={AmericanLakeSquare} alt="American Lake"/>
                        <Container maxWidth="sm">
                            <div className={classes.textOverlay}>
                                <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
                            </div>
                        </Container>
                    </div>
                </Grid>
            </Grid> 
        </div>
    )
}

