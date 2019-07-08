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
    return (
      <div className="App">
        <Search />
        {this.props.forecast === '' ? 'Loading' : <ForecastCart forecast={this.props.forecast}/>}
      </div>
    )
  }
}

const mapStateToProps = ({forecast}) => {
  return { forecast }
}

export default connect(mapStateToProps)(App)
