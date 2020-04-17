import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  data: {
    name: '',
  },
  loading: false,
}

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.STORE_REQUEST:
      return { ...state, loading: true }
    case AuthTypes.STORE_SUCCESS:
      return { ...state, data: action.payload.user }
    default:
      return state
  }
}

export default auth
