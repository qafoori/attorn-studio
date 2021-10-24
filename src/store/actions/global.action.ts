import * as types from '../../constants/action-types';

export const test = (payload: number) => {
  return {
    type: types.TEST,
    payload
  }
}
