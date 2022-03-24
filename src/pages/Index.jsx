import Helmet from "react-helmet";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Index() {
  return (
    <>
      <Helmet>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
      </Helmet>
      <Header />
      <Cards />
      <Footer bgColor={"bg-black"} selectBgColor={"bg-black"} />
    </>
  );
}

export default Index;
