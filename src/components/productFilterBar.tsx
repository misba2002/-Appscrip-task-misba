import React, { useState } from "react";
import styles from "../styles/productFilterBar.module.css";
import { FiChevronRight,FiChevronLeft,FiChevronDown, FiChevronsRight } from "react-icons/fi";
import SideBar from "../components/sideBar";
import ProductPage from "./productsPage";
import { FaCheck } from "react-icons/fa";
import { Product } from "../types/product";


interface ProductFilterBarProps {
  initialProducts: Product[];
}




const ProductFilterBar = ({ initialProducts }: ProductFilterBarProps)=>{

    const [products, setProducts] = useState<Product[]>(initialProducts);
    const[showFilter,SetShowFilter]=useState(false);
    const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

    const toggleFilter =()=>{
        SetShowFilter((prev)=>!prev);
    }

    const toggleSortOptions = () => {
    setShowSortOptions((prev) => !prev);
  };

  const handleSelectSort = (option: string) => {
    setSelectedSort(option);
    setShowSortOptions(false);
  };

  const sortOptions = [
    "Recommended",
    "Popular",
    "Newest first",
    "Price: Low to High",
    "Price: High to Low",
  ];
    return(
        <section className={styles.productFilterSection}>
            <hr className={styles.dividerLine} />
            <div className={styles.productFilterDiv}>
                <div className={styles.filterDiv}>
                    <p className={styles.itemNumbers}>3425 Items</p>
                    <button className={styles.filterToggleButton} onClick={toggleFilter}>
                        {showFilter?<FiChevronRight size={18} />:<FiChevronLeft size={18} />}
                        {showFilter?"SHOW FILTER":"HIDE FILTER"}
                    </button>

                </div>
                <div className={`${styles.mobileFilter}`}>
                    FILTER

                </div>

                 <div className={styles.recommendedWrapper}>
  <button className={styles.recommendedButton} onClick={toggleSortOptions}>
    {selectedSort}
    <FiChevronDown size={18} />
  </button>

  {showSortOptions && (
    <div className={styles.sortDropdown}>
      {sortOptions.map((option) => (
        <div
          key={option}
          className={`${styles.sortOption} ${selectedSort === option ? styles.selected : ""}`}
          onClick={() => handleSelectSort(option)}
        >
          {option}
           {selectedSort === option && <FaCheck className={styles.checkIcon} />}
        </div>
      ))}
    </div>
  )}
</div>



            </div>
            <hr className={styles.dividerLine} />
             
             
             {/* side bar area+produc page */}
             <div className={styles.productSidebarcombo}>
                {showFilter &&(
                  <SideBar isVisible={showFilter} />
                )}
                <div>
                    <ProductPage selectedSort={selectedSort} products={products} />

                </div>
           
            </div>

        </section>


    );
}

export default ProductFilterBar;