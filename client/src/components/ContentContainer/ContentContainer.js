import "./ContentContainer.css";

export default function ContentContainer() {
  // check for page state
  return (
    <>
      <div>
        <div className="nav-gap"></div>
        <div className="content">
          <div className="red-border">
            <span className="content-title">Role Playing Games</span>
            <span className="content-description">
              Immerse yourself in the fantastic worlds created in Faerun, or
              other popular role playing universes like, Aliens, Pathfinder and
              more!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
