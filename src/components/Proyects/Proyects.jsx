import './Proyects.css'
import bike_locker from '../../assets/images/bike-locker.png'
import rallye from '../../assets/images/placa.png'
import jorunal from '../../assets/images/journal-app.png'
import mern from '../../assets/images/MERN.png'
import postman from '../../assets/images/postman.png'
import bootstrap from '../../assets/images/bootstrap-social-logo.png'
// import css from '../../assets/images/css.png'

function Proyects() {

    let animado = document.querySelectorAll('.card_div')
    function mostrarScroll() {
        let scrollTop = document.documentElement.scrollTop;

        for (let i = 0; i < animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - 300 < scrollTop) {
                animado[i].style.opacity = 1;
            }
        }
    }

    window.addEventListener('scroll', mostrarScroll)



    return (
        <>
            <div className="proyects" id="proyects">
                <p className='letters-head-section'>Proyectos</p>
                <div className='cards-container'>
                    {/* <div className='card-container'>
                    <p> CYBER SPACE</p>
                    <div className='card'>
                        <img src={bike_locker} alt={bike_locker} />
                        <hr />
                        <div className='card-body'>

                        </div>
                    </div>
                    <button className='btn-git'>
                        <a className='btn-git-a' href="/" style={{ textDecoration: 'none', color: 'white' }}>Source</a>
                    </button>
                </div> */}
                    <div className='card_div'>
                        <p>WEB PERSONAL</p>
                        <div className='card'>
                            <div className='img-card-portfolio'>

                                <p className='letters'>FLL  💻</p>
                            </div>

                            <hr />

                            <div className='card-body-portfolio'>
                                <img src={mern} alt={mern} />
                            </div>
                            <div className='card-link-portfolio'>
                                <button className='btn-git'>
                                    <a href="https://github.com/franlopezhack/Journal-app"
                                        className='btn-git-a' target="_blank" rel="noreferrer"
                                        style={{ textDecoration: 'none', color: 'white' }}>
                                        Repo GitHub
                                    </a>
                                </button>
                                <button className='btn-git'>
                                    <a href="https://journal-fran.netlify.app/"
                                        className='btn-git-a' target="_blank" rel="noreferrer"
                                        style={{ textDecoration: 'none', color: 'white' }}>
                                        Link
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='card_div'>
                        <p>BIKE LOCKER</p>
                        <div className='card'>
                            <div className='img-card'>
                                <img src={bike_locker} alt={bike_locker} />
                            </div>

                            <hr />

                            <div className='card-body'>
                                <img src={mern} alt={mern} />
                                <img src={postman} alt={postman} />
                                <img id='bs' src={bootstrap} alt={bootstrap} />
                            </div>
                            <div className='card-link'>
                                <button className='btn-git'>
                                    <a href="https://github.com/franlopezhack/SHOP-BIKES" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Repo GitHub</a>
                                </button>
                                <button className='btn-git'>
                                    <a href="https://iron-bike-shop.herokuapp.com/" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Link</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='card_div'>
                        <p> RALLYE DE PONTEVEDRA</p>
                        <div className='card'>
                            <div className='img-card'>
                                <img src={rallye} alt={rallye} />
                            </div>

                            <hr />

                            <div className='card-body'>
                                <img src={mern} alt={mern} />
                                <img src={postman} alt={postman} />
                                <img id='bs' src={bootstrap} alt={bootstrap} />
                            </div>
                            <div className='card-link'>
                                <button className='btn-git'>
                                    <a href="https://github.com/franlopezhack/rallye-pontevedra" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Repo GitHub</a>
                                </button>
                                <button className='btn-git'>
                                    <a href="https://www.rallyedepontevedra.com/" target="_blank" rel="noreferrer" className='btn-git-a' style={{ textDecoration: 'none', color: 'white' }}>Link</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card_div'>
                        <p> JOURNAL APP</p>
                        <div className='card'>
                            <div className='img-card'>
                                <img src={jorunal} alt={jorunal} />
                            </div>

                            <hr />

                            <div className='card-body'>
                                {/* <img src={jest} alt={jest} />
                                <img src={postman} alt={postman} />
                                <img id='bs' src={bootstrap} alt={bootstrap} /> */}
                            </div>
                            <div className='card-link'>
                                <button className='btn-git'>
                                    <a href="https://github.com/franlopezhack/rallye-pontevedra" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Repo GitHub</a>
                                </button>
                                <button className='btn-git'>
                                    <a href="https://www.rallyedepontevedra.com/" target="_blank" rel="noreferrer" className='btn-git-a' style={{ textDecoration: 'none', color: 'white' }}>Link</a>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Proyects