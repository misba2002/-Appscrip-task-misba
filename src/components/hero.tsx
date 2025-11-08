import React from "react";
import styles from "../styles/hero.module.css"


const Hero =()=>{
    return(
    <>
     
          <section className={styles.heroSection} >
            <div className={styles.sectionDivider}></div>
            <ul className={styles.heroNavbar}>
               <li className={` ${styles.navItem } ${styles.navItemHome}  `}>Home</li>
               <li className={` ${styles.navItem }  ${styles.navItemShop} `}>Shop</li>
            </ul>
            <div className={styles.heroSectionDiv}>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
               
            </div>
        

          </section>
    
       </>

    );
}

export default Hero;