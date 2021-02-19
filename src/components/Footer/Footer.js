import React from 'react'
import {Container, Grid} from '@material-ui/core/';
import {makeStyles } from '@material-ui/core/styles';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme)=>({
    box: {
        backgroundColor: 'var(--footerColor)',
        marginTop: '200px'
    },
    logoLocation: {
        // width: '200px',
        marginTop: 100
    },
    logo: {
        width: '200px'
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important"
    },
    text: {
        color: 'white'
    },
    textAtl: {
        color: 'var(--thirdColor)'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <div className={classes.logoLocation}>
                            <img className={classes.logo} src={logo} alt="Remy Properties Logo"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <h2 className={classes.textAtl}>CONTACT US</h2>
                        <a href="mailto: management@remy-properties.com" className={classes.text}><h4><MailIcon/>management@remy-properties.com</h4></a>
                        <a href="Remy-properties.com" className={classes.text}>Remy-properties.com</a>
                        <p className={classes.text}>10609 Gravelly Lake DR SW</p>
                        <p className={classes.text}>Lakewood WA 98499-1327</p>
                        <p className={classes.text}>(253) 625-7902</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <h2 className={classes.textAtl}>REMY PROPERTIES LLC</h2>
                        <Link to="/about" className={classes.linkWhite}><h3>About</h3></Link>
                        <Link to="/properties" className={classes.linkWhite}><h3>Properties</h3></Link>
                        <Link to="/people" className={classes.linkWhite}><h3>People</h3></Link>
                        <Link to="/contact" className={classes.linkWhite}><h3>Contact Us</h3></Link>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}
