import { Typography } from "@mui/material";
import { useLocation } from "react-router";

const NotFoundPage = () => {
  console.log(useLocation().pathname);
  return <Typography>NotFound</Typography>;
};

export default NotFoundPage;
