import { combineReducers } from 'redux'

import users from '../entities/users/reducer'
import games from '../entities/games/reducer'
import LOGOUT_TYPES from '../processes/auth/logout/types'

const appReducer = combineReducers({
  users,
  games  
})

export default (state, action) => {
  if (action.type === LOGOUT_TYPES.LOGOUT_USER_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}