import React, {Component} from 'react'
import '../../tic-tac-toe/index.css'
import ReactDom from 'react-dom'

class Square extends Component {
	render() {
		return(
				<button className="square">
						{this.props.value}
				</button>
		);
	} 
}
