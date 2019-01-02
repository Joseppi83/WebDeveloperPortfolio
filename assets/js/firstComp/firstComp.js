import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
    console.log('Word.')
  }
  render () {
    return (<div className='home'>
        Me want burger.
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
