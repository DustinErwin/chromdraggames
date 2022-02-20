import CardDual from "../components/Cards/CardDual/CardDual";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function AboutPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="spacer2"></div>

      <CardDual></CardDual>

      <div className="spacer2"></div>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
