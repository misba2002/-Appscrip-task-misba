import React from "react";
import styles from "../styles/header.module.css";
import { FiSearch,FiHeart,FiUser,FiMenu } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";


const Header =()=>{
    return(
        <>
     <header className={styles.header}>
        <div className={styles.showOnMobile}>
        <FiMenu className={styles.Menuicon}></FiMenu>
        <img src={"/logo.png"} alt="mettamuse-logo.png" className={styles.logoImg} />
         </div>
        <h1 className={styles.logoName}>LOGO</h1>
        <div className={styles.headericon}>
            <FiSearch className={styles.icon}/>
            <FiHeart  className={styles.icon}/>
            <BiShoppingBag className={styles.icon}  />
            <FiUser className={` ${styles.icon} ${styles.hideOnMobile}`} />
                <select   className={`${styles.languageOption} ${styles.hideOnMobile} `} >
                    <option className={styles.optionValue}  selected value={"English"}>ENG</option>  
                    <option  className={styles.optionValue}  disabled value={"Hindi"}>HIN</option>
                    <option  className={styles.optionValue}  disabled value={"Kannada"}>KAN</option>

                </select>
            
        </div>
        
     </header>
     <div className={styles.subHeader}>
        <ul className={`${styles.subHeaderItems} ${styles.hideOnMobile}` }>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
        

     </div>
     </>


    );
}

export default Header;
