import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Page} from './styles'
import * as gamesActions from '../../../../state/processes/games/actions'
import { Icon } from 'semantic-ui-react'
import connected from '../../../../state/setup/connect'
import { selector as games } from '../../../../state/entities/games/reducer'
import { selector as users } from '../../../../state/entities/users/reducer'


class TicTacToe extends Component {
  
  componentDidMount() {
    const {active: { userHandle } } = this.props.users
    this.props.gamesActions.fetch(userHandle)
  }

  handleAddClick = (event) => {
    event.preventDefault()
    this.props.gamesActions.addToQueue()
  }
  handleRemoveClick = () => {
    console.log("Nothing")
  }
  handleInvite = (event, userHandle) => {
    event.preventDefault()
    this.props.gamesActions.inviteToGame(userHandle)
  }
  handlePlay = (event, userHandle, gameId) => {
    event.preventDefault()
    this.props.gamesActions.acceptInviteToPlay(userHandle, gameId)
  }
  render() {
    const {active: { userHandle } } = this.props.users
    const {queued, inGame, redirectToGameId } = this.props.games
    if(redirectToGameId) {
      return (
        <Redirect to={`tic-tac-toe/${redirectToGameId}`}/>
      )
    }
    return (
      <Page>
            {
              inGame
              ? <button onClick={this.handleRemoveClick}>Remove Me</button>
              : <button onClick={this.handleAddClick}>Add Me To Game!</button>
            }
            <ul>
            {queued.map((u,i) => {
              if(userHandle === u.userHandle) {
                return (
                <div key={i}> {u.username} (You) </div>
                )
              } else if(u.status === 'waiting') {
                // cancel the request
                return (
                <div key={i}>{u.username} 
                    <Icon name="hourglass half" onClick={(event) => this.handleInvite(event, u.userHandle)}/>
                </div>
                )
              } else if(u.status = 'invited')
                return (
                <div key={i}>{u.username} 
                    <Icon name="gamepad" onClick={(event) => this.handlePlay(event, u.userHandle, u.gameId)}/>
                </div>  
                )
              else {
                return (
                  <div key={i}>{u.username}
                      <Icon name="plus square" onClick={(event) => this.handleInvite(event, u.userHandle)} />
                  </div>
                )
              }
            })}
            </ul>
      </Page>
    )
  }
}

export default connected([games, users],[gamesActions])(TicTacToe)
