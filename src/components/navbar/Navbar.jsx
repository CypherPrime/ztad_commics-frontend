import {Collections, AccountCircle, VolunteerActivism, LibraryBooks, Language, Settings, FavoriteBorder, Edit, Login} from '@mui/icons-material';


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
                            <LibraryBooks />
                            
                            </div>
                            <div className="linkname">
                            <span> Comics </span>
                            </div>
                        
                    </li>
                    <li className="navlinks">
                        
                            <div className="linkicon">
                             <Collections />
                            
                            </div>
                            <div className="linkname">
                            <span> Gallery </span>
                            </div>
                        
                    </li>
                    <li className="navlinks">
                        
                            <div className="linkicon">
                            <VolunteerActivism />
                            </div>
                            <div className="linkname">
                            <span> Donate </span>
                            </div>
                        
                    </li>
                    <li className="navlinks accountoption">
                        
                            <div className="linkicon">
                            <AccountCircle />
                            </div>
                            <div className="linkname">
                            <span> Account </span>

                            <div className="options">
                                <div className="options_item">
                                    <Login />
                                    <span>Login</span>
                                </div>
                                <div className="options_item">
                                    <AccountCircle />
                                    <span>Create an Account </span>
                                </div>
                                
                                <hr />
                                <div className="options_item">
                                    <Edit />
                                    <span>Edit Profile </span>
                                </div>
                                <div className="options_item">
                                    <Language />
                                    <span>Language</span>
                                </div>
                                <div className="options_item">
                                    <Settings />
                                    <span>Settings</span>
                                </div>
                                <div className="options_item">
                                    <FavoriteBorder />
                                    <span>Favorites</span>
                                </div>
                                
                                
                                <hr />
                                <div className="options_item">
                                    <VolunteerActivism />
                                    <span>Partner with us</span>
                                </div>
                                
                            </div>


                            </div>
                        
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}
export default Navbar;