import { ArrowBack, ArrowForward } from "@mui/icons-material"
import "./stylereadersec.scss"
import "./img1.jpg"
import Footer from "../footer/Footer"

function Readersec(props) {
  return (
    <div className="readersec">
        <div className="titleHeader">
              <div className="single"> Single page Mode </div>
              <div className="comictitle"> Katongo-Robe </div>
              <div className="book"> Book View Mode </div>
          </div>
          
          <div className="reader">
              <div className="controls">
                  <div className="forwBack">
                  <div className="controlbtn">
                      <ArrowBack />
                      <span>
                          Previous
                      </span>
                  </div>
                  <div className="controlbtn">
                      <ArrowForward />
                      <span>
                      Next
                      </span>
                  </div>
                  </div>
                  <div className="controlbtn">
                      <div></div>
                      <span>
                      Jump to page
                      </span>
                  </div>
                  <div className="controlbtn">
                      <div></div>
                      <span>
                      View
                      </span>
                  </div>
              </div>

              <div className="viewcomic">
                  <div className="content">
                      <img src={props.epImgSrc} />
                  </div>
              </div>
              
          </div>

          <Footer/>
    </div>
  )
}

export default Readersec