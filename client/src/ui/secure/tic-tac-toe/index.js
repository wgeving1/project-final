import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import connected from '../../../state/setup/connect'
import * as gamesActions from '../../../state/processes/games/actions'
import { selector as games } from '../../../state/entities/games/reducer'


class TicTacToe extends Component {
  componentDidMount() {
    const { match: { params: gameId } } = this.props
    this.props.gamesActions.fetchTicTacToeGame(gameId)
    // eslint-disable-next-line
  }

  render() {
    return (
      <div>Let's Play Tic Tac Toe!</div>
    )
  }
}

export default connected([games],[gamesActions])(withRouter(TicTacToe))
