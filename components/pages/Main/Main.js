// import classNames from "classnames/bind";

// import styles from "./styles.scss";

// const cx = classNames.bind(styles);

const Main = ({
  num,
  takeTestText,
  throttleNum,
  handleFetchDataCilck,
  handleIncClick,
  handleDecClick,
  handleTakeAClick,
  handleTakeBClick,
  handleRepeatTakeClick,
  handleThrottleClick
}) => (
  <>
    <hgroup>
      <h1>this is Home</h1>
      {/* <h2>Hello {url.id || "Guest"}!</h2> */}
    </hgroup>
    <div>
      <span>{num}</span>
    </div>
    <div className="buttons">
      <button className="incButton" onClick={() => handleIncClick()}>
        +
      </button>
      <button className="decButton" onClick={() => handleDecClick()}>
        -
      </button>
    </div>
    <div>
      <div>{takeTestText}</div>
      <button onClick={() => handleTakeAClick()}>take A</button>
      <button onClick={() => handleTakeBClick()}>take B</button>
    </div>
    <div>
      <button onClick={handleFetchDataCilck}>fetchData</button>
    </div>
    <div>
      <button onClick={handleRepeatTakeClick}>repeatTake</button>
    </div>
    <div>
      {throttleNum}
      <br />
      <button onClick={handleThrottleClick}>throttle</button>
    </div>
  </>
);

export default Main;
