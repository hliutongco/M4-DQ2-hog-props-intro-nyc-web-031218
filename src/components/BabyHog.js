import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

class BabyHog extends Component {

  state = {
      weight: 10,
      imgHeight: 100
    }


  selectImg = () => {
    if(this.props.eyeColor === "blue"){
      return imgMapper.blue
    }
    else if (this.props.eyeColor === "glowing") {
      return imgMapper.glowing
    }
    else if (this.props.eyeColor === 'sun') {
      return imgMapper.sun
    }
  }

  changeWeight = (event) => {
    event.preventDefault()

    if(event.target.id === 'increase'){
      this.state.weight++
      this.setState({weight: this.state.weight })
    }
    else {
      this.state.weight--
      this.setState({weight: this.state.weight })
    }
  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.props.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
          <h4>Eye Color: {this.props.eyeColor}</h4>
          <div className="wrap-crap">
            <Button animated id="increase" onClick={this.changeWeight}>
              <Button.Content id="increase" visible>Increase Weight</Button.Content>
              <Button.Content id="increase" hidden>
                <Icon id="increase" name='plus' />
              </Button.Content>
            </Button>

            <Button animated onClick={this.changeWeight}>
              <Button.Content visible>Decrease Weight</Button.Content>
              <Button.Content hidden>
                <Icon name='minus' />
              </Button.Content>
            </Button>
          </div>


          <img src={this.selectImg()} style={{height: `${this.state.imgHeight}px`}} alt="MasterBlasterJrJr" />


        </li>
    )
  }
}

export default BabyHog;
