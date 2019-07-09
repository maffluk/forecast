import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Search from './SearchBar'
import ForecastCart from './ForecastCart'


class App extends Component {
  constructor(){
    super()
    this.state = {
      error: false
    }
  }
  componentWillMount = () => {
    this.props.dispatch({ type: 'GET_FORECAST', val: 'Lviv' })
  }
  render() {
    let Loading = null
    if(this.props.forecast === ''){
      Loading = (
        <div className='forecastCard'>
              <div className='cardHeader'>
                <div className="lds-css ng-scope">
                <div className="lds-spinner" style={{width:"100%", height:"100%"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
          </div>
      )
    }
    if(this.props.forecast === 'error'){
      Loading = <div className='forecastCard'>
                  <div className='cardHeader'>
                    Oops, something went wrong! Sorry...
                  </div>
              </div>
    }
    return (
      <div className="App">
        <Search />
        {Loading === null ? <ForecastCart forecast={this.props.forecast}/> : Loading}
      </div>
    )
  }
}

const mapStateToProps = ({forecast}) => {
  return { forecast }
}

export default connect(mapStateToProps)(App)
