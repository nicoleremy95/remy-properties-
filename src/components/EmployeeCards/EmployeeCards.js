import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((Theme) =>
  createStyles({
    employee: {
        marginBottom: "100px",
        width: '400px'
    },
    image: {
        borderRadius: "50%",
        maxHeight: '250px',
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    text: {
        textAlign: 'center'
    },
    position: {
        fontStyle: "italic",
    }
  }),
);

export default function EmployeeCards(props) {
    const classes = useStyles();

    return (
        <div className={classes.employee}>
            <img className ={classes.image} src={props.img} alt={props.name}/>
            <div className={classes.text}>
                <h3>{props.name}</h3>
                <h3 className={classes.position}>{props.position}</h3>
                <h3 className={classes.position}>{props.properties}</h3>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
            </div>  
        </div>
    )
}
