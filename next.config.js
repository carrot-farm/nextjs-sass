const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true // css 모듈도 사용하려면
});
