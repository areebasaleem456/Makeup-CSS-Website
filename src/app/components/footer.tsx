import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <div id="footer-content">
          <div>
          <h1>Areeba's Cosmetics</h1>
          <ul>
            <li>Subscribe</li>
            <li>Get 10% Off on your first order</li>
            <input type="text" placeholder="Enter Your E-Mail"></input>
          </ul></div>
          <div>
            <h1>Support</h1>
            <ul>
              <li>exclusive@gmail.com</li>
              <li>+923123456789</li>
            </ul>
          </div>
          <div>
            <h1>Account</h1>
            <ul>
              <li>My Account</li>
              <li>Login/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h1>Quick Link</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
