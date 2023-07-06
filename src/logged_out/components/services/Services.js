
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CardActions, Button, Grid, Box, CardMedia, Typography, CardContent, Card, CardActionArea } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
//import useMediaQuery from "@mui/material/useMediaQuery";




const styles = (theme) => ({
    servicesContentWrapper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0),
        },
        maxWidth: 1280,
        width: "100%",
    },
    wrapper: {
        minHeight: "60vh",
    },
    noDecoration: {
        textDecoration: "none !important",
    },
    heading: {
        marginBottom: theme.spacing(5)
    },
});

const Services = (props) => {
    const { classes, selectServices, theme } = props;
    // const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
    // const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        selectServices();
    }, [selectServices]);

    return (

        <Box
            display="flex"
            justifyContent="center"
            className={classNames(classes.wrapper, "lg-p-top")}
        >


            <div className={classes.servicesContentWrapper}>
                <div className={classes.heading}>
                    <Typography variant="h4" align="center" style={{ fontWeight: 500 }}>Services</Typography>

                    <Typography align="center" style={{ marginTop: 20 }}>
                      We  Delivers Cutting-Edge Solutions for Businesses Worldwide.
                    </Typography>
                </div>
                <Grid container style={{ paddingLeft: 70, marginBottom: 130 }}>



                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="images/logged_out/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 10 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Custom App Development
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="Justify">
                                        Our team excels in developing tailor-made applications from scratch. We closely collaborate with you to understand your specific requirements for your business objectives.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 10 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Mobile App Development
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="Justify">
                                        In the mobile-first era, we specialize in creating captivating mobile applications for both iOS and Android platforms. Whether you need a native app or a cross-platform solution.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="images/logged_out/domenico-loia-EhTcC9sYXsw-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 10 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Web Application Development
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="Justify">
                                      From interactive websites to complex web applications, we utilize modern frameworks and technologies to deliver fast, secure, and visually stunning web solutions. 
                                    </Typography>
                                </CardContent>
                                <CardActions spacing={1} align={'center'}>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>


                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 10 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        UI/UX <br/> Design
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="Justify">
                                        We believe in the power of intuitive and visually appealing designs. Our talented UI/UX designers create captivating interfaces and deliver an exceptional user experience.
                                    </Typography>
                                </CardContent>
                                <CardActions spacing={1} align={'center'}>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                </Grid>


                {  /* CASE STUDY START */}


                <div className={classes.heading}>
                    <Typography variant="h4" align="center" style={{ fontWeight: 500 }}>Case Studies</Typography>
                </div>
                <Typography align="center">Revolutionizing Efficiency: A Case Study of Random Techie Company's Game-Changing Innovations and Strategic Growth.</Typography>


                <Grid container style={{ paddingLeft: 80, marginBottom: 30 , marginTop: 10}}>
                    
                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} style={{
                            backgroundImage: "url('./images/logged_out/case1.png')", backgroundPosition: '130%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}
                        >
                        <CardActionArea>
                        <img className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" height="140"/>
                            <div style={{ padding:20}}>
                            <CardContent style={{ backgroundColor:'#fff' }}>
                                <Typography gutterBottom variant="h6" component="div" align="center">
                                            kyndryl.bon-cuisine
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                            Bon-Cuisine provides a curated market place to food service providers vis-Ã -vis a great access of multi-cuisine experience with ease and excellence.
                                </Typography>

                                <CardActions>
                                            <a href="https://kyndryl.bon-cuisine.in/" target="_blank"><Button size="small" >Read More</Button></a>
                                </CardActions>
                            </CardContent>  
                            </div>
                        </CardActionArea>

                        </Card>
                    </Box>

                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }}  
                        style={{
                            backgroundImage: "url('./images/logged_out/case2.png')", backgroundPosition: '85%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat',
            
                        }}>
                            <CardActionArea>
                            <img className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" height="140"/>
                                <div style={{ padding:20}}>
                                <CardContent  style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                    Moss.ai
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                            Moss.ai is fast and affordable on-boarding of research participants, with the ability to target specific demographics and professions by their Email IDs.
                                    </Typography>
                                

                                    <CardActions>
                                            <a href="http://moss.simplibot.com/" target="_blank" ><Button size="small">Read More</Button></a>
                                    </CardActions>
                                </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} 
                        style={{
                            backgroundImage: "url('./images/logged_out/domenico-loia-EhTcC9sYXsw-unsplash.jpg')",
                            backgroundPosition: '70%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <CardActionArea>
                            <img className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" height="140"/>
                              <div style={{ padding:20}}>
                                <CardContent style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Limere Radses                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Limere Radses are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>

                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
                                </CardContent>
                            </div>
                               

                            </CardActionArea>
                        </Card>
                    </Box>


                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} 
                        style={{
                            backgroundImage: "url('./images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg')",
                            backgroundPosition: '80%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <CardActionArea>
                            <img className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img" height="140"/>
                                 <div style={{ padding:20}}>
                                <CardContent style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Lobira Duno
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Lobira Dunos are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>

                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
                                </CardContent>
                                
                                </div>
                               
                            </CardActionArea>
                        </Card>
                    </Box>

                </Grid>

                <Grid container style={{ padding: 80,  marginTop: 10 }}>

                <Typography  variant="h5"><strong>The client</strong></Typography>
                <p>Open with a short introduction to the client – who they are, their background and industry. You can base it on what they say on their company website or LinkedIn profile.</p>


                <Typography  variant="h5"><strong>The challenge</strong></Typography>
                <p>Explain over a paragraph or two the challenges your client was facing and wanting to overcome. There could be just one, or a few different pain points.</p>

                <Typography  variant="h5"><strong>The solution (and your approach to it) </strong></Typography>
                <p>Now for what you actually did. Talk about how your products or services helped solve that problem. Get into the specifics, and also explain your thinking and decision-making throughout the process.</p>

                <Typography  variant="h5"><strong>The results</strong></Typography>
                <p>This is where you lay out It’s always better to use real numbers, not just vague statements like ‘more than doubled their traffic’. Really hammer it home by pulling out the big guns!</p>
                </Grid>         
            </div>
        </Box>

    )
}

Services.propTypes = {
    selectServices: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Services);