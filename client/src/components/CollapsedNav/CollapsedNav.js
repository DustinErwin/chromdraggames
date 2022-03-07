import "./CollapsedNav.css";

export default function CollapsedNav() {
  const navToggle = () => {
    var menu = document.getElementById("mobile-nav");
    if (menu.className === "closedNavMobile") {
      menu.className = "openNavMobile";
      //menuItems.className = "openNavMobile";
    } else {
      menu.className = "closedNavMobile";
      //menuItems.className = "closedNavMobile";
    }
  };

  return (
    <button type="button" className="hamburger" onClick={() => navToggle()}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
}
