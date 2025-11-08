import { useEffect, useState } from "react";
import styles from "../styles/productPage.module.css";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductPageProps {
  selectedSort: string;
   products: Product[];
}
const ProductPage = ({ selectedSort,products }: ProductPageProps) => {
 
 

  
  const sortedProducts = [...products];
  if (selectedSort === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "Newest first") {
    sortedProducts.sort((a, b) => b.id - a.id);
  } 
   const handleIconClick = () => {
    alert("Please sign in to continue.");
  };

  

  return (
    <section className={styles.productPageSection}>
      <div className={styles.productGrid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productPrice}>${product.price}</p>
            <div className={styles.iconContainer}>
              <FiHeart className={styles.icon} title="Add to Wishlist" onClick={handleIconClick}/>
              <FiShoppingCart className={styles.icon} title="Add to Cart" onClick={handleIconClick} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
