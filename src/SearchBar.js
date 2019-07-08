import React from 'react'
import { connect } from 'react-redux'

const SearchBar = ({dispatch, search}) => {
    const getForecast = val => {
        document.getElementById('searchInput').value = val
        dispatch({ type: 'CLEAR_SEARCH' })
        dispatch({
            type: 'GET_FORECAST',
            val
        })
    }
    const handleChange = e => {
        if (e.target.value === '') return null
        dispatch({
            type: 'SEARCH',
            val: e.target.value
        })
    }
    const handleBlur = e => {
        if (e.relatedTarget === null) dispatch({ type: 'CLEAR_SEARCH' })
    }
    let citises = null
    if (search !== '' && search.length !== 0) {
        citises = search.map(({ name }, index) => {
            if (index > 5) return null
            return <div key={name} onClick={() => getForecast(name)}>{name}</div>
        })
    }
    return (
        <div className='search'>
            <input className='searchBar' placeholder='Enter city' id='searchInput' onChange={handleChange} onClick={handleChange} onBlur={handleBlur} />
            <div className='citisesSearch' tabIndex={0}>
                {citises}
            </div>
        </div>
    )
}


const mapStateToProps = ({ search }) => {
    return { search }
}

export default connect(mapStateToProps)(SearchBar)