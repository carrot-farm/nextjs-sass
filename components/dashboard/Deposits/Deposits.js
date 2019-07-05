import classNames from "classnames/bind";
import { Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

import styles from "./Deposits.scss";
import Title from "../Title";

const cx = classNames.bind(styles);

const Deposits = () => (
  <>
    <Title>기간내 판매액</Title>
    <Typography component="p" variant="h4">
      ￦ 500,000
    </Typography>
    <Typography color="textSecondary" className={cx("deposit-context")}>
      2019.07.04
    </Typography>
  </>
);

export default Deposits;
