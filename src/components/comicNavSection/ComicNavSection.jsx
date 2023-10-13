import React from 'react'
import "./styleComicNavSection.scss"

function ComicNavSection() {
  return (
      <div className="ComicNavSection">
        <div className="backgroundimgs">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2F44%2Ffa%2Fwomen_anime_girls_original_characters_brunette_long_hair_looking_at_viewer_smiling_happy-1547105.jpg!d&f=1&nofb=1&ipt=03b2200f6fa0175f1c8c8bbfc1123d94289c12de3c06268016f485580177d1c0&ipo=images" alt="" />
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eqluwTXAPvAwSoN5qpI-6gHaEK%26pid%3DApi&f=1&ipt=1f7f2276470941db79a81ca1d0a2100ecf9c9f4d7168ca44334a9f63f867fa19&ipo=images" alt="" />
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.-l7h6OvskJKX1BAhDMRUjQHaEK%26pid%3DApi&f=1&ipt=bd61cfe7938998defdccbcf15f6a9e6669c187b01171eec6ce7ab97a557ecd77&ipo=images" alt="" />
        </div>
      <div className="navsection">
        <div className="inputfield">
        <input type="text" placeholder='Search Comic by typing in its name' />
        
        </div>
        <div className="inputfield">
        
        <select placeholder='Ganre' name="" id="">
          
          <option value="Action">Action</option>
          <option value="Love">Love</option>
        </select>
        </div>
        <div className="inputfield">
        <select placeholder='Ganre' name="" id="">
          <option value="Action">Action</option>
          <option value="Love">Love</option>
        </select>
        
        </div>
      </div>
      </div>
  )
}

export default ComicNavSection