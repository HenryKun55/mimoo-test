import User from '../../../types/User'

export interface AuthState {
  data: User;
  loading: boolean;
}

export enum AuthTypes {
  STORE_REQUEST = 'auth/STORE_REQUEST',
  STORE_SUCCESS = 'auth/STORE_SUCCESS',
  SET_POINTS = 'auth/SET_POINTS',
}
