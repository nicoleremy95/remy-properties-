import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import lake from '../../images/lake.jpg';
import Team from '../Team/Team';
import AllenmoreBrownstonesFeatured from '../../images/AllenmoreBrownstonesFeatured.jpg'
import GravellyLakeBrownstonesFeatured from '../../images/GravellyLakeBrownstonesFeatured.jpg'
import {Container, Grid} from '@material-ui/core/';
import LetUsKnow from '../LetUsKnow/LetUsKnow';

const useStyles = makeStyles((theme)=>({
    img: {
        width: "100%",
        // height: '400px'

    },
    parent: {
        position: 'relative'
    },
    team: {
        position: 'absolute',
        top: 100,        
    }
}));

const featuredArr =[lake, lake, lake];

export default function Featured() {
    const classes = useStyles();

    return (
        <div className={classes.parent}>
            <Carousel>
                {featuredArr.map((image)=>(
                    <img alt="featured properties" className={classes.img} src={image}/>
                ))}
            </Carousel>
        </div>
    )
}
