
import { AccountCircle, ArrowBack, Edit, FavoriteBorder, Language, Login, Settings, VolunteerActivism } from "@mui/icons-material";
import "./stylenavbar.css"
import { Link, Outlet } from "react-router-dom";



function ComicReaderNav(){
    return(
        <nav>
            <div className="logosec">
                <div className="logo">
                    <Link to="/"><img  className="logoimg" src="" alt="" /> </Link>
                </div>
                <div className="name">
                   <Link to="/"> Z<span className="colorname">C</span>U </Link>
                </div>
            </div>
            <div className="links">
                <ul className="linksec">
                    
                    
                    <li className="navlinks">
                        
                            <div className="linkicon">
                            <ArrowBack />
                            </div>
                            <div className="linkname">
                            <span> Back </span>
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
            
            <Outlet />
        </nav>
    )
}
export default ComicReaderNav;