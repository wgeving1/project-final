import { registerNewUser } from '../../commands/users'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class RegisterController {
  constructor(router) {
    router.post('/register', wrapAsyncFunc(this.registerUser))
  }

  async registerUser(req, res) {
    const { email, firstName, surname, username, confirmedPassword, password } = req.body
    const results = await registerNewUser(email, firstName, surname, username, confirmedPassword, password)
    res.send(results)
  }
}
