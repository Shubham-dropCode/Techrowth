import { Link } from "react-router-dom";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topbar}>
          <div className={styles.topbar1} id="TopHeader">
            <Link to="/">
              <img className={styles.logo21Icon} alt="" src="/logo@2x.png" />
            </Link>
            <input className={styles.search} type="text" placeholder="SEARCH" />
            <div className={styles.phonebutton}>
              <a className={styles.frameParent} href="tel:+91 8073162943">
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-1420.svg"
                />
                <div className={styles.groupWrapper}>
                  <div className={styles.parent}>
                    <div className={styles.div}>+91 8073162943</div>
                    <div className={styles.support}>Support</div>
                  </div>
                </div>
              </a>
              <a className={styles.frameGroup} href="tel:+91 8073162943">
                <img className={styles.frameChild} alt="" src="/frame-23.svg" />
                <div className={styles.group}>
                  <div className={styles.div1}>+91 8073162943</div>
                  <div className={styles.sales}>Sales</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.navigationBar} id="Navbar">
          <div className={styles.nav}>
            <div className={styles.revenubuttonParent}>
              <button className={styles.revenubutton}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.revenueDrivenForOutClientsParent}>
                    <div className={styles.revenueDrivenFor}>
                      Revenue driven for out clients
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div2}>$ 20,80,67,504</div>
                      <img
                        className={styles.groupItem}
                        alt=""
                        src="/frame-21.svg"
                      />
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.loginbutton}>
                <button className={styles.frameContainer}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-22.svg"
                  />
                  <div className={styles.clientLogin}>CLIENT LOGIN</div>
                </button>
              </button>
            </div>
            <nav className={styles.navlinks}>
              <div className={styles.links}>
                <Link to="/" className={styles.home}>
                  Home
                </Link>

                <div className="dropdown" style={{ border: "none" }}>
                  <Link
                    onClick={toggleDropdown}
                    className={styles.digitalMarketing}
                    style={{ border: "none" }}
                  >
                    Digital Marketing
                  </Link>
                  {isDropdownOpen && (
                    <div className="container position-absolute dropdownMenu">
                      <div className="row">
                        <div className="col">
                          <ul className="dropdown-links">
                            <li>
                              <Link to="/DigitalMarketing">
                                Digital Marketing
                              </Link>
                            </li>
                            <li>
                              <Link to="/IntentPrototype">
                                Intents We Serve
                              </Link>
                            </li>
                            <li>
                              <Link to="/SocialMediaServices">Services</Link>
                            </li>
                            <li>
                              <Link to="/GraphicDesign">Graphic & Design</Link>
                            </li>
                            <li>
                              <Link to="/Ecommerce">E-commerce</Link>
                            </li>
                            <li>
                              <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/Resource">Resource</Link>
                            </li>
                            <li>
                              <Link to="">Content</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            

                <div className={styles.itServices}>IT Services</div>
                <div className={styles.analytics}>Analytics</div>
                <div className={styles.whoWeAre}>Who we are</div>
              </div>
              <button className={styles.navlinksInner}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </button>
            </nav>
            <button className={styles.navbutton}>
              <div className={styles.contactUs}>Contact Us</div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
