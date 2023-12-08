// Write your code here
import {Components} from 'react'
import './index.css'

class FruitsCounter extends Components {
  state = {count: 0}
  onMango = () => {
    this.setState(priSate => {
      return {count: priSate.count + 1}
    })
  }

  onBanana = () => {
    this.setState(priSate => {
      return {count: priSate.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          Bob ate {count} mangoes and {count} bananas
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
          alt="mango"
          className="img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
          alt="banana"
          className="img"
        />

        <div>
          <button className="button" type="button" onClick={this.onMango}>
            Eat Mango
          </button>
          <button className="button" type="button" onClick={this.onBanana}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
