import * as axiosWrapper from '../../../utilities/axios-utils'

export const fetch = {
  formatUrl: () => `/games/tic-tac-toe`,
  request: (url) => axiosWrapper.get(url),
}

