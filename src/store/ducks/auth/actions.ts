import { action } from 'typesafe-actions'
import { AuthTypes } from './types'
import User from '../../../types/User'

export const storeRequest = (user: User) =>
  action(AuthTypes.STORE_REQUEST, { user })

export const storeSuccess = (user: User) =>
  action(AuthTypes.STORE_SUCCESS, { user })
