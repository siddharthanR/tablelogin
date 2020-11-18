import React from 'react'
import axios from 'axios'
import Dropdown from '../containers/DropDown'

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedChart: '',
      visibility : false,
      options:[]
    }
  }

  componentDidMount(){
    return axios.get('./data.json')
      .then((response) => {
        this.setState({
          options:response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onChange = e => {
    this.setState({
      selectedChart : e.target.value,
      visibility: true
    }, () => {
      this.setState({
        visibility:false
      })
    })
  }

  render() { 
    return(
      <div className="container">
        <Dropdown id={"charts"} onChange={this.onChange} value={this.state.selectedChart}/>
        <Chart options={this.state.options}/>
      </div>
    )
  }
}

export default Chart