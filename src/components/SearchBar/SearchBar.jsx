import { useNavigate } from 'react-router'

import './SearchBar.css'

function SearchBar() {

    const navigate = useNavigate()

    function handleSearch(e) {
        const { search } = e.target.elements
        e.preventDefault()
        navigate(`/applies-list?category=${search.value}`)
    }

    return (
        <div className='search-bar'>
            <form className='form-search' onSubmit={handleSearch}>
                <input className='input-search' name='search' type="search" placeholder='Busca por categoria' />
                <button className='input-' type='submit'>Buscar</button>
            </form>
        </div>
    )
}

export default SearchBar