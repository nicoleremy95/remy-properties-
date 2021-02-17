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
        boxShadow: "10px 10px 5px #ccc",
        
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
                <h4>{props.name}</h4>
                <h3 className={classes.position}>{props.position}</h3>
                <h4 className={classes.position}>{props.properties}</h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>  
        </div>
    )
}
