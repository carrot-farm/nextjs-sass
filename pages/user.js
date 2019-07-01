import { Component } from "react";
// import Nav from "../components/Nav";

export default class User extends Component {
  render() {
    const { url } = this.props;
    return (
      <>
        {/* <Nav /> */}
        <h1>User: {url.query.id} </h1>
      </>
    );
  }
}
