import classNames from "classnames/bind";

import styles from "./PageTemplate.scss";
import Nav from "../../../components/common/Nav";

const cx = classNames.bind(styles);

const PageTemplate = ({ Main, url }) => {
  return (
    <div className={cx("page-template-root")}>
      <Nav url={url} />
      <main className={cx("main")}>
        <Main url={url} />
      </main>
      <footer className={cx("footer")} />
    </div>
  );
};

export default PageTemplate;
