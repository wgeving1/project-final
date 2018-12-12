import { fetchTicTacToeQueue } from '../../commands/games'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class GamesController {
  constructor(router) {
    router.get('/tic-tac-toe', wrapAsyncFunc(this.fetchQueue))
    // router.get('/recover/:email', wrapAsyncFunc(this.))
  }

  async fetchQueue(req, res) {
    // const token = req.user

    const results = await fetchTicTacToeQueue()
    res.send(results)
  }
  
}
