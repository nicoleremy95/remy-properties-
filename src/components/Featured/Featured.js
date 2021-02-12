import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import lake from '../../images/lake.jpg';
import Team from '../Team/Team';

const useStyles = makeStyles((theme)=>({
    img: {
        width: "100%",
        height: '400px'

    },
    team: {
        position: 'relative',
        bottom: 300,
        textAlign: 'center'
    }
}));

const featuredArr =[lake, lake, lake];

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
                <Team/>
            </div>

        </div>
    )
}
