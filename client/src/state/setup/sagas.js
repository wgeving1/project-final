import LoginSagas from '../processes/auth/login/actions'
import LogoutSagas from '../processes/auth/logout/actions'
import RegisterSagas from '../processes/register/actions'
import GamesSagas from '../processes/games/actions'

import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(LoginSagas)
    .concat(LogoutSagas)
    .concat(RegisterSagas)
    .concat(GamesSagas)
  yield all(sagas)
}
