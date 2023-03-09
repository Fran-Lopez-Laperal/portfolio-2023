import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useNavigate } from "react-router"


import './EmailSend.css'

function EmailSend() {

    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    const [form, setForm] = useState(false);

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            .then(() => {
                navigate('')
            })

        setMensajeEnviado(true)
        setForm(true)
    }




    return (

        <div className='email'>
            <p className='letters-head-section'>Quieres que hablemos?</p>
            <div className='email-container'>

                <div className='email-text'>
                    <p>Sí quieres hacerme una pregunta o ponerte en contacto conmigo puedes hacerlo directamente
                        por cualquiera de las vías que facilito a continuación</p>
                </div>


                <div className='form-container'>

                    <div className='info-container'>
                        <h1 className='info-h1'>CONTACTA<span style={{ color: 'white' }}> CONMIGO</span></h1>
                        <h1 className='info-h1'>Nombre</h1>
                        <h4>Francisco José López Laperal</h4>
                        <h1 className='info-h1'>Email</h1>
                        <a href="mailto:fransanxenxo@gmail.com">fransanxenxo@gmail.com</a>
                        <h1 className='info-h1'>Teléfono</h1>
                        <h4> 🇪🇸 +34 - 677  116  137 </h4>
                    </div>
                    <div>

                        {!form ?
                            <form className="form-message" onSubmit={handleSubmit}>
                                <div className='input-container'>
                                    <div className="form">
                                        <input type="text" name="nombre" id='nombre' placeholder='  Tú Nombre' />
                                    </div>

                                    <div className="form">
                                        <input type='text' name="email" id='nombre' placeholder='  example@example.com' />
                                    </div>

                                    <div className="form-text">
                                        <textarea type="text" name="mensaje" id='mensaje' placeholder='  Déjame tú mensaje...'></textarea>
                                    </div>
                                    <div className='email-send'>
                                        <button type="submit" id='email-send'>
                                            Enviar mensaje
                                        </button>
                                    </div>

                                </div>

                            </form>
                            :
                            <div className='div-send-message'>
                                {mensajeEnviado &&
                                    <h1 className='send-message-h1 parpadea'>Mensaje Enviado</h1>}
                            </div>
                        }
                    </div>
                </div>


            </div>
        </div>

    )
}

export default EmailSend