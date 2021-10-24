import * as types from '../../constants/action-types';
import { ReducerType } from '../../types/reducer-payload.type';

const initialState = {
  test: 0,
}

export const globals = (state = initialState, { type, payload }: ReducerType) => {
  switch (type) {


    case types.TEST:
      return {
        ...state,
        test: payload
      };

    

    default: return state
  }
}
