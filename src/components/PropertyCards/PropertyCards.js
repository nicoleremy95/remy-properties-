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

const propertiesArr= [
    {
        name: "Gravelly Lake Brownstones",
        img: GravellyLakeBrownstones,
        description: "Located near the Lakewood, WA town center, Gravelly Lake Brownstones is an exclusive lifestyle community features spacious residences with an ode to the 'Brownstones' found in New York, Boston, and D.C. With a wide variety of interior styles, along with on-site parking, modern interiors, and natural sun light, you have found the charming home you've been seeking.",
        link: 'https://www.gravellylakebrownstones.com/'
    },
    {
        name: "Allenmore Brownstones",
        img: AllenmoreBrownstones,
        description: "Allenmore Brownstones, located near Downtown Tacoma and the Allenmore neighborhood, is a new exclusive lifestyle community featuring modern spacious residences with an ode to the 'Brownstones' found in New York, Boston, and D.C. With a wide variety of interior styles, along with ample parking, modern interiors, views of Mount Rainier, and natural sun light, you have found the charming home you've been seeking.",
        link: 'https://www.allenmorebrownstones.net/'
    },
    {
        name: "Oasis at Allenmore",
        img: AllenmoreBrownstones,
        description: "Oasis at Allenmore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Meadow Park Apartments",
        img: AllenmoreBrownstones,
        description: "Meadow Park Apartments Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Restoration Association",
        img: AllenmoreBrownstones,
        description: "Restoration Association Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Villa Vee",
        img: AllenmoreBrownstones,
        description: "Villa Vee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
    {
        name: "Villa Plaza",
        img: AllenmoreBrownstones,
        description: "Villa Plaza Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ''
    },
]

const useStyles = makeStyles((Theme) =>
    createStyles({
        box: {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: '100px'
        },
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
        
    })
);

export default function PropertyCards() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            {propertiesArr.map(property=>(
                    <div className={classes.box}> 
                    <Card className={classes.root}>
                        
                        <CardActionArea>
                            <a href={property.link}>
                            <CardMedia
                            className={classes.media}
                        
                            image={property.img}
                            title={property.name}
                            />
                            </a>
                        
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {property.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {property.description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href={property.link} target="blank"
                                className={classes.linkBlack}>
                                Learn More
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                ))}
        </div>
    )
}
