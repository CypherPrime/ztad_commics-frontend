import "./styleComicinfodisplay.scss";

function ComicInfo(props) {
  return (
      <div className="ComicInfodisplay">
          <div className="comicimgsec">
            <img src={ props.imgsrc } alt="" />
          </div>
          <div className="comictextsec">
            {props.comicsummary}
          </div>
    </div>
  )
}

export default ComicInfo