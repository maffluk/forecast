import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Search from './SearchBar'
import ForecastCart from './ForecastCart'


class App extends Component {
  componentWillMount = () => {
    this.props.dispatch({ type: 'GET_FORECAST', val: 'Lviv' })
  }
  render() {
    let Loading = (
      <div className='forecastCard'>
            <div className='cardHeader'>
              <div className="lds-css ng-scope">
              <div className="lds-spinner" style={{width:"100%", height:"100%"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </div>
        </div>
    )
    return (
      <div className="App">
        <Search />
        {this.props.forecast === '' ? Loading : <ForecastCart forecast={this.props.forecast}/>}
      </div>
    )
  }
}

const mapStateToProps = ({forecast}) => {
  return { forecast }
}

export default connect(mapStateToProps)(App)
