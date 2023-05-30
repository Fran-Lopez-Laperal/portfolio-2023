import emailjs from 'emailjs-com'
import { useState } from 'react'


import './EmailSend.css'

function EmailSend() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")


    // useEffect(() => {
    //     setMail();
    //     setMessage();
    //     setName()
    // }, [])



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (mail.trim() === "") {
            console.error("Falta nombre")
       
        }

        if (message.trim() === "") {
            console.error('faltan mensaje')
       
        }
        if (name.trim() === "") {
            console.error('faltan falta nombre')
       
        }

        try {
            const response = await emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            if (response.text === "OK") {
                console.log(response)
           
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
                    <div>

                       
        
                        
                            <form className="form-message" onSubmit={handleSubmit}>
                                <div className='input-container'>
                                    <div className="form">
                                   
                                        <input type="text" value={name} onChange={handleName} name="nombre" id='nombre' placeholder='  Tú Nombre' />
                                    </div>

                                    <div className="form">
                                        <input type='text' value={mail} onChange={handleMail} name="email" id='nombre' placeholder='  example@example.com' />
                                    </div>

                                    <div className="form-text">
                                        <textarea type="text" value={message} onChange={handleMessage} name="mensaje" id='mensaje' placeholder='  Déjame tú mensaje...'></textarea>
                                    </div>
                                    <div className='email-send'>
                                        <button type="submit" id='email-send'>
                                            Enviar mensaje
                                        </button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>


                </div>
            </div>

            )
}

            export default EmailSend