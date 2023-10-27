import { Email, Facebook, Instagram, LinkedIn, Message, MessageOutlined, Twitter, WhatsApp } from "@mui/icons-material";
import "./stylefooter.scss";

function Footer() {
    return (
        <>
            <div className="footer-sec footerstyle_one">
        <div className="left">
            <div className="logoname">
                <div className="logo">
                </div>
                <div className="name">
                    <span>Zenara Comics Universe</span>
                </div>
            </div>
        
        
            <div className="socials">
                <div className="contacttext">Contact with us</div>
                <div className="icons">      
                        <Facebook className="socials-icon" />               
                        <Instagram className="socials-icon" />
                      <Twitter className="socials-icon" />
                      <LinkedIn className="socials-icon" />
                          
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
      
    <div className="footerstyle_two">
        <div className="bigname">
            Zenara Comics Universe
        </div>
        <div className="contactus2">
            <div className="contactinfo">
                <div className="socialmedia">
                    <WhatsApp className="icon"/>
                    <div className="details">Phone: +237 676 379 479 </div>
                </div>
                <div className="socialmedia">
                    <Email className="icon" />
                    <div className="details">Email: contact@zcu.org  </div>
                </div>
                <div className="socialmedia">
                    <MessageOutlined className="icon"/>
                    <div className="details">Leave a message </div>
                </div>
            </div>
        </div>

        <hr className="divider"/>

        <div className="aboutus2">
            <h2>About Us</h2>
            <p>Touching hearts with arts. Building a network of persons interested to be artist, writers, colorist, digital artist and other related fields.</p>
            <br/>
            <p>Bringing our stories to the world. Enter our universe and enjoy bliss.</p>
        </div>
                
    </div>
            
    </>

  )
}

export default Footer