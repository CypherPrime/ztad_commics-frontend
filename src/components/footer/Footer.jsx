import { Email, Facebook, Instagram, LinkedIn, Message, MessageOutlined, Twitter, WhatsApp } from "@mui/icons-material";
import "./stylefooter.css";

function Footer() {
  return (
    <div className="footer-sec">
    <div className="left">
        <div className="logo">
        </div>
        <div className="compname">
            <div className="name">
                <span>Zenara Comics Universe</span>
            </div>
            <div className="socials">
                <div className="text">Contact with us</div>
                <div className="icons">
                    <div className="socials-icon">
                        <Facebook />
                    </div>
                    <div className="socials-icon">
                        <Instagram />
                    </div>
                    <div className="socials-icon">
                        <Twitter />
                    </div>
                    <div className="socials-icon">
                        <LinkedIn />
                          </div>
                </div>
            </div>
        </div>

    </div>
    <div className="right">
        <div className="aboutus">
            <h2>About Us</h2>
            <p>Touching hearts with arts. Building a network of persons interested to be artist, writers, colorist, digital artist and other related fields.</p>
            <br/>
            <p>Bringing our stories to the world. Enter our universe and enjoy bliss.</p>
        </div>
        <div className="contactus">
            <h2>Contact us</h2>
            <div className="contactinfo">
                <div className="socialmedia">
                    <div className="icon">
                        <WhatsApp />
                    </div>
                    <div className="details">
                        Phone: +237 676 379 479 
                    </div>
                </div>
                <div className="socialmedia">
                    <div className="icon">
                        <Email />
                    </div>
                    <div className="details">
                        Email: contact@zcu.org 
                    </div>
                </div>
                <div className="socialmedia">
                    <div className="icon">
                        <MessageOutlined />
                    </div>
                    <div className="details">
                        Leave a message 
                    </div>
                </div>

            
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer