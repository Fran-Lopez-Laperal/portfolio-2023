import React from 'react'

import './Training.css'
import { useState } from 'react'
import Trainings from '../../Data/Training'



const Training = () => {


  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (titulo) => {
    const objeto = Trainings.find((item) => item.title === titulo)
    setShowMenu(objeto)
  }



  return (
    <div id='training' className='training'>
      <p className='letters-head-section'>Formación</p>

      <menu className='training-menu'>
        <ul>
          {Trainings.map(({ id, title }) => (
            <li key={id} className='training-menu-li'>
              <button onClick={() => handleShowMenu(title)} className='training-menu-li-button'>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </menu>
      {showMenu && (
        <section className='info-training'>
          <article className='info-training-article'>
            <header className='info-training-article-header'>
              <h1>{showMenu.title}</h1>
              <p>{showMenu.description}</p>
            </header>

            <img src={showMenu.img} alt={showMenu.title} />
          </article>

        </section>

      )

      }

    </div>
  )
}

export default Training