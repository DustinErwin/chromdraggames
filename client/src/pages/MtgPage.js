import "./MtgPage.css";
import data from "../data/MTGContent.json";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function MtgPage() {
  return (
    <>
      <NavBar></NavBar>
      <ContentContainer
        title={data[0].title}
        description={data[0].description}
        products={data[0].products}
      ></ContentContainer>
      <Footer></Footer>
    </>
  );
}

export default MtgPage;
