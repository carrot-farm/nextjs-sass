import PageTemplate from "../components/templates/PageTemplate";
import MainContainer from "../containers/pages/MainContainer";

const main = ({ url }) => {
  return <PageTemplate url={url} Main={MainContainer} />;
};

export default main;
