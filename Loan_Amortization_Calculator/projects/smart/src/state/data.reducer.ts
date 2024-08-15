import { ContentState } from "../../../ui/src/lib/tabularViewInterface";
import { ActionType, DataAction } from "./data.action";


export const initialState: ContentState = {
  content: undefined,
  loading: false,
  error: undefined,
  loaded: false,
};

export function reducer(state = initialState, action: DataAction): ContentState {
  switch (action.type) {
    case ActionType.loadFail:
      state = {
        ...state,
        error:  action.error,
      };
      console.log('Fail :', action.type);
      return state;

    case ActionType.loading:
      state = {
        ...state,
        content: state.content,
        loading: true,
        loaded: false,
      };
      return state;

    case ActionType.loaded:
      state = {
        ...state,
        content: action.content,
        loading: false,
        loaded: true,
      };
      return state;

    default:
      return state;
  }
}
