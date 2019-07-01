import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";

export default class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { query, pathname, asPath }
    } = this.props;

    // ==== _app.js를 사용하면 url을 넘기지 않아서 수동으로 작성.
    // 페이지 이동에 필요할 push 등은 넘기지 않았다.
    pageProps.url = {
      query,
      pathname,
      asPath
    };

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
