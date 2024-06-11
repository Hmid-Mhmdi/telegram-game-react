import { Box, Grid, Paper, Typography } from "@mui/material";
import FindIcon from "@mui/icons-material/help";

const GameCards = () => {
  return (
    <Box mx={2}>
      <Paper elevation={2}>
        <Box py={2}>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Grid
              xs={1}
              item
              container
              direction={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={2}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems={"start"}
                height={85}
              >
                <Typography>X4</Typography>
              </Grid>

              <Grid
                item
                container
                justifyContent="center"
                alignItems={"center"}
                height={85}
                pb={1}
              >
                <Typography>X2.5</Typography>
              </Grid>

              <Grid
                item
                container
                justifyContent="center"
                alignItems={"end"}
                height={85}
              >
                <Typography pb={2}>X1.5</Typography>
              </Grid>

              <Grid
                item
                container
                justifyContent="center"
                alignItems={"end"}
                height={85}
              >
                <Typography>X0.75</Typography>
              </Grid>
            </Grid>
            <Grid xs={10} item container direction={"column"} spacing={2}>
              <Grid item container direction={"row"}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
              </Grid>
              <Grid item container direction={"row"}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
              </Grid>

              <Grid item container direction={"row"}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
              </Grid>

              <Grid item container direction={"row"}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems={"center"}
                  xs={3}
                  height={85}
                  sx={{ border: "1px solid white" }}
                  borderRadius={2}
                >
                  <FindIcon fontSize="large" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default GameCards;
