import './NavBar.css'

import { Link } from "react-scroll";
function NavBar() {

   


    return (
        <>
            <div className="nav-bar">
                <div className='nav-container'>
                    <nav className='menu'>
                        <div className='inner'>
                            <Link className="fa fa-home" aria-hidden="true" smooth={true} duration={600} offset={-50} to='home'></Link>
                        </div>
                        <div className='inner'>
                            <Link  className='fa fa-user' smooth={true} duration={600} offset={-50} to='about-me' ></Link>
                        </div>
                        {/* <div className='inner'>
                            <Link  className="fa fa-code-fork" aria-hidden="true" to='training'></Link>
                        </div> */}
                        <div className='inner'>
                            <Link className="fa fa-laptop" aria-hidden="true" smooth={true} duration={600} offset={-50} to='hard-skills'></Link>
                        </div>
                        
                        <div className='inner'>
                            <Link className="fa fa-briefcase" aria-hidden="true" smooth={true} duration={600} offset={-50} to='proyects'></Link>
                        </div>
                        <div className='inner'>
                            <Link className="fa fa-phone" aria-hidden="true" smooth={true} duration={600} offset={-50} to='email'></Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar