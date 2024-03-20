import "./ManagePage.css";
import AddEventBtn from "../components/Buttons/AddEventBtn/AddEventBtn";
import AddProductBtn from "../components/Buttons/AddProdustBtn/AddProductBtn";
import AddFeatureBtn from "../components/Buttons/AddFeatureBtn/AddFeatureBtn";

function ManagePage() {
  return (
    <>
      <div className="console">
        <h2 className="title">Management Page</h2>
        <AddEventBtn></AddEventBtn>
        <AddProductBtn></AddProductBtn>
        <AddFeatureBtn></AddFeatureBtn>
      </div>
    </>
  );
}

export default ManagePage;
