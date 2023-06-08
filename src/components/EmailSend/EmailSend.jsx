import emailjs from 'emailjs-com'
import { useState } from 'react'


import './EmailSend.css'

function EmailSend() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [sendMessage, setSendMessage] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [messageError, setMessageError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name.trim() === '') {
            setNameError(true)
            return
        } else {
            setNameError(false)
        }

        if (mail.trim() === '') {
            setMailError(true)
            return
        } else {
            setMailError(false)
        }

        if (message.trim() === '') {
            setMessageError(true)
            return
        } else {
            setMessageError(false)
        }

        try {
            const response = await emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            if (response.text === "OK") {
                console.log(response)
                setSendMessage(true)
            } else {
                console.error("Error al obtener los datos");


            }

        } catch (tryError) {
            console.error(tryError)

        }



        setMail("")
        setMessage("")
        setName("")

    }


    function handleName(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }

    function handleMail(e) {
        console.log(e.target.value)
        setMail(e.target.value)
    }

    function handleMessage(e) {
        console.log(e.target.value)
        setMessage(e.target.value)
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

                    <div className='container-form'>
                        {!sendMessage ?
                            <form className="form-message" onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <div className="form">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={handleName}
                                            name="nombre"
                                            id="nombre"
                                            placeholder="  Tú Nombre"
                                        />
                                        {nameError && <p className="error">¡El campo Nombre está vacío!</p>}
                                    </div>

                                    <div className="form">
                                        <input
                                            type="email"
                                            value={mail}
                                            onChange={handleMail}
                                            name="email"
                                            id="nombre"
                                            placeholder="  example@example.com"
                                        />
                                        {mailError && <p className="error">¡El campo Email está vacío!</p>}
                                    </div>

                                    <div className="form-text">
                                        <textarea
                                            type="text"
                                            value={message}
                                            onChange={handleMessage}
                                            name="mensaje"
                                            id="mensaje"
                                            placeholder="  Déjame tú mensaje..."
                                        ></textarea>
                                        {messageError && <p className="error">¡El campo Mensaje está vacío!</p>}
                                    </div>

                                    <div className="email-send">
                                        <button type="submit" id="email-send">
                                            Enviar mensaje
                                        </button>
                                    </div>

                                </div>
                            </form>
                            :
                            <div className='send-message'>
                                <h1>Mensaje enviado</h1>
                            </div>

                        }

                    </div>
                </div>


            </div>
        </div>

    )
}

export default EmailSend