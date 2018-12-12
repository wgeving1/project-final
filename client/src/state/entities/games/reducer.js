import TYPES from '../../processes/games/types'

export const initialState = {
queued: []
}

const loadQueuedData = (state, action) => ({
  ...state,
  queued: action.queued
})

const handlers = {
  [TYPES.FETCH_SUCCESS]: loadQueuedData
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'games',
  select(state) {
    return state.games
  }
}