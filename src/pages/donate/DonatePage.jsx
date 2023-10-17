import { Title } from "@mui/icons-material";
import Navbar from "../../components/navbar/Navbar";
import "./styledonatepage.css";
import PaymentMethoditem from "../../components/payment-methoditem/PaymentMethoditem.jsx"
import Footer from "../../components/footer/Footer";

function DonatePage() {
  return (
      <div className="donatepage">
          <Navbar />
          



          <div className="section">
              <div className="heading">Be the Pillar to our Success / Join our dream</div>

          <center><p className="text info">Thank you, for choosing to support us. You can help in any of the following ways:</p> </center>
              
          </div>
          <div className="section">
              <div className="section_heading">
                  Educational Assistance
              </div>
              <div className="info text">
                  <p>You can send to us professional video tutorials or pdf books on digital arts, comic books creation, color theories, animations, story writing and other related fields.</p>
                  <p>You can be a tutor and help facilitate the training process in any way that you see fit.</p>
              </div>
              <div className="redactionbtn">
                  <button>DONATE EDUCATIONAL ASSISTANCE</button>
              </div>
          </div>
          <div className="section">
              <div className="section_heading">
                  Financial Assistance
              </div>

              <div className="paymentmethod">
                  <div className="text">Every small token would go a long way.</div>
                  <div className="bluetext">Choose a Deposit Method</div>
                  <div className="methodsgrid">
                      <PaymentMethoditem name="MOMO"/>
                      <PaymentMethoditem name="Orange Money"/>
                      <PaymentMethoditem name="Express Union"/>
                      <PaymentMethoditem name="Apple pay"/>
                      <PaymentMethoditem name="Google pay"/>
                      <PaymentMethoditem name="PayPal"/>
                      <PaymentMethoditem name="Visa card"/>
                      <PaymentMethoditem name="Master card"/>
                      
                  </div>
              </div>

          </div>

          <div className="section">
              <div className="section_heading">
                  Material Assistance
              </div> 

              <div className="materialDetail">
                  <div className="leftdetails">
                    <div className="lefttitle">
                        Our Address
                      </div>
                      <div className="addressinfo">
                          <table>
                              <tr>
                                  <td>Country: </td>
                                  <td className="greyed">Cameroon </td>
                              </tr>
                              <tr>
                                  <td>Region: </td>
                                  <td className="greyed">North West  </td>
                              </tr>
                              <tr>
                                  <td>City: </td>
                                  <td className="greyed">Bamenda </td>
                              </tr>
                              <tr>
                                  <td>Street: </td>
                                  <td className="greyed">Food Market Street  </td>
                              </tr>
                              <tr>
                                  <td>Zip code: </td>
                                  <td className="greyed">+237 </td>
                              </tr>
                              <tr>
                                  <td>Cell: </td>
                                  <td className="greyed">676 379 479  </td>
                              </tr>
                          </table>
                      </div>
                  </div>
                  <div className="rightdetails">
                      <div className="righttitle">
                          You can donate any material (used or new) related to the arts and design industry.
                      </div>

                      <div className="addressinfo">
                          <bold> it could be; </bold>
                          <p>
                              { ">" }Drawing Tablets
                          </p>
                          <p>
                                { ">" }Computes
                          </p>
                          <p>
                                { ">" }Sketch books
                          </p>
                          <p>
                                { ">" }Color Pencils
                          </p>
                          <p>
                            etc.
                          </p>
                            
                          
                      </div>

                  </div>
              </div>
          </div>

          


          <Footer/>
    </div>
  )
}

export default DonatePage