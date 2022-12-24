import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>ANIMAL SHETER INC.</h4>
            <h4 className="list-unstyled" />
            <p>
              One of the best animal shelter places in India. We’re recognized
              by the government. Please take a pledge to take care of these
              lovely pets !
            </p>
          </div>
          <div className="col">
            <h4>GET IN TOUCH</h4>
            <ui className="list-unstyled">
              <li>
                llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie
                woiwemfwokm fwe w ecen cloenwo we - 355233
              </li>
              <li>cisubdcusb@gmail.com</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>QUICK LINKS</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>Contact Us</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ANIMAL SHELTER | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
