import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Link, Router } from "../../../routes";
import styles from "./styles.scss";

const cx = classNames.bind(styles);

const Nav = ({ url }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (url.pathname === "/materialUi/dashboard") {
      setHide(true);
    }
  }, []);

  return (
    <>
      <ul className={cx("nav-root", { hide })}>
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
        <li>
          <Link route="grid">
            <a>material grid</a>
          </Link>
        </li>
        <li>
          <Link route="dashboard">
            <a>material dashboard</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
