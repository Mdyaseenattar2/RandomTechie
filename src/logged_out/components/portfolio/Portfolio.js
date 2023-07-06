import React from "react";
//import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
//import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  portfolioContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
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
    marginBottom: theme.spacing(5),
  },
});

function Portfolio(props) {
  const { classes } = props;

  //const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  //const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.portfolioContentWrapper}>
        <div className={classes.heading}>
          <Typography variant="h4" align="center" style={{ fontWeight: 500 }}>
            Portfolio
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default withStyles(styles, { withTheme: true })(Portfolio);
