
import { Link } from 'react-router-dom'
import './Proyects.css'
import rallye2023 from '../../assets/images/rallye.png'
import bikeLocker from '../../assets/images/bike-locker.png'
import hackedex from '../../assets/images/Hackedex.png'
import cyber from '../../assets/images/Cyber Space.png'
import postit from '../../assets/images/Proyecto Bootcamp.png'
import telmo from '../../assets/images/telmo.png'


function Proyects() {



    return (
        <>
            <div className="proyects" id="proyects">
                <p className='letters-head-section'>Proyectos</p>
                {/* <div className='div-parrafo-proyectos'>
                    <p className='parrafo-proyectos'>Todos estos proyectos ha sido creado durante la formación que he realizado en los Bootcamps
                        de desarrollo Web y en curos realizado de manera autodidacta en la plataforma Udemy.
                    </p>
                </div> */}

                <section className='section-proyects'>

                <Link className="figure" id='figure' to='' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={telmo} alt="" />
                        </div>
                       
                            <h1 className='h1-proyects'>Obras y Reformas  Telmo</h1>
                   

                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>El proyecto se trata de una API de noticias realizada con Node.js, Express y MySQL.

                            </p>
                        </div> */}
                    </Link>
                 
                    <Link className="figure" id='figure' to='https://github.com/Fran-Lopez-Laperal/Front-Postit-News' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={postit} alt="" />
                        </div>
                       
                            <h1 className='h1-proyects'>PostIt - News</h1>
                   

                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>El proyecto se trata de una API de noticias realizada con Node.js, Express y MySQL.

                            </p>
                        </div> */}
                    </Link>

                    <Link className="figure" id='figure' to='https://github.com/Fran-Lopez-Laperal/hackadex' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={hackedex} alt="" />
                        </div>
                        <h1 className='h1-proyects'>Hackadex</h1>
                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>Este es uno de los proyectos que he realizado durante
                                el bootcamp en HACK A BOSS, Se trata de una Pokedex en la que se pueden encontrar todos los los Pokemon existentes con un filtro de búsqueda realizando la consulta a la API de Pokemon.
                                Para este proyecto hemos utilizado tecnologías como JS, HTML y CSS.
                            </p>
                        </div> */}
                    </Link>
                    <Link className="figure" id='figure' to='https://www.rallyedepontevedra.com/' style={{ textDecoration: 'none' }}>

                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={rallye2023} alt="" />
                        </div>
                        <h1 className='h1-proyects'>Rallye de Pontevedra 2023</h1>
                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>Web infomativa para el Rallye de Pontevedra 2023. Se trata de un proyecto realizado
                                con el stack MERN, consume un API de noticias creada con Node y Express. La parte front
                                esta creada con React
                            </p>
                        </div> */}
                    </Link>
                    <Link className="figure" id='figure' to='https://github.com/Fran-Lopez-Laperal/SHOP-BIKES' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={bikeLocker} alt="" />
                        </div>
                        <h1 className='h1-proyects'>Bike Locker</h1>
                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>Es una web basada en una tienda de bicicletas.Se trata de un proyecto realizado
                                con el stack MERN, consume un API de noticias creada con Node y Express. La parte front
                                esta creada con React que consume la API.
                            </p>
                        </div> */}
                    </Link>

                    <Link className="figure" id='figure' to='https://github.com/Fran-Lopez-Laperal/CYBER-SPACE' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={cyber} alt="" />
                        </div>
                        <h1 className='h1-proyects'>Cyber - Space</h1>
                        {/*  <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'> Juego realizado con JavaScript, CSS y HTML
                            </p>
                        </div> */}
                    </Link>



                    {/* <Link className="figure" id='figure' to='https://github.com/Fran-Lopez-Laperal/portfolio-2023' style={{ textDecoration: 'none' }}>
                        <div className='container-img-proyects'>
                            <img className='img-proyects' id='img-proyects' src={rallye2022} alt="" />
                        </div>
                        <h1 className='h1-proyects'>Rallye de Pontevedra</h1>
                        <div className='container-info-proyect' id='container-info-proyect'>
                            <p className='info-proyect'>Web infomativa para el Rallye de Pontevedra 2023. Se trata de un proyecto realizado
                                con el stack MERN, consume un API de noticias creada con Node y Express. La parte front
                                esta creada con React
                            </p>
                        </div>
                    </Link> */}



                    {/* <div className='div'>
                        <img className='img-div' src={img} alt="" />
                    </div> */}

                </section>
            </div>

        </>
    )
}

export default Proyects