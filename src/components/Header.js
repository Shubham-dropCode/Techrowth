import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "animate.css";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuIT from "./DropdownMenuIT";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsOpen(false);
  };
  const handleDataFromChild = (data) => {
    setIsDropdownOpen(data);
  };
  const handleMouseEnterIT = () => {
    setIsOpen(true);
    setIsDropdownOpen(false);
  };
  const handleMouseEnterMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };
  const handleDataFromChildIT = (data) => {
    setIsOpen(data);
  };
  return (
    <>
      <header className={styles.header} onMouseLeave={handleMouseEnterMenu}>
        <div className={styles.topbar}>
          <div className={styles.topbar1} id="TopHeader">
            <Link to="/">
              <img className={styles.logo21Icon} alt="" src="/logo@2x.png" />
            </Link>
            <AiOutlineSearch
              className="position-absolute"
              size={33}
              style={{ left: "59%" }}
            />
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
                    <div className={styles.support}>Sales</div>
                  </div>
                </div>
              </a>
              <a className={styles.frameGroup} href="tel:+91 8073162943">
                <img className={styles.frameChild} alt="" src="/frame-23.svg" />
                <div className={styles.group}>
                  <div className={styles.div1}>+91 8073162943</div>
                  <div className={styles.sales}>Support</div>
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
                <Link
                  to="/"
                  className={styles.analytics}
                  onMouseEnter={handleMouseEnterMenu}
                >
                  Home
                </Link>

                <div className="dropdown" style={{ border: "none" }}>
                  <Link
                    to="/DigitalMarketing"
                    onMouseEnter={handleMouseEnter}
                    className={styles.digitalMarketing}
                    style={{
                      border: "none",
                    }}
                  >
                    Digital Marketing
                  </Link>
                </div>

                <div className="dropdown" style={{ border: "none" }}>
                  <Link
                    to="/ITMain"
                    onMouseEnter={handleMouseEnterIT}
                    className={styles.digitalMarketing}
                    style={{ border: "none" }}
                  >
                    IT Services
                  </Link>
                </div>
                <div className={styles.analytics}>Analytics</div>
                <div
                  className={styles.whoWeAre}
                  onMouseEnter={handleMouseEnterMenu}
                >
                  <Link to="/WhoWeAre" style={{ color: "#666" }}>
                    Who we are
                  </Link>
                </div>
              </div>
              <button className={styles.navlinksInner}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </button>
            </nav>
            <button className={styles.navbutton} id="#ContactForm">
              <div className={styles.contactUs}>Contact Us</div>
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <DropdownMenu
            onMouseEnter={handleMouseEnter}
            sendDataToParent={handleDataFromChild}
          />
        )}
        {isOpen && (
          <DropdownMenuIT
            onMouseEnter={handleMouseEnterIT}
            sendDataToParent={handleDataFromChildIT}
          />
        )}
      </header>
    </>
  );
};

export default Header;
