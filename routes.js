const routes = require("next-routes")();
/*
  name: Router에서 링크로 바로 직접 호출하지 않고 name을 호출하여 라우팅
  pattern: url 패턴을 의미한다.
  page: pages 디렉토리의 어떤 파일을 바라볼 것인지.(.js, .jsx등의 확장자는 생략)
*/
routes
  .add({ name: "index", pattern: "/", page: "index" })
  .add({ name: "about", pattern: "/about", page: "about" })
  .add({ name: "user", pattern: "/user/:id", page: "user" })
  .add({
    name: "grid",
    pattern: "/materialUi/grid",
    page: "materialUi/grid"
  });

module.exports = routes;
