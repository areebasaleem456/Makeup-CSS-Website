import React from "react";
import "../styles/product.css";

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: "Brushes Set",
      price: 2000,
      description: "Luxury Brushes",
      image: "/brushset.jpg",
    },
    {
      id: 2,
      name: "Foundation",
      price: 2300,
      description: "Perfect Match",
      image: "/foundation.jpg",
    },
    {
      id: 3,
      name: "Tints",
      price: 1300,
      description: "Happy Cheeks",
      image: "/tint.jpg",
    },
    {
      id: 4,
      name: "Eye Pallete",
      price: 1700,
      description: "Palette Perfection",
      image: "/eyepallette.jpg",
    },
    {
      id: 5,
      name: "Lip Shades",
      price: 800,
      description: "Vibrant Lips",
      image: "/lipsticks.jpg",
    },
    {
      id: 6,
      name: "Luxury Perfumes",
      price: 4800,
      description: "Dreamy Scents",
      image: "/perfumes.jpg",
    },
  ];

  return (
    <div className="container">
        <h1 className="fade-in">OUR PRODUCTS:</h1>
      <div className="cosmetic">
        {productsData.map((makeup) => (
          <div key={makeup.id} className="makeup-card">
            <img src={makeup.image} alt={makeup.name} />
            <h3>{makeup.name}</h3>
            <p>{makeup.description}</p>
            <div>RS {makeup.price}</div>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
