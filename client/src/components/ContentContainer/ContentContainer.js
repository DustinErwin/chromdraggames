import ProductCard from "../ProductCard/ProductCard";
import "./ContentContainer.css";

export default function ContentContainer(props) {
  console.log(props);
  const productList = props.products;
  // check for page state
  return (
    <>
      <div>
        <div className="nav-gap"></div>
        <div className="content">
          <div className="red-border">
            <span className="content-title">{props.title}</span>
            <span className="content-description">{props.description}</span>
            <div className="product-card-box">
              {productList.map((product) => (
                <ProductCard
                  key={product.prodTitle}
                  img={product.img}
                  alt={product.alt}
                  prodTitle={product.prodTitle}
                  prodDescription={product.prodDescription}
                ></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
