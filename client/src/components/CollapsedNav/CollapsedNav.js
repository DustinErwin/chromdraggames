import "./CollapsedNav.css";

export default function CollapsedNav() {
  //let menuItems = document.getElementById("mobileList");

  const navToggle = () => {
    var menu = document.getElementById("mobile-nav");
    console.log(menu);
    if (menu.className === "closedNavMobile") {
      menu.className = "openNavMobile";
      //menuItems.className = "openNavMobile";
    } else {
      menu.className = "closedNavMobile";
      //menuItems.className = "closedNavMobile";
    }
  };

  return (
    <div className="hamburger" onClick={() => navToggle()}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}
