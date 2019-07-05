import classNames from "classnames/bind";
import { IconButton, Drawer, Divider, List } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

import styles from "./Drawer.scss";
import { MainListItems, secondaryListItems } from "../ListItems";

const cx = classNames.bind(styles);

// ===== drawer
const MenuDrawer = ({ isOpen, handleDrawerToggle }) => (
  <>
    <Drawer
      className={cx("drawer-root")}
      variant="permanent"
      open={isOpen}
      onClose={() => handleDrawerToggle(false)}
    >
      <div className={cx("drawer-paper", { isOpen })}>
        <div className={cx("drawer-row", "top")}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{MainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </div>
    </Drawer>
  </>
);

export default MenuDrawer;
