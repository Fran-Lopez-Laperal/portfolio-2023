import './NavBar.css'

import { Link } from "react-scroll";
function NavBar() {


    return (
        <>
            <div className="nav-bar">
                <div className='nav-container'>
                    <nav className='menu'>
                        <div className='inner'>
                            <Link className="fa fa-home" aria-hidden="true" to='home'></Link>
                        </div>
                        <div className='inner'>
                            <Link className='fa fa-user' to='about-me' ></Link>
                        </div>
                        <div className='inner'>
                            <Link className="fa fa-laptop" aria-hidden="true"></Link>
                        </div>
                        <div className='inner'>
                            <Link className="fa fa-code-fork" aria-hidden="true" to=''></Link>
                        </div>
                        <div className='inner'>
                            <Link className="fa fa-briefcase" aria-hidden="true" to='proyects'></Link>
                        </div>
                        <div className='inner'>
                            <Link className="fa fa-phone" aria-hidden="true" to='email'></Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar