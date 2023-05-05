import React from "react";
import classes from "./Resource.module.css";
import dairyImg from "../assets/dairyImg.svg";
import truckImg from "../assets/truck.svg";
import planeImg from "../assets/plane.svg";
import bankImg from "../assets/bank.svg";
import websiteImg from "../assets/website.svg";
import "./Resource.module.css"
// import TrustedByBrands from "./TrustedByBrands";
// import Footer1 from "./Footer1";
import Blog from "./Blog";
// import digitalImg from "./assets/digital-icon.png";
// import businessImg from "./assets/business-icon.png";
// import ItImg from "./assets/IT-icon.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
const Resource = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.companies}>
          <div className={classes["head-img-container"]}>
            <img
              className={classes["head-img"]}
              src={dairyImg}
              alt="dairy image"
            />
          </div>
          <div className={classes.dairy}>
            <p className={classes.cause}>
              The dairy section wanted to boost their sales and expand their
              reach to <span>South Indian Market</span>
            </p>
            <img
              className={classes["head-img"]}
              src={dairyImg}
              alt="dairy image"
            />
            <p className={classes.sales}>Increased Sales by 47%</p>
            <h2>Execution Strategy :</h2>
            <p className={classes.strat}>
              To overcome the problem of not being able to reach the south
              Indian market and increase sales, the following strategies were
              executed:
            </p>
            <p className={classes["strat-list"]}>
              <span>1. Emotional Marketing: </span>
              Promoted milk through other dairy products, for example, by
              promoting the goodness of milk through their curd, cheese, or
              paneer. This involved reaching out to people through culture,
              values, and creating a bond between the product and the customer.
            </p>
            <button type="button">Continue reading</button>
          </div>
          <hr className={classes.divider} />
          <div className={classes.aviation}>
            <p className={classes.cause}>
              The aviation company wanted to overcome its low sales and increase
              brand visibility while transitioning from their
              <span> government to private sector.</span>
            </p>
            <img
              className={classes["head-img"]}
              src={planeImg}
              alt="dairy image"
            />
            <p className={classes.sales}>Increased ticket sales by 21%</p>
            <h2>Execution Strategy :</h2>
            <p className={classes.strat}>
              The company executed a rational marketing strategy to increase
              brand awareness and sales. The strategy included following
              channels and methods:
            </p>
            <p className={classes["strat-list"]}>
              <span>1. Rational Marketing: </span>
              To address this issue, the company implemented a rational
              marketing strategy to increase brand awareness and sales.
            </p>
            <button type="button">Continue reading</button>
          </div>
          <hr className={classes.divider} />
          <div className={classes.transport}>
            <p className={classes.cause}>
              The transportation service company was struggling with low
              engagement for their AC buses in comparison to their{" "}
              <span>Non-AC buses.</span>
            </p>
            <img
              className={classes["head-img"]}
              src={truckImg}
              alt="dairy image"
            />
            <p className={classes.sales}>Increased overall engagement by 46%</p>
            <h2>Execution Strategy :</h2>
            <p className={classes.strat}>
              The company executed an Emotional Marketing strategy to increase
              engagement and bookings for AC buses. The strategy included
            </p>
            <p className={classes["strat-list"]}>
              <span>1. Identifying the Issue:</span>
              Lack of Amenities and Comfort - The company identified that the
              lack of basic amenities and comfort was the main reason for low
              engagement of AC buses.
            </p>
            <button type="button">Continue reading</button>
          </div>
          <hr className={classes.divider} />
          <div className={classes.bank}>
            <p className={classes.cause}>
              The banking website had slow loading speed, leading to low
              engagement among users which is
              <span>what the company wanted resolved.</span>
            </p>
            <img
              className={classes["head-img"]}
              src={bankImg}
              alt="dairy image"
            />
            <p className={classes.sales}>
              Increased website loading speed by 81%
            </p>
            <h2>Execution Strategy :</h2>
            <p className={classes.strat}>
              The company implemented IT strategies to address the issue of slow
              website loading, resulting in increased user engagement on their
              website. The strategy involved a series of steps that are as
              follows:
            </p>
            <p className={classes["strat-list"]}>
              <span>1. Fixed Redirecting and Server Issues: </span>
              Identified and fixed the website's redirecting and server issues
              to improve performance.
            </p>
            <button type="button">Continue reading</button>
          </div>
          <hr className={classes.divider} />
          <div className={classes["e-commerce"]}>
            <p className={classes.cause}>
              The business wanted to revamp their website for sales and
              inquiries and wanted a website that could
              <span> adequately handle their incoming traffic</span>
            </p>
            <img
              className={classes["head-img"]}
              src={websiteImg}
              alt="dairy image"
            />
            <p className={classes.sales}>
              Increased sales enquiry rates by 62%
            </p>
            <h2>Execution Strategy :</h2>
            <p className={classes["strat-list"]}>
              <span>1. Redesigning the Website: </span>
              The complete website was redesigned to improve the user interface,
              provide easy navigation, and make it more user-friendly.
            </p>
            <button type="button">Continue reading</button>
          </div>
        </div>
        <div className={classes["side-cards"]}>
          <div className={classes["post-categories"]}>
            <ul className={classes.post}>
              <li>Latest Post</li>
              <li>Popular Post</li>
            </ul>
            <h3 className={classes.categories}>Categories</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Business Analytics</li>
              <li>IT Services</li>
            </ul>
          </div>
          <div className={classes["digital-marketing"]}>
            <span>
              {/*Icon*/}
              <h3>Digital Marketing</h3>
              {/*arrow icon*/}
            </span>
            <p>
              Unlock the potential of your brand and seize future growth
              opportunities with our result-driven strategies. Our extensive
              digital channels can help you reach a wider audience, boost brand
              visibility, and drive growth.
            </p>
            <p> {/*Icon*/} Intent</p>
            <p> {/*Icon*/}Services</p>
            <p> {/*Icon*/}E-commerce</p>
            <p> {/*Icon*/}Content</p>
            <p> {/*Icon*/}Graphics & Designs</p>
          </div>
          <div className={classes["it-services"]}>
            <span>
              {/*Icon*/}
              <h3>IT Services</h3>
              {/*arrow icon*/}
            </span>
            <p>
              Unlock the potential of your brand and seize future growth
              opportunities with our result-driven strategies. Our extensive
              digital channels can help you reach a wider audience, boost brand
              visibility, and drive growth.
            </p>
            <p> {/*Icon*/}Development</p>
            <p> {/*Icon*/}IT Management</p>
            <p> {/*Icon*/}UI/UX Interface</p>
            <p> {/*Icon*/}Integration</p>
            <p> {/*Icon*/}Qualtiy Testing</p>
          </div>
          <div className={classes["business-analytics"]}>
            <span>
              {/*Icon*/}
              <h3>Business Analytics</h3>
              {/*arrow icon*/}
            </span>
            <p>
              Unlock the power of data - elevate your performance with our
              Analytics services 
            </p>
            <p> {/*Icon*/}Analytics & Insights</p>
            <p> {/*Icon*/}Customized Dashboard</p>
            <p> {/*Icon*/}Social Media Analytics</p>
            <p> {/*Icon*/}Mobile Analytics</p>
          </div>
          <div className={classes["lets-connect"]}>
            <form>
              <h2>Let's Connect</h2>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="email@gmail.com" />
              <input type="text" placeholder="Phone No." />
              <input type="text" placeholder="Company name" />
              <textarea placeholder="Message" />
              <button type="submit">Submit</button>
            </form>
            <div className={classes["contact-location"]}>
              <div className={classes.contact}>
                <p>
                  <FiPhoneCall className={classes.phoneIcon} />
                  <span className={classes.text}>Contact Us</span>
                </p>
                <ul>
                  <li>Mobile - Support: +91 8073162943</li>
                  <li>Sales: +91 8073162943</li>
                  <li>Email - info@techrowth.com</li>
                </ul>
              </div>
              <hr className={classes.locationDivider} />
              <div className={classes.location}>
                <p>
                  {" "}
                  <MdLocationPin className={classes.locationIcon} />
                  <span className={classes.text}>Location</span>
                </p>
                <ul>
                  <li>
                    Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba
                    Pensions House, 2nd Floor Dedan Kimathi Road, Lusaka 10100
                  </li>
                  <li>
                    Bangalore, India - No.373, 1st floor, 2nd Phase, West of
                    Chord Road, Stage 2, Rajajinagar, Bengaluru, Karnataka
                    560086
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </>
  );
};

export default Resource;
