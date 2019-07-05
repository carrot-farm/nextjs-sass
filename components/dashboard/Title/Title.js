import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Title = ({ children }) => (
  <Typography component={"h2"} variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
);

export default Title;

Title.propTypes = {
  children: PropTypes.node
};
