import classNames from "classnames/bind";

import { Link, Router } from "../../../routes";
import styles from "./styles.scss";

const cx = classNames.bind(styles);

const Nav = () => (
  <>
    <ul>
      <li className={cx("border")}>
        <Link route="index">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link route="about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link route="user" params={{ id: "hi" }}>
          <a>User hi</a>
        </Link>
      </li>
      <li>
        <Link route="user" params={{ id: "hello" }}>
          <a>User hello</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Nav;
