import { Grid } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import user1 from '../../public/casey-meraz-headshot-300x300-1.png';
import user2 from '../../public/S.-Hallam-002.jpg';
import user3 from '../../public/mike-ramsey.jpeg';
import quote from '../../public/quote_marks.svg';

const useStyles = makeStyles({
    text: {
        fontWeight: 700,
        marginTop: 20,
        color: 'grey'
    }
})

const Testimonial = ({properties}) => {
    console.log(properties)
    const classes =useStyles();

    return (
        <div style={{position: 'relative', left: '150px', top: '100px'}}>
            <Grid container spacing={3}>
                <Grid item lg={3}>
                    <div><Image src={user1} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            If you want to save time and save money, then BrightLocal must be part of your local SEO toolkit.
                            </Typography>
                            <div className="user-data">
                            <small>{properties[0].username}</small>
                            <Typography className={classes.text}>Founder and CEO, Juris Digital</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div><Image src={user2} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            If you want to save time and save money, then BrightLocal must be part of your local SEO toolkit.
                            </Typography>
                            <div className="user-data">
                            <small>Casey Marez</small>
                            <Typography className={classes.text}>Founder and CEO, Juris Digital</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div><Image src={user3} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            If you want to save time and save money, then BrightLocal must be part of your local SEO toolkit.
                            </Typography>
                            <div className="user-data">
                            <small>Casey Marez</small>
                            <Typography className={classes.text}>Founder and CEO, Juris Digital</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Testimonial;