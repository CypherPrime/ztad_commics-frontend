import ComicReaderNav from "../../components/navbar/ComicReaderNav";
import "./stylereaderpage.scss";

import ComicInfo from "../../components/Comicinfodisplay/ComicInfo.jsx";
import Readersec from "../../components/readersec/Readersec.jsx";


function ComicReadPage() {
  return (
      <div className="comicreadpage">
          <ComicReaderNav/>
          
          <ComicInfo />

          <Readersec/>

    </div>
  )
}

export default ComicReadPage