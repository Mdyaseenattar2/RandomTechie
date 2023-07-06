import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
//import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
//import CloudIcon from "@mui/icons-material/Cloud";
import MeassageIcon from "@mui/icons-material/Message";
//import CancelIcon from "@mui/icons-material/Cancel";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";
//import { CardCvcElement } from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: theme.spacing(0),
    },
    "@media (min-width: 1280px)": {
      padding: theme.spacing(3),
    },
  },
}));

const iconSize = 35;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const features = [
  {
    color: "#00C853",
    headline: "User-Centric Design",
    text: "Our design team excels at creating intuitive, visually appealing interfaces that enhance user engagement and satisfaction.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Cutting-Edge Technologies",
    text: "Our development team stays at the forefront of technological advancements to provide you with the most innovative solutions.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Customized App Development",
    text: "Our team works closely with you to analyze your needs and goals, enabling us to deliver tailor - made app solutions that align perfectly with your vision.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Cross-Platform",
    text: "With the growing diversity of mobile platforms, we recognize the importance of reaching a wider audience.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "User-Centric Design",
    text: "Our design team excels at creating intuitive, visually appealing interfaces that enhance user engagement and satisfaction. By combining aesthetics with usability.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Scalability and Security",
    text: "Our apps are built with scalability in mind, accommodating increased user loads and future enhancements seamlessly.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  // {
  //   color: "#304FFE",
  //   headline: "Feature 7",
  //   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "0",
  //   smDelay: "0",
  // },
  // {
  //   color: "#C51162",
  //   headline: "Feature 8",
  //   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "200",
  // },
  // {
  //   color: "#00B8D4",
  //   headline: "Feature 9",
  //   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "0",
  // },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Feature Image
        </Typography>

        {/* /// */}

        {/* <Typography variant="h3" align="center" style={{
            color: '#012970', fontSize: 38, fontWeight: 700, letterSpacing: 2, marginBottom:60
          }}><strong>Laboriosam et omnis fuga quis dolor direda fara</strong></Typography>


          <Grid spacing={1} columns={16} className="lg-mg-bottom">
            <Grid md={6}>
              <Item>
                <img src="/images/logged_out/features.png" className="img-fluid" alt="" style={{ width: 550 }} />
              </Item>
            </Grid>


          </Grid> */}

        {/* /// */}

        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.grid}
        >
          {features.map((element) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-aos="zoom-in-up"
              data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
              key={element.headline}
            >
              <FeatureCard
                Icon={element.icon}
                color={element.color}
                headline={element.headline}
                text={element.text}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
