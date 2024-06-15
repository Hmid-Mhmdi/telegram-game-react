import { CircularProgress, Grid } from "@mui/material";

const Loading = () => (
  <Grid
    container
    justifyContent={"center"}
    alignItems={"center"}
    sx={{ minHeight: "100vh" }}
  >
    <CircularProgress />
  </Grid>
);

export default Loading;
