import data from "../data/TableTopContent.json";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function TableTopPage() {
  return (
    <div>
      <NavBar></NavBar>
      <ContentContainer
        title={data[0].title}
        description={data[0].description}
        products={data[0].products}
      ></ContentContainer>
      <Footer></Footer>
    </div>
  );
}

export default TableTopPage;
