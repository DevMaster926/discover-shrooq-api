import logo from "../../../../assets/images/logo.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { scrollToTopSmooth } from "../../../../util";

function Arrow() {
   return (
      <svg className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
         <path
            d="M4.16663 1.66665L7.49996 4.99998L4.16663 8.33331"
            stroke="currentColor"
            strokeWidth="2"
            stroklinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}

const SocialMediaIcons = [];

export default function Info() {
   const menuData = [
      {
         name: "Spend & Win",
         link: "/upload",
      },
      {
         name: "Destinations",
         link: "/view-all-destination",
      },
      {
         name: "Offers",
         link: "/vouchers",
      },
      {
         name: "About Us",
         link: "/aboutus",
      },
      {
         name: "Gallery",
         link: "/gallery",
      },
      {
         name: "Contact",
         link: "/contactus",
      },
   ];

   return (
      <div className="info">
         <img src={logo} className="logo" alt="logo" />
         {/* <p className="info-text">
        Source: Sharjah Update | Published:
        <br />
        October 12, 2020 - 3:32 pm
      </p>
      <p className="lable-text">
        Receive weekly updates on Sharjah business news direct to your inbox
      </p>
      <div className="subsctibe">
        <div className="flex-grow-1">
          <Input placeholder="Your e-mail" />
        </div>
        <Button color="primary">Subscribe to</Button>
      </div> */}

         <div className="f-menus">
            <h3>Menu</h3>
            <div class="menu-items">
               {menuData.map(({ name, link }, index) => (
                  <div key={index} className="menu-item">
                     <Link to={link} onClick={scrollToTopSmooth}>
                        {name}
                        <Arrow />
                     </Link>
                  </div>
               ))}
            </div>
            <div>
               <div className="b-links">
                  <Link to="/terms" onClick={scrollToTopSmooth}>
                     Terms
                  </Link>
                  <Link to="/privacy" onClick={scrollToTopSmooth}>
                     Privacy
                  </Link>
               </div>
               <div className="f-icons" style={{fontSize: '130%'}} >
                  <i className="fab fa-youtube fa-lg"></i>
                  <i className="fab fa-facebook fa-lg"></i>
                  <i className="fab fa-instagram fa-lg"></i>
               </div>
               <p className="copy-text">
                  Sharjah Investment and Development Authority (Shurooq) ©2021
                  <br />
                  All rights reserved. Government of Sharjah
               </p>
            </div>
         </div>
      </div>
   );
}
