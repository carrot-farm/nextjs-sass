import { Container, Grid, Paper, Typography } from "@material-ui/core";

import classNames from "classnames/bind";

import styles from "./styles.scss";

const cx = classNames.bind(styles);

const Main = ({}) => (
  <>
    {/* <Container maxWidth={"lg"}> */}
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>xs 12</Paper>
      </Grid>
      {/* <Grid item xs={4}>
      <Paper>xs 12</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>xs 12</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>xs 12</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>xs 12</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>xs 12</Paper>
    </Grid> */}
    </Grid>
    {/* </Container> */}
  </>
);

export default Main;
