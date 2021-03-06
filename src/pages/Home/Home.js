import React from 'react'
import Featured from '../../components/Featured/Featured';
import LetUsKnow from '../../components/LetUsKnow/LetUsKnow';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((Theme) =>
  createStyles({
    box: {
        backgroundColor: '#f2f2f2'
    }
  }),
);

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Featured/>
            <LetUsKnow/>  
        </div>
    )
}
