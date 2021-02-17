import React from 'react'
import {Container, Grid} from '@material-ui/core/';
import {makeStyles } from '@material-ui/core/styles';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme)=>({
    box: {
        // backgroundColor: '#f2f2f2',
        marginTop: '200px'
    },
    logo: {
        width: '200px'
    },
    linkBlack: {
        textDecoration: "none",
        color: "black !important"
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Container>
                <Grid container spacing={2}>
                    {/* <Grid md={6} lg={2}>
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <img className={classes.logo} src={logo} alt="Remy Properties Logo"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <h2>CONTACT US</h2>
                        <a href="mailto: management@remy-properties.com"><h4><MailIcon/>management@remy-properties.com</h4></a>
                        <a href="Remy-properties.com">Remy-properties.com</a>
                        <p>10609 Gravelly Lake DR SW</p>
                        <p>Lakewood WA 98499-1327</p>
                        <p>(253) 625-7902</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <h2>REMY PROPERTIES LLC</h2>
                        <Link to="/about" className={classes.linkBlack}><h3>About</h3></Link>
                        <Link to="/properties" className={classes.linkBlack}><h3>Properties</h3></Link>
                        <Link to="/people" className={classes.linkBlack}><h3>People</h3></Link>
                        <Link to="/contact" className={classes.linkBlack}><h3>Contact Us</h3></Link>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}
