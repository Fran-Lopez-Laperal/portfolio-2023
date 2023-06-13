import './Home.css'
import mainImg from '../../assets/images/main-image.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import pdf from '../../assets/images/CV FRANCISCO LÓPEZ + CL 17-02-2023.pdf'
import { Link } from 'react-scroll'
import AboutMe from '../../components/AboutMe/AboutMe'
import Proyects from '../../components/Proyects/Proyects'
import EmailSend from '../../components/EmailSend/EmailSend'
import HardSkills from '../../components/HardSkills/HardSkills'
import Training from '../../components/Training/Training'





function Home() {


    return (
        <>
            <div className='app-body'>
                <div className='home'>

                    <div className='main-container'>
                        <div className='info-name'>
                            <div className='name-head'>
                                <small>Hola, soy </small>
                                <h1>Fran </h1>
                                <h1>López Laperal</h1>
                            </div>
                            <div className="animation-home">
                                <ul className='animation'>
                                    <li>FrontEnd</li>
                                    <li>BackEnd</li>
                                    <li>FullStack</li>
                                </ul>
                                <p>Developer</p>

                            </div>
                            <div className='links-home'>
                                <div className='btn-group'>
                                    <button className='btn-home'>
                                        <Link to='proyects'>Ver proyectos </Link>
                                    </button>

                                    <button className='btn-home-cv'>
                                        <a href={pdf}>Descarga CV</a>
                                    </button>
                                </div>

                                <a className='btn-media' target='_blank' rel="noreferrer" href="https://github.com/Fran-Lopez-Laperal">
                                    <button>
                                        <img className='media' src={github} alt={github} />
                                    </button>
                                </a>
                                <a className='btn-media-1' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/francisco-laperal/'>
                                    <button className='media'>
                                        <img src={linkedin} alt={linkedin} />
                                    </button>
                                </a>


                            </div>
                        </div>


                        <div className='main-img-container'>
                            <img className='main-img animate__animated animate__fadeInLeft animate__delay-1s' src={mainImg} alt={mainImg} />
                        </div>
                        <div></div>

                    </div>
                </div>
                <div>
                    <AboutMe
                        style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}
                    />
                </div>
                <div>
                    <HardSkills
                        style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}
                    />
                </div>
                {/* <div>
                    <Training
                        style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}
                    />
                </div> */}

                <div>
                    <Proyects
                        style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}
                    />
                </div>

                <div>
                    <EmailSend
                        style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}
                    />
                </div>
            </div>

        </>

    )
}

export default Home