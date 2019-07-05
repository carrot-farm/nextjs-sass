import React, { Component } from "react";
import "./ScrollMagic.scss";
// import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";

class ScrollMagicComponent extends Component {
  // controller = new ScrollMagic.Controller();
  // scene;
  // componentDidMount() {
  //   this.scene = new ScrollMagic.Scene({
  //     triggerElement: "#trigger", // 이 것을 기준으로 해당 액션이 일어 난다.
  //     duration: 400 // 애니메이션이 일어나는 기간. 스크롤 픽셀.
  //     // enter 이벤트 발생시 처음부터 끝까지 풀로 애니메이션이 발생
  //     // duration과 혼용 안됨
  //     // tweenChanges: true
  //   })
  //     .setTween(".header-container", 0.5, {
  //       backgroundColor: "#333333",
  //       opacity: 0.9,
  //       color: "#fff",
  //       className: "+=fish" // 클래스 토글
  //     })
  //     .on("enter leave", this.updateBox) // 애니메이션 시작과 끝에 호출
  //     .addIndicators({ name: "1 " })
  //     .addTo(this.controller);
  // }
  // updateBox = evt => {
  //   console.log(evt);
  // };
  // componentWillUnmount() {
  //   this.scene.destroy(); // 페이지 나갈 때 삭제 안해주면 scene이 여러개 생겨 버린다.
  // }
  render() {
    return (
      <div className="scrollmagic-root">
        <div
          className="header-container"
          // style={{ width: "100%", height: "450px", backgroundColor: "#ff9547" }}
        />
        nextjs에서 gsap로드가 안됨.
      </div>
    );
  }
}

export default ScrollMagicComponent;
