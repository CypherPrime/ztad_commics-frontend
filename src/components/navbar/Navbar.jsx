import {Collections, AccountCircle, VolunteerActivism, LibraryBooks, Language, Settings, FavoriteBorder, Edit, Login, Menu} from '@mui/icons-material';

import { Outlet, Link } from 'react-router-dom';

import "./stylenavbar.css"


function Navbar(){
    return(
        <nav>
                <div className="logosec">
                    <div className="logo">
                        <Link className="logoimg" to="/"> <img   src="" alt="" /> </Link>
                    </div>
                    
                    <Link className="name"  to="/">  Z<span className="colorname">C</span>U </Link>
                    
                </div>
        
            
            <div className="links">
                        
                <ul className="linksec">
                    <li className="navlinks">
                        <Link className="navlinks" to="/Comics">
                            <div className="linkicon">
                                <LibraryBooks className='NavIcon' />
                            </div>
                            <div className="linkname">
                                <span> Comics </span>
                            </div>
                        </Link>
                        
                        
                    </li>
                    <li className="navlinks">
                        <Link className="navlinks" to="/Gallery">
                            <div className="linkicon">
                                <Collections className='NavIcon' />
                            </div>
                            <div className="linkname">
                                <span> Gallery </span>
                            </div>
                        </Link>                      
                    </li>
                    <li className="navlinks">
                        <Link className="navlinks"  to="/Donate">
                            <div className="linkicon">
                            <VolunteerActivism className='NavIcon' />
                            </div>
                            <div className="linkname">
                            <span> Donate </span>
                            </div>
                        </Link>
                    </li>
                    <li className="navlinks accountoption">
                        
                            <div className="linkicon">
                            <AccountCircle className='NavIcon' />
                            </div>
                            <div className="linkname">
                            <span className='accountlink'> Account </span>
                            <span className='accountburger'> <Menu /> </span>


                            <div className="options">
                                <Link className='styleLink'>
                                    <div className="options_item">
                                        <Login />
                                        <span>Login</span>
                                    </div>
                                </Link>
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
            <Outlet/>
        </nav>
    )
}
export default Navbar;