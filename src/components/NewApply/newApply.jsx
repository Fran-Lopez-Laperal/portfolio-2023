import { useState } from "react"
import { useNavigate } from "react-router"
import { newApply } from "../../api-services/api-services"

function Apply() {

    const navigate = useNavigate()

    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        newApply({
            offerTitle: e.target.offerTitle.value,
            business: e.target.business.value,
            description: e.target.description.value,
            typeJob: e.target.typeJob.value,
            location: e.target.location.value,
            avatar: e.target.avatar.files[0]
        })
            .then(() => {
                navigate('/new-applies')
            })
            .catch(error => {
                setError(error.response.data.message)
            })
    }


    return (
        <>

            <div className="div-form ">
                <form className="" onSubmit={handleSubmit}>

                    <div className="">
                        Titulo Oferta
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input type="text" name="offerTitle" />
                    </div>

                    <div className="">
                        Tipo de trabajo
                        <input type='text' name="typeJob" />
                        {error?.typeJob}
                    </div>

                    <div className="">
                        Empresa
                        <input type="text" name="business" />
                        {error?.business}
                    </div>

                    <div className="">
                        Descripción
                        <input type="text" name="description" />
                        {error?.description}
                    </div>

                    <div className="">
                        Localización
                        <input type="text" name="location" />
                        {error?.location}
                    </div>


                    <div className="">
                        Logo empresa
                        <input type='file' name="avatar" />
                        {error?.avatar}
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-danger col-12 mb-1">
                        Nueva Noticia
                    </button>
                </form>

            </div>
        </>
    )
}

export default Apply