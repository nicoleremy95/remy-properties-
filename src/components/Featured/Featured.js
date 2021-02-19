import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import lake from '../../images/lake.jpg';
import Team from '../Team/Team';
import AllenmoreBrownstonesFeatured from '../../images/AllenmoreBrownstonesFeatured.jpg'
import GravellyLakeBrownstonesFeatured from '../../images/GravellyLakeBrownstonesFeatured.jpg'
import {Container, Grid} from '@material-ui/core/';

const useStyles = makeStyles((theme)=>({
    img: {
        // width: "100%",
        height: '400px'

    },
    team: {
        position: 'relative',
        bottom: 300,
        textAlign: 'center'
    }
}));

const featuredArr =[lake, AllenmoreBrownstonesFeatured, GravellyLakeBrownstonesFeatured];

export default function Featured() {
    const classes = useStyles();

    return (
        <div>
            <div>
            <Carousel>
                {featuredArr.map((image)=>(
                    <img alt="featured properties" className={classes.img} src={image}/>
                ))}
            </Carousel>
            </div>
           
            <div className={classes.team}>
                <Container maxWidth="sm">
                    <Team/>
                </Container>
            </div>

        </div>
    )
}
