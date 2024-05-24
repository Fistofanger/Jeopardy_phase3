import type {Theme, ThemeState, ActionTheme} from './type/type'

export type ThemesReducer = {
  themes: Theme[];
}

const initialState: ThemeState = {
  themes: [],
};

const themesReducer = (state: ThemeState = initialState, action: ActionTheme): ThemesReducer => {
  switch (action.type) {
    case 'card/update':
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return state;
  }
};

export default themesReducer;