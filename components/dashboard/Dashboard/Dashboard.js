import { useState } from "react";
import classNames from "classnames/bind";
import {
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Drawer,
  CssBaseline
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";

import styles from "./Dashboard.scss";
import MenuDrawer from "../Drawer";
// import Chart from "../Chart";
import Deposits from "../Deposits";
import Orders from "../Orders";

const cx = classNames.bind(styles);

// ===== 상단 바
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleDrawerToggle = sw => {
    setIsOpen(sw);
  };
  return (
    <div className={cx("dashborad-root")}>
      <CssBaseline />
      {/* 상단 바 */}
      <AppBar position="absolute" className={cx("app-bar-root", { isOpen })}>
        <Toolbar>
          {/* 왼쪽 메뉴 버튼 */}
          <IconButton
            className={cx("menu-button", isOpen && "hide")}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerToggle(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* 왼쪽 버튼 옆 텍스트 */}
          <Typography
            className={cx("title")}
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
          >
            Dashboard
          </Typography>
          {/* 오른쪽 알림 버튼 */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* 메뉴 drawer */}
      <MenuDrawer isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
      {/* 메인 컨텐츠 */}
      <div className={cx("main_content-wrpper")}>
        <div className={cx("main_top-space")} />
        <Container maxWidth="lg" className={cx("main_content-container")}>
          <Grid container spacing={3}>
            {/* chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={cx("paper")}>
                차트 서버에서 랜더링 시 에러남.
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* 주문액 */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={cx("paper")}>
                <Deposits />
              </Paper>
            </Grid>
            {/* 최근 주문 */}
            <Grid item xs={12}>
              <Paper className={cx("paper")}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
