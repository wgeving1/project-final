import React, {Component} from 'react'
import '../../tic-tac-toe/index.css'
import ReactDom from 'react-dom'

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}
render() {
	 const status = 'Next Player: X';
		return(
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
			</div>
		)
	}


