import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import * as countActions from "../../store/modules/count";
import { main } from "../../actions";
import Main from "../../components/pages/Main";

class MainContainer extends Component {
  componentDidMount() {}

  // ===== 증가
  handleIncClick = () => {
    const { MainActions } = this.props;
    MainActions.incCount();
  };

  // ===== 감소
  handleDecClick = () => {
    const { MainActions } = this.props;
    MainActions.decCount();
  };

  // ===== take 예제 A
  handleTakeAClick = () => {
    const { MainActions } = this.props;
    MainActions.takeTestA({ data: "takeA" });
  };

  // ===== take 예제 B
  handleTakeBClick = () => {
    const { MainActions } = this.props;
    MainActions.takeTestB({ data: "takeB" });
  };

  // ===== fetch data
  handleFetchDataCilck = () => {
    const { MainActions } = this.props;
    MainActions.fetchRequested();
  };

  // ===== repeat take
  handleRepeatTakeClick = () => {
    const { MainActions } = this.props;
    MainActions.repeatTake();
  };

  // ===== test chrottle
  handleThrottleClick = () => {
    const { MainActions } = this.props;
    MainActions.handleThrottleNum();
  };

  render() {
    const { num, takeTestText, throttleNum } = this.props;
    return (
      <Main
        num={num}
        takeTestText={takeTestText}
        throttleNum={throttleNum}
        handleIncClick={this.handleIncClick}
        handleDecClick={this.handleDecClick}
        handleTakeAClick={this.handleTakeAClick}
        handleTakeBClick={this.handleTakeBClick}
        handleFetchDataCilck={this.handleFetchDataCilck}
        handleRepeatTakeClick={this.handleRepeatTakeClick}
        handleThrottleClick={this.handleThrottleClick}
      />
    );
  }
}

export default connect(
  state => ({
    num: state.main.get("num"),
    takeTestText: state.main.get("takeTestText"),
    throttleNum: state.main.get("throttleNum")
  }),
  dispatch => ({
    MainActions: bindActionCreators(main.actions, dispatch)
  })
)(MainContainer);
