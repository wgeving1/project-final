import * as axiosWrapper from '../../../utilities/axios-utils'

export const fetch = {
  formatUrl: () => `/games/tic-tac-toe`,
  request: (url) => axiosWrapper.get(url)
}
export const addToQueue = {
  formatUrl: () => `/games/tic-tac-toe/add`,
  request: (url) => axiosWrapper.post(url)
}
export const inviteUser = {
  formatUrl: () => `/games/tic-tac-toe/invite`,
  request: (url, body) => axiosWrapper.post(url, body)
}
export const acceptInviteToPlay = {
  formatUrl: () => `/games/tic-tac-toe/accept`,
  request: (url, body) => axiosWrapper.put(url, body)
}
export const fetchTicTacToeGame = {
  formatUrl: () => `/games/play/tic-tac-toe/${id}`,
  request: (url) => axiosWrapper.put(url)
}
