import twitter from "./assets/twitter.svg"
import facebook from "./assets/facebook.svg"
import instagram from "./assets/instagram.svg"
import "./styles/Footer.scss"

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="logoContainer">
        <p className="logo">OneStore</p>
        <ul>
            <li><img src={facebook} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
        </ul>
      </div>
      <div>
        <p>Contact Us</p>
        <p>About</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>Support</p>
        <p>Customer Care</p>
        <p></p>
      </div>
    </div>
  );
}
