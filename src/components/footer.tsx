import React, { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";
import { FaPlus, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  const toggleSection = (section: string) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section: Newsletter + Contact/Currency */}
      <div className={styles.footerTopsection}>
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h3>BE THE FIRST TO KNOW</h3>
            <p className={styles.mobileView}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className={styles.hideMobileView}>
              Sign up for updates from mettā muse.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <hr className={styles.mobileView} />

        <div className={styles.contactCurrencySection}>
          <div className={styles.contactInfo}>
            <h4 className={styles.hideMobileView}>CONTACT US</h4>
            <h4 className={styles.mobileView}>Call US</h4>
            <div className={`${styles.mobileView} ${styles.contacts}`}>
              <p className={styles.phone}>+44 221 123 5380</p>
              <p className={styles.email}>customarcare@mettamusa.com</p>
            </div>
            <p className={`${styles.phone} ${styles.hideMobileView}`}>+44 221 123 5380</p>
            <p className={`${styles.email} ${styles.hideMobileView}`}>customarcare@mettamusa.com</p>
          </div>
          <hr className={`${styles.mobileView} ${styles.lineDivider}`} />

          <div className={styles.currencySection}>
            <h4>CURRENCY</h4>
            <div className={styles.currencyOptions}>
              <label className={styles.currencyOption}>
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="USA flag"
                  style={{ width: "50px", height: "50px", borderRadius: "8px" }}
                />
                <span><FaPlus /> USD</span>
              </label>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on howl.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Footer Main Section */}
      <div className={styles.footerMain}>
        {/* Mettā Muse Column */}
        <div className={styles.footerColumn}>
          <div
            className={styles.collapsibleHeader}
            onClick={() => toggleSection("metta")}
          >
            <h3 className={styles.brandName}>mettā muse</h3>
            <FaChevronDown className={`${styles.mobileChevron} ${openSection === "metta" ? styles.rotate : ""}`} />
          </div>
          <ul className={`${styles.footerLinks} ${
            isMobile ? (openSection === "metta" ? styles.open : styles.closed) : ""
          }`}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/artisans">Artisans</a></li>
            <li><a href="/boutiques">Boutiques</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/compliance">EU Compliances Docs</a></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className={styles.footerColumn}>
          <div
            className={styles.collapsibleHeader}
            onClick={() => toggleSection("quick")}
          >
            <h4>QUICK LINKS</h4>
            <FaChevronDown className={`${styles.mobileChevron} ${openSection === "quick" ? styles.rotate : ""}`} />
          </div>
          <ul className={`${styles.footerLinks} ${
            isMobile ? (openSection === "quick" ? styles.open : styles.closed) : ""
          }`}>
            <li><a href="/orders-shipping">Orders & Shipping</a></li>
            <li><a href="/join-seller">Join/Login as a Seller</a></li>
            <li><a href="/payment-pricing">Payment & Pricing</a></li>
            <li><a href="/returns-refunds">Return & Refunds</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Column */}
        <div className={styles.footerColumn}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <FaInstagram size={18} />
            <FaLinkedin size={18} />
          </div>
          <div className={styles.paymentMethods}>
            <h4>mettā muse Accepts</h4>
            <div className={styles.paymentBanks}>
              <img src="/Gpay.png" alt="Google-pay logo" style={{ width: "50px", height: "30px", borderRadius: "8px" }}/>
              <img src="/mpay.png" alt="payment logo" style={{ width: "50px", height: "30px", borderRadius: "8px" }} />
              <img src="/paypal.png" alt="paypal logo" style={{ width: "50px", height: "30px", borderRadius: "8px" }} />
              <img src="/amex.png" alt="amex-logo"  style={{ width: "50px", height: "30px", borderRadius: "8px" }}/>
              <img src="/Apple-Pay.png" alt="Apple-Pay logo"  style={{ width: "50px", height: "30px", borderRadius: "8px" }}/>
              <img src="/opay.png" alt="Opay logo"  style={{ width: "50px", height: "30px", borderRadius: "8px" }}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2025 mettamusa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
