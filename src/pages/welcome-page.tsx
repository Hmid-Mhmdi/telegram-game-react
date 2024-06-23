import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { Grid } from "@mui/material";
import Welcome1 from "../assets/vectors/welcome-1.svg";
import Welcome2 from "../assets/vectors/welcome-2.svg";
import Welcome3 from "../assets/vectors/welcome-3.svg";
import { useNavigate } from "react-router";

const images = [
  {
    title: "Start the game and have fun",
    imgPath: Welcome1,
  },
  {
    title: "Play And Eran Our Token",
    imgPath: Welcome2,
  },
  {
    title: "Invite your friends and get rewards",
    imgPath: Welcome3,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100% !important",
    display: "flex !important",
    justifyContent: "space-around !important",
    alignItems: "center !important",
  },
  dot: {
    width: "8px !important",
    height: "8px !important",
    borderRadius: "10px !important",
  },
  dotActive: {
    width: "25px !important",
    height: "8px !important",
    borderRadius: "4px !important",
  },
});

function WelcomePage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    navigate("/telegram-game-react/home");
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box height={25}></Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid
                mt={6}
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid sm={4} item>
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      maxWidth: "430px",
                      alignSelf: "center",
                      height: "60vh",
                    }}
                    src={step.imgPath}
                    alt={step.title}
                  />
                  <Box height={6}></Box>
                  <Typography variant="h5" textAlign={"center"}>
                    {step.title}
                  </Typography>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Box height={40}></Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        classes={{
          root: classes.root,
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            Skip
          </Button>
        }
      />
    </Box>
  );
}

export default WelcomePage;
