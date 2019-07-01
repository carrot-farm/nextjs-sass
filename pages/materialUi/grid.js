import PageTemplate from "../../components/templates/PageTemplate";
import MainContainer from "../../components/pages/MaterialUiGrid";

const main = ({ url }) => {
  return <PageTemplate url={url} Main={MainContainer} />;
};

export default main;
