import React from 'react'
import Featured from '../../components/Featured/Featured';
import Contact from '../../components/Contact/Contact';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((Theme) =>
  createStyles({
    
  }),
);

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Featured/>
            <Contact/>  
        </div>
    )
}
