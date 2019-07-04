import { useEffect } from "react";

import PageTemplate from "../components/templates/PageTemplate";
import MainContainer from "../containers/pages/MainContainer";

const Main = ({ url }) => {
  return <PageTemplate url={url} Main={MainContainer} />;
};

// Main.getInitialProps = () => {
//   return {
//     data: "tata"
//   };
// };

export default Main;
