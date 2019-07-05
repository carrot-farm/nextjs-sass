import PageTemplate from "../../components/templates/PageTemplate";
import Dashboard from "../../components/dashboard/Dashboard";

const main = ({ url }) => {
  return <PageTemplate url={url} Main={Dashboard} />;
};

export default main;
