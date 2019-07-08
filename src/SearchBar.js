import React, {Component} from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component{
    getForecast = val => {
        document.getElementById('searchInput').value = val
        this.props.dispatch({ type: 'CLEAR_SEARCH' })
        this.props.dispatch({
            type: 'GET_FORECAST',
            val
        })
    }
    handleChange = e => {
        if (e.target.value === '') return null
        this.props.dispatch({
            type: 'SEARCH',
            val: e.target.value
        })
    }
    handleBlur = e => {
        if(e.relatedTarget === null) this.props.dispatch({ type: 'CLEAR_SEARCH' })
    }
    render(){
        let {search} = this.props
        let citises = null
        if (search !== '' && search.length !== 0 ) {
            citises = search.map(({ name }, index) => {
                if (index > 5) return null
                return <div key={name} onClick={() => this.getForecast(name)}>{name}</div>
            })
        }
        return (
            <div className='search'>
                <input className='searchBar' placeholder='Enter city' id='searchInput' onChange={this.handleChange} onClick={this.handleChange}  onBlur={this.handleBlur}/>
                <div className='citisesSearch' tabIndex={0}>
                    {citises}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ search }) => {
    return { search }
}

export default connect(mapStateToProps)(SearchBar)