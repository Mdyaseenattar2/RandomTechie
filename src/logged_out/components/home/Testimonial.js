import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
//import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
//import calculateSpacing from "./calculateSpacing";
//import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
//import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
//import useWidth from "../../../shared/functions/useWidth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  testimonial: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
    },
    "@media (min-width: 1280px)": {
      paddingRight: theme.spacing(0),
    },
  },
  box: {
    //[theme.breakpoints.between("xs", "sm", "md")]:
    //{
    padding: 30,
    border: "2px solid",
    borderColor: "#f1f1f1",
    borderRadius: 7,
    marginBottom: 70,
    height: "auto",
    background: "#f7fbfe",
    display: "flex",
    flexDirection: "column",
    width: "225px",
    minHeight: "400px",
    alignItems: "center",
    justifyContent: "center",
    // },
    [theme.breakpoints.between("sm", "md")]: {
      width: "80%",
    },
    "@media (min-width: 1280px)": {
      padding: 30,
      border: "2px solid",
      borderColor: "#f1f1f1",
      borderRadius: 7,
      marginBottom: 70,
      height: "auto",
      background: "#f7fbfe",
      marginLeft: 60,
    },
  },
  cardmedia: {
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
    "@media (min-width: 1280px)": {
      //marginLeft: 85,
    },
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: -10,
    // "@media (min-width: 1280px)": {
    //   position: "absolute",
    //   left: 70,
    // },
  },
}));

const iconSize = 20;

const data = [
  {
    id: 1,
    username: "Cary Byrd",
    lefticon: <mat-icon style={{ fontSize: iconSize }}>format_quote</mat-icon>,
    testimonial:
      "I would say quality can be expected from only few and Random Techie tops in that list.",
    image: "/images/logged_out/testimonials/testimonials-1.jpeg",
    designation: " CEO & Founder of eDrugSearch",
  },
  {
    id: 2,
    username: "ShivaKumar Bhujangappa",
    testimonial:
      "I would Say Random Techie Is the best in providing us the great resources everytime we need.",
    image: "/images/logged_out/testimonials/testimonials-2.jpeg",
    designation:
      "Founder at Dynamicbit Technologies Pvt Ltd.- for service consultancy",
  },
  {
    id: 3,
    username: "Vikas Chandra",
    testimonial:
      "Random Techie been pivotal in building solution for my start up. Thanking Tripti and Team for their good work and wishing her all the very best in her business.",
    image: "/images/logged_out/testimonials/testimonials-3.jpeg",
    designation: "CEO & Founder of Bon-Cuisine",
  },
  {
    id: 4,
    username: "Sunil Parte",
    testimonial:
      "Trust and confidence is always i believe in and Random Techie address it very well.",
    image: "/images/logged_out/testimonials/testimonials-4.jpeg",
    designation:
      "founder, CEO- MindsClik| solutoz | strategy & Solutions For staffs augmentation",
  },
  {
    id: 5,
    username: "Rajiv Upadhyay",
    testimonial:
      "Random Techie design and ability to drive the system is best strength they have.",
    image: "/images/logged_out/testimonials/testimonials-5.jpeg",
    designation:
      "Founder Clover Bay Technologies Pvt. Ltd For staffs augmentation.",
  },
];

function Testimonial(props) {
  //const { theme } = props;
  //const width = useWidth();
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Testimonials
        </Typography>

        <Grid className={classes.testimonial}>
          <Swiper
            spaceBetween={70}
            breakpoints={{
              375: {
                width: 240,
                slidesPerView: 1,
              },

              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1.5,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
          >
            {data.map((user) => (
              <SwiperSlide key={user.id} className="slide">
                <div className={classes.box}>
                  <CardMedia
                    component="img"
                    image={user.image}
                    title=""
                    alt=""
                    className={classes.profileImage}
                  />
                  <CardMedia />
                  <div className={classes.cardmedia}>
                    <h3>{user.username} </h3>
                    <h5 style={{ fontWeight: 500 }}>{user.designation}</h5>
                    <p
                      style={{
                        color: "#444444",
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      {user.testimonial}{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </div>
    </div>
  );
}

Testimonial.propTypes = {};

export default withTheme(Testimonial);
