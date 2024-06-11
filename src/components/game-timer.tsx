import { Box, Grid, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import TimerIcon from "@mui/icons-material/AvTimer";

const GameTimer = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box mx={4}>
      <Grid container justifyContent={"space-around"} alignItems={"center"}>
        <Grid item xs={1}>
          <TimerIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            sx={{
              "--LinearProgress-radius": "20px",
            }}
            variant="determinate"
            value={progress}
          ></LinearProgress>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameTimer;
