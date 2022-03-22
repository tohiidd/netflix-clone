import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Index() {
  return (
    <>
      <Header />
      <Cards />
      <Footer bgColor={"bg-black"} selectBgColor={"bg-black"} />
    </>
  );
}

export default Index;
