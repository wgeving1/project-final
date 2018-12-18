import React from 'react'
import { withRouter } from 'react-router-dom'
import connected from '../../../state/setup/connect'
import * as gamesActions from '../../../../state/processes/games/actions'
import { selector as games } from '../../../../state/entities/games/reducer'


class TicTacToe extends React.Component {
  componentDidMount() {
    this.props.gamesActions.fetchTicTacToeGame(id)
    const { match: { params: id } } = this.props
  }

  render() {
    return (
      <div>Let's Play Tic Tac Toe!</div>
    )
  }
}

export default connected([games],[gamesActions])(withRouter(TicTacToe))
