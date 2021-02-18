import React from 'react';
import {Container, Grid} from '@material-ui/core/';
import AmericanLakeSquare from '../../images/AmericanLakeSquare.jpg';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Tacoma from '../../images/Tacoma.jpg';
import Tacoma800x800 from '../../images/Tacoma800x800.jpg';
import Neighborhood from '../../components/Neighborhood/Neighborhood';
import FadeInSection from '../../components/FadeIn/FadeInSection';
import Divider from '../../components/Divider/Divider';

const neighborhoodArr = [
    {
        name: "Lakewood",
        boolean: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: AmericanLakeSquare
    },
    {
        name: "Tacoma",
        boolean: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: Tacoma800x800
    },
]

const useStyles = makeStyles((theme)=>({
    
}));

export default function Neighborhoods() {
    const classes = useStyles();

    return (
        <div>
            {neighborhoodArr.map(place=>(
                <div>

                <Neighborhood
                    name={place.name}
                    description={place.description}
                    boolean={place.boolean}
                    image={place.image}
                />
                <Divider/>
                </div>
            ))}    
        </div>
    )
}