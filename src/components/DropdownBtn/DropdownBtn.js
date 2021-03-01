import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme)=>({
    outline: {
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'var(--secondaryColor)',
        width: 'auto',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: 'white',
        '&:hover': {
           backgroundColor: 'var(--thirdColor)',
           color: 'white'
        },
    },
    textStyle: {
        color: "var(--secondaryColor)",
        textTransform: 'uppercase',
    },
    link: {
        textDecoration: 'none'
    }
}));
export default function DropdownBtn(props) {
    const classes = useStyles();

    // const [showDetails, setShowDetails] = useState(false);


    return (
        <div>
            <button className={classes.outline}>
                <h3 className={classes.textStyle}>{props.text}</h3>
                <ExpandMoreIcon/>
            </button> 
        </div>
    )
}
