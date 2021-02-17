import React from 'react';
import {Container, Grid} from '@material-ui/core/';
import Jason from '../../images/Jason.png';
import Jeremy from '../../images/Jeremy.jpg';
import Kelly from '../../images/Kelly.jpg';
import Loren from '../../images/Loren.jpg';
import Rich from '../../images/Rich.jpg';
import Nicole from '../../images/Nicole.jpg';
import Tanya from '../../images/Tanya.jpg';
import Claire from '../../images/Claire.jpg';
import EmployeeCards from '../EmployeeCards/EmployeeCards';
import { createStyles, makeStyles} from '@material-ui/core/styles';


const employeeArr =[
    {
        name: "Jeremy",
        img: Jeremy,
        position: "Maintenance Manager",
        phone: "(773)-710-9593",
        email: "management@remy-properties.com"
    },
    {
        name: "Kelly",
        img: Kelly,
        position: "Site Manager",
        properties: "Allenmore Brownstones",
        phone: "(253) 310-7442",
        email: "kellys@remy-properties.com"
    },
    {
        name: "Loren",
        img: Loren,
        position: "Site Manager",
        properties: "Gravely Lake Brownstones and Villa Plaza Apartments",
        phone: "(253) 279-1374",
        email: "management@remy-properties.com"
    },
    {
        name: "Rich",
        img: Rich,
        position: "Property Manager",
        phone: "(253) 279-4242",
        email: "richm@remy-properties.com"
    },
    {
        name: "Tanya",
        img: Tanya,
        position: "Leasing Manager",
        phone: "(253) 365-2005",
        email: "tonyaw@remy-properties.com"
    },
    {
        name: "Claire",
        img: Claire,
        position: "Office Manager",
        phone: "(253) 625-7806",
        email: "claires@remy-properties.com"
    },
    {
        name: "Nicole",
        img: Nicole,
        position: "Assistant Office Manager",
        phone: "(253) 625-7902",
        email: "nicoler@remy-properties.com"
    },
    {
        name: "Jason",
        img: Jason,
        position: "Maintenance Worker",
        phone: "(253) 441-1133",
        email: "management@remy-properties.com"
    },
]



const useStyles = makeStyles((Theme) =>
    createStyles({
      box: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }
    }),
  );
  
export default function Employees() {
    const classes = useStyles();
    return (
        <div className={classes.box}>
                {employeeArr.map(employee=>(
                    <EmployeeCards
                        name={employee.name}
                        img={employee.img}
                        position={employee.position}
                        properties={employee.properties}
                        phone={employee.phone}
                        email={employee.email}
                    />
                ))}            
        </div>
    )
}
