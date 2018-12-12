import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'
export const name = 'gamesActions'

export function fetch() {
  return {
    type: TYPES.FETCH_REQUEST
  }
}

export function* executeFetch() {
  const url = api.fetch.formatUrl()
  try {
    const res = yield call(api.fetch.request, url)
    yield put(fetchSuccess(res.data))
  } catch (err) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', err)
  }
}

export function fetchSuccess(data) {
  return {
    type: TYPES.FETCH_SUCCESS,
    queued: data.queued
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_REQUEST, executeFetch)
]

export default sagas
