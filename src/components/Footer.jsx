import stylef from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import React from "react";

const Footer = () => {
  return (
    <div className={stylef.container}>
      <div className={stylef.left}>
        <h1 className={stylef.logo}>MASHA.</h1>
        <p className={stylef.desc}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse
          maxime porro in ex quasi expedita saepe explicabo, fuga magnam
          aspernatur sequi, pariatur quia perspiciatis tenetur dolor!
          Repudiandae, temporibus possimus.
        </p>
        <div className={stylef.socialContainer}>
          <div
            className={stylef.socialIcon}
            style={{ backgroundColor: "#3b5999" }}
          >
            <FacebookIcon />
          </div>

          <div
            className={stylef.socialIcon}
            style={{ backgroundColor: "#e4405f" }}
          >
            <InstagramIcon />
          </div>

          <div
            className={stylef.socialIcon}
            style={{ backgroundColor: "#55acee" }}
          >
            <TwitterIcon />
          </div>

          <div
            className={stylef.socialIcon}
            style={{ backgroundColor: "#e60023" }}
          >
            <PinterestIcon />
          </div>
        </div>
      </div>

      <div className={stylef.center}>
        <h3 className={stylef.title}>UISE LINKS</h3>
        <ul className={stylef.list}>
          <li className={stylef.listItem}>Home</li>
          <li className={stylef.listItem}>Cart</li>
          <li className={stylef.listItem}>Man Fashio</li>
          <li className={stylef.listItem}>Woman fashion</li>
          <li className={stylef.listItem}>Accessories</li>
          <li className={stylef.listItem}>My Account</li>
          <li className={stylef.listItem}>order Tracking</li>
          <li className={stylef.listItem}>Wish list</li>
          <li className={stylef.listItem}>Terms</li>
        </ul>
      </div>

      <div className={stylef.right}>
        <h3 className={stylef.title}>Contact</h3>
        <div className={stylef.contactItem}>Test...................</div>
        <div className={stylef.contactItem}>099999938383</div>
        <div className={stylef.contactItem}>email@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
