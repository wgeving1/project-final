import { fetchTicTacToeQueue, addUserToQueue, inviteUserToGame} from '../../commands/games'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class GamesController {
  constructor(router) {
    router.get('/tic-tac-toe', wrapAsyncFunc(this.fetchQueue))
    router.post('/tic-tac-toe/add', wrapAsyncFunc(this.addUser))
    router.post('/tic-tac-toe/invite', wrapAsyncFunc(this.inviteUser))

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
    // const token = req.user
    // const invitedUser = req.body.userHandle
    // console.log("HERE", token)
    // const results = await inviteUserToGame(token.userHandle)
    // console.log("Results", results)
    res.send(results)
  }
}
