import React from 'react'
import GravellyLakeBrownstones from '../../images/GravellyLakeBrownstones.png'
import AllenmoreBrownstones from '../../images/AllenmoreBrownstones.png'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FadeInSection from '../FadeIn/FadeInSection';
import { Link } from 'react-router-dom';
import ButtonRemy from '../ButtonRemy/ButtonRemy';

const propertiesArr= [
    {
        name: "Gravelly Lake Brownstones",
        location: "Lakewood",
        img: GravellyLakeBrownstones,
        description: "Located near the Lakewood, WA town center, Gravelly Lake Brownstones is an exclusive lifestyle community features spacious residences with an ode to the 'Brownstones' found in New York, Boston, and D.C. With a wide variety of interior styles, along with on-site parking, modern interiors, and natural sun light, you have found the charming home you've been seeking.",
        link: 'https://www.gravellylakebrownstones.com/'
    },
    {
        name: "Allenmore Brownstones",
        location: "Tacoma",
        img: AllenmoreBrownstones,
        description: "Allenmore Brownstones, located near Downtown Tacoma and the Allenmore neighborhood, is a new exclusive lifestyle community featuring modern spacious residences with an ode to the 'Brownstones' found in New York, Boston, and D.C. With a wide variety of interior styles, along with ample parking, modern interiors, views of Mount Rainier, and natural sun light, you have found the charming home you've been seeking.",
        link: 'https://www.allenmorebrownstones.net/'
    },
    {
        name: "Oasis at Allenmore",
        location: "Tacoma",
        img: AllenmoreBrownstones,
        description: "Oasis at Allenmore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Meadow Park Apartments",
        location: "Lakewood",
        img: AllenmoreBrownstones,
        description: "Meadow Park Apartments Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Restoration Association",
        location: "Tacoma",
        img: AllenmoreBrownstones,
        description: "Restoration Association Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Villa Vee",
        location: "Lakewood",
        img: AllenmoreBrownstones,
        description: "Villa Vee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Villa Plaza",
        location: "Tacoma",
        img: AllenmoreBrownstones,
        description: "Villa Plaza Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
]

const useStyles = makeStyles((Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
          },
          media: {
            height: 140,
          },
          linkBlack: {
            textDecoration: "none",
            color: "black !important"
          },
          colorText: {
            color: "#3882A7",
            textTransform: "uppercase"
        },
        text: {
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
            background: GravellyLakeBrownstones
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
            // background: AmericanLakeSquare
            // backgroundImage: "linear-gradient(180deg,rgba(18,18,18,0.5) 0%,#121212 100%)"
        },
        overlayRight: {
            position: 'relative',
            height: '500px',
            bottom: 600,
            left: 300,
    
        },
        
    })
);

export default function PropertyCards() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            {propertiesArr.map(property=>(
                    <div className={classes.box}> 
                        <Grid container>
                <Grid item lg={6}>
                    <Container maxWidth="sm">
                        <FadeInSection>
                        <div className={classes.text}>
                            <h4 className={classes.colorText}>{property.location}</h4>
                            <h1 className={classes.title}>{property.name}</h1>
                            <p className={classes.paragraph}>{property.description}</p>
                            <Link>
                                <ButtonRemy
                                    text={property.name}
                                    link={property.link}
                                />
                            </Link>
                        </div>
                        </FadeInSection>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <img className={classes.background} src={property.img} alt={property.name}/>
                    <img className={classes.overlay} src={property.img} alt={property.name}/>
                </Grid>
            </Grid> 
                    </div>
                ))}
        </div>
    )
}
