import { call, put } from 'redux-saga/effects'

import { storeSuccess } from './actions'
import { setName } from '../../../storage/UserSettings'

export function* storeUser(payload: any) {
  const { user } = payload.payload
  yield call(setName, user.name)
  yield put(storeSuccess(user))
}
