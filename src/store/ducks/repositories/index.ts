import { RepositoriesState, RepositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: 'Xbrain' }, { id: 2, name: 'Eduardo' }],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return { ...state, loadig: false, error: false, data: action.payload.data };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
