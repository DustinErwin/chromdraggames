import React, { useState, useEffect } from "react";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { getSquareProducts } from "../api/square"; // Create an API function to fetch Square products

function BoardGamesPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch Square products when the component mounts
    const fetchProducts = async () => {
      try {
        const squareProducts = await getSquareProducts(); // Assume you have a function to fetch Square products
        setProducts(squareProducts);
      } catch (error) {
        console.error("Error fetching Square products:", error);
      }
    };

    fetchProducts();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <NavBar />
      <ContentContainer
        title="Board Games"
        description="Explore our collection of exciting board games."
        products={products}
      />
      <Footer />
    </div>
  );
}

export default BoardGamesPage;
