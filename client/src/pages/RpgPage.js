import "./RpgPage.css";
import data from "../data/RpgContent.json";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ContentContainer from "../components/ContentContainer/ContentContainer";

function RpgPage() {
  console.log(data);
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

export default RpgPage;
