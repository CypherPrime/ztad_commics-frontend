
import "./stylenavbar.css"


function Navbar(){
    return(
        <nav>
            <div className="logosec">
                <div className="logo">
                    <img  className="logoimg" src="" alt="" />
                </div>
                <div className="name">
                    Z<span className="colorname">C</span>U
                </div>
            </div>
            <div className="links">
                <ul className="linksec">
                    
                    
                    <li className="navlinks">
                        
                            <div className="linkicon">
                            
                            </div>
                            <div className="linkname">
                            <span> Back </span>
                            </div>
                        
                    </li>
                    <li className="navlinks accountoption">
                        
                            <div className="linkicon">
                            
                            </div>
                            <div className="linkname">
                            <span> Account </span>

                            <div className="options">
                                <span>Login</span>
                                <span>Create an Account </span>
                                <hr />
                                <span>Edit Profile </span>
                                <span>Language</span>
                                <span>Settings</span>
                                <span>Favorites</span>
                                <hr />
                                <span>Partner with us</span>
                            </div>


                            </div>
                        
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}
export default Navbar;