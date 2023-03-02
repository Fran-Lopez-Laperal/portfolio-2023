import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getApplies } from '../../api-services/api-services'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

import './AppliesList.css'

function AppliesList() {

    const [applies, setApplies] = useState()
    const { search } = useLocation()

    useEffect(() => {
        const url = new URLSearchParams(search)
        const category = url.get('category')
        getApplies(category)
            .then((applies) => {
                setApplies(applies)
            })
    }, [search])

    if (!applies) {
        return null
    }



    return (
        <div className='apply-list'>
            <p> <strong>Busca por: ofertas, consultoras, perfiles</strong></p>
            <SearchBar />
            <h1>Datos de búsqueda de empleo</h1>
            {
                applies.map(apply =>
                    <Link to={`/applys/${apply.id}`} style={{ textDecoration: "none" }} key={apply.id}>
                        <div className='apply-card'>
                            <div className='apply-card-detail' key={apply._id} >
                                <div className=''>
                                    <img src={apply.avatar} alt={apply.avatar} />
                                </div>
                                <div className='apply-card-info'>
                                    <h3 >{apply.offerTitle}</h3>
                                    <h4>{apply.searchWeb}</h4>
                                    <h5>{apply.typeJob}</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default AppliesList