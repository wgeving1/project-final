import TYPES from '../../processes/games/types'

export const initialState = {
queued: [],
inGame: false, 
redirectToGameId: null
}

const loadQueuedData = (state, {userHandle, queued} ) => {
const activeUserQueued = queued.filter(u => u.userHandle === userHandle).length === 1
  
  return {
    ...state,
  queued,
  inGame: activeUserQueued
  }
}
const addedToQueued = (state, { queued } ) => ({
    ...state, 
    queued, 
    inGame: true
  })
  const inviteAcceptedRedirectToGame = (state, { gameId } ) => ({
    ...state, 
    redirectToGameId: gameId
  })

const handlers = {
  [TYPES.FETCH_SUCCESS]: loadQueuedData,
  [TYPES.ADD_TO_QUEUE_SUCCESS]: addedToQueued,
  [TYPES.ACCEPT_INVITE_TO_PLAY_SUCCESS]: inviteAcceptedRedirectToGame
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