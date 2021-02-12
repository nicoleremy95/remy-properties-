import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import lake from '../../images/lake.jpg';
import mtRainier from '../../images/mtRainier.jpg';
import water from '../../images/water.png';

const useStyles = makeStyles((theme)=>({
    img: {
        width: "100%",
        height: '400px'

    },
}));

const featuredArr =[lake, mtRainier, water];

export default function Featured() {
    const classes = useStyles();

    return (
        <div>
            <Carousel>
                {featuredArr.map((image)=>(
                    <img alt="featured properties" className={classes.img} src={image}/>
                ))}
            </Carousel>
        </div>
    )
}
