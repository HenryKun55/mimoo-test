import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  data: {
    name: '',
    points: 100,
  },
  loading: false,
}

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.STORE_REQUEST:
      return { ...state, loading: true }
    case AuthTypes.STORE_SUCCESS:
      return { ...state, data: action.payload.user }
    case AuthTypes.SET_POINTS:
      return { ...state, data: { ...state.data, points: state.data.points + action.payload.points }}
    default:
      return state
  }
}

export default auth
