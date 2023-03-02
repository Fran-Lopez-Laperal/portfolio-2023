import './AboutMe.css'
import bike from '../../assets/images/bike.jpeg'



function AboutMe() {



    return (
        <div className='about-me'>
            <p className='letters-head-section'>Sobre mí</p>
            <section className='section-about-me'>

                <div id='card-about-me1' className='card-about-me'>
                    <h2 className='letters-about-section'>Quien soy?</h2>
                    <div className='list-container'>
                        <p><span style={{ color: 'white' }}>Junior </span> Full Stack MERN</p>
                    </div>
                    <div className='letters-about-section-text'>
                        <p> Apasionado por:</p>
                        <p><span>👨🏻‍💻</span> La programación,</p>
                        <p><span>⚙️</span>La tecnologia, </p>
                        <p><span>🏔️</span>El deporte al aire libre!</p>

                    </div>
                </div>



                <div id='card-about-me2' className='card-about-me'>
                    <h2 className='letters-about-section'>Mi formación</h2>
                    <div className='list-container'>
                        <ul className='list-skill'>
                            <li> <span>💻</span> -WEB DEVEOPMENT BOOTCAMP MERN</li>
                            <li className='skill-sport'> <span>🤸🏼‍♂️</span>- CS ACTIVIDADES FÍSICAS Y DEPORTIVAS</li>
                        </ul>
                    </div>
                </div>


                <div className='container-card'>
                    <img src={bike} alt={bike} />
                    <div id='card-about-me3' className='card-about-me'>
                        <h2 className='letters-about-section'>Mis hobbies</h2>
                        <div className='list-container'>
                            <ul className='list-hobbies'>
                                <li > <span>🚵🏼</span> - CICLISMO</li>
                                <li > <span>🎣</span> - PESCA DEPORTIVA</li>
                                <li> <span>✈️</span> - VIAJAR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-me'>
                <p className='section-me-text' style={{ marginTop: '50px' }}>
                    Mi nombre es Francisco López y soy Desarrollador Junior Full Stack.
                    Soy de Sanxenxo, Pontevedra un precioso pueblo situado en las Rias Baixas.
                </p>
                <p className='section-me-text'>
                    En Octubre de 2021 comencé el Bootcamp en Ironhack tras tomar la decisión de querer dar un giro a mi vida profesional.
                    Mi formación hasta el momento ha estado enfocada en la Actividad Física y el Deporte, pero desde bien pequeño me ha gustado
                    la tecnología y he tenido curiosidad por mantenerme actualizado en este mundo digital que no para de cambiar.
                </p>
                <p className='section-me-text'>
                    Soy una persona pro activa, enérgica, apasionada con todo lo que hago y me encanta trabajar en equipo.
                    Al mismo tiempo que estoy en la búsqueda de esa oportunidad que me permita seguir creciendo como desarrollador,
                    continúo mi formación realizando cursos basados en las tecnologías que he aprendido durante el Bootcamp así como otras que
                    creo son muy interesantes para mi desarrollo.
                </p>



                <section className='section-me-check'>
                    <p>
                        <i className="fa fa-check" style={{ color: '#03fb24', marginRight: '10px' }}></i>
                        Desarrollo de una aplicación Full Stack MERN
                    </p>
                    <p>
                        <i className="fa fa-check" style={{ color: '#03fb24', marginRight: '10px' }}></i>
                        Desarrollo Front End con React.
                    </p>
                    <p>
                        <i className="fa fa-check" style={{ color: '#03fb24', marginRight: '10px' }}></i>
                        Desarrollo y consumo de API´S
                    </p>

                </section>


                <p className='section-me-text' style={{ marginBottom: '50px' }}>
                    Como Junior aprecio mucho la cercanía con los demás integrantes del equipo para así poder aprender con mayor facilidad y agilidad,
                    por lo que valoro cualquier modalidad de jornada.

                    Busco hacerme un hueco en este sector y conseguir los objetivos que son importantes para mi tanto personal como profesionalmente.
                    
                </p>
            </section>

        </div>
    )
}

export default AboutMe