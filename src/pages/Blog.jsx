import React from "react";
import classes from "./Blog.module.css";
import dairyImg from "../assets/dairyImg.svg";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
const Blog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dairy}>
        <p className={classes.cause}>
          The dairy section wanted to boost their sales and expand their reach
          to <span>South Indian Market</span>
        </p>
        <img className={classes["head-img"]} src={dairyImg} alt="dairy image" />
        <p className={classes.sales}>Increased Sales by 47%</p>
        <h2>Execution Strategy :</h2>
        <p className={classes.strat}>
          To overcome the problem of not being able to reach the south Indian
          market and increase sales, the following strategies were executed:
        </p>
        <div className={classes.strats}>
          <p className={classes["strat-list"]}>
            <span>1. Emotional Marketing: </span>
            Promoted milk through other dairy products, for example, by
            promoting the goodness of milk through their curd, cheese, or
            paneer. This involved reaching out to people through culture,
            values, and creating a bond between the product and the customer.
          </p>
          <p className={classes["strat-list"]}>
            <span> 2. Awareness of other variants of milk: </span> Created
            awareness of other variants of milk that they are already
            manufacturing. Buffalo's milk, for example, highlights its
            nutritious ingredients as well as other important elements required
            to build a healthy lifestyle. People were invited to visit the
            factory and learn more about the process through an awareness
            program.
          </p>
          <p className={classes["strat-list"]}>
            <span> 3. Increased sponsorship: </span>Increased sponsorship in
            cricket and football to create awareness amongst the people about
            what makes them unique and why people should choose them.
          </p>
          <p className={classes["strat-list"]}>
            <span> 4. Dairy Products subscription: </span>Created a Dairy
            Products subscription and added all dairy products with a comparison
            of our cheaper products above other expensive products to highlight
            our cost-effectiveness.
          </p>
        </div>
        <div className={classes.result}>
          <h2>Results : </h2>
          <ul className={classes["result-list"]}>
            <li>
              The implementation of emotional marketing resulted in a
              significant 47% increase in sales during the campaign.{" "}
            </li>
            <li>
              Furthermore, we applied additional strategies to achieve a course
              correction, resulting in a commendable 34% surge in e-commerce app
              downloads.
            </li>
          </ul>
        </div>
        <div className={classes.tools}>
          <h2>Tools & Technique : </h2>
          <ul className={classes["tools-list"]}>
            <li>
              Utilized tools like Meta Business Suite and Google Analytics for
              analyzing the campaign
            </li>
            <li>
              The utilization of social media advertising tactics resulted in an
              enhanced brand image and increased traffic.
            </li>
            <li>
              Focused email marketing efforts successfully generated buzz among
              the targeted audience.
            </li>
            <li>
              Through App Store optimization, the level of engagement was
              considerably increased.
            </li>
          </ul>
        </div>
        <div className={classes.budget}>
          <h2>Budget :</h2>
          <p className={classes.amount}>
            $25K meant an extended engagement with our team, leading to their
            desired effect in turn.
          </p>
        </div>
        <div className={classes.study}>
          <p>Want to study this closely</p>
          <button>Download Now</button>
        </div>
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
                Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba Pensions
                House, 2nd Floor Dedan Kimathi Road, Lusaka 10100
              </li>
              <li>
                Bangalore, India - No.373, 1st floor, 2nd Phase, West of Chord
                Road, Stage 2, Rajajinagar, Bengaluru, Karnataka 560086
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
