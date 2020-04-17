import User from '../../../types/User';

/**
 * Types
 */

export interface AuthState {
  data: User;
  loading: boolean;
}

export enum AuthTypes {
  STORE_REQUEST = 'auth/STORE_REQUEST',
  STORE_SUCCESS = 'auth/STORE_SUCCESS',
}
