import React from 'react'
import ButtonRemy from '../ButtonRemy/ButtonRemy';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((Theme) =>
  createStyles({
    text: {
        textAlign: "center",
        fontStyle: 'italic',
    },
  }),
);
export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Container maxWidth="md" className={classes.text}>
                <h3 >Let us know how our team can help you find your dream home today.</h3>
                <ButtonRemy
                    text="contact us"
                    link="/contact"
                />
            </Container>
        </div>
    )
}
