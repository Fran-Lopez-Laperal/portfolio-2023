import './HardSkills.css'
import bootstrap from '../../assets/images/bootstrap-social-logo.png'
import css from '../../assets/images/css.png'
import github from '../../assets/images/github.png'
import html from '../../assets/images/html.png'
import js from '../../assets/images/JS.png'
import mern from '../../assets/images/MERN.png'
import postman from '../../assets/images/postman.png'
import webpack from '../../assets/images/webpack.png'
import react from '../../assets/images/React.png'
import node from '../../assets/images/Node.png'
import express from '../../assets/images/expressjs_logo_icon_169185.png'
import mysql from '../../assets/images/mysql.png'

function HardSkills(props) {


    return (
        <div  className="hard-skills">
            <p className='letters-head-section'>Technologies</p>
            <div className='div-container'>
                <div className='tech-container'>
                    <figure className='react-logo'>
                        <img src={react} alt="" />
                    </figure>
                    <figure>
                        <img src={js} alt="" />
                    </figure>
                    <figure>
                        <img src={node} alt="" />
                    </figure>
                    <figure id='express'>
                        <img src={express} alt="" />
                    </figure>
                    <figure>
                        <img src={mysql} alt="" />
                    </figure>
                    <figure>
                        <img src={css} alt="" />
                    </figure>
                    <figure>
                        <img src={html} alt="" />
                    </figure>
                    <figure>
                        <img src={github} alt="" />
                    </figure>
                    <figure>
                        <img src={mern} alt="" />
                    </figure>
                    <figure>
                        <img src={postman} alt="" />
                    </figure>
                    <figure>
                        <img src={bootstrap} alt="" />
                    </figure>
                    <figure>
                        <img src={webpack} alt="" />
                    </figure>
                </div>

            </div>
        </div>
    )

}


export default HardSkills;