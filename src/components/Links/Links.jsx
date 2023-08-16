import React from 'react'

import './Links.css'
import { Link } from 'react-router-dom'

import github from '../../assets/Links/github.png'
import whats from '../../assets/Links/Whatsapp-Transparent-PNG.png'
import linkedin from '../../assets/Links/linkedin.avif'

const Links = () => {

    const phoneNumber = '677116137'; // 
    const message = 'Hola, ¿cómo estás?';
    
    const openWhatsApp = () => {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };



    return (
        <section className='links'>
        <article className='links_aside'>
          <Link target='_blank' rel="noreferrer" to='https://www.linkedin.com/in/francisco-laperal/'>
            <img className='img_social_links' src={linkedin} alt='LinkedIn' />
          </Link>
          <Link target='_blank' rel="noreferrer" to="https://github.com/Fran-Lopez-Laperal">
            <img className='img_social_links' src={github} alt='GitHub' />
          </Link>
          <Link onClick={openWhatsApp}>
            <img className='img_social_links' src={whats} alt='WhatsApp' />
          </Link>
        </article>
      </section>
    )
}

export default Links