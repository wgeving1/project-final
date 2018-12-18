import { fetchTicTacToeQueue, addUserToQueue, inviteUserToGame, acceptInviteFromUser, fetchTicToeGameData } from '../../commands/games'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class GamesController {
  constructor(router) {
    router.get('/tic-tac-toe', wrapAsyncFunc(this.fetchQueue))    
    router.get('/play/tic-tac-toe/:id', wrapAsyncFunc(this.fetchGameData))
    router.post('/tic-tac-toe/add', wrapAsyncFunc(this.addUser))
    router.post('/tic-tac-toe/invite', wrapAsyncFunc(this.inviteUser))
    router.put('/tic-tac-toe/accept', wrapAsyncFunc(this.acceptInvite))


  }

  async fetchQueue(req, res) {
    const token = req.user
    const results = await fetchTicTacToeQueue(token.userHandle)
    res.send(results)
  }

  async addUser(req, res) {
    const token = req.user
    const results = await addUserToQueue(token.userHandle)
    res.send(results)
  }

  async inviteUser(req, res) {
    const token = req.user
    const invitedUser = req.body.userHandle
    console.log("HERE", token)
    const results = await inviteUserToGame(token.userHandle, invitedUser)
    console.log("Results", results)
    res.send(results)
  }
  async acceptInvite(req, res) {
    const token = req.user
    const userInviter = req.body.userHandle
    await acceptInviteFromUser(token.userHandle, userInviter)
    res.sendStatus(200)
  }
  async fetchGameData(req, res) {
    const { id } = req.params
    const results = await fetchTicToeGameData(id)
    res.send(results)
  }

}
