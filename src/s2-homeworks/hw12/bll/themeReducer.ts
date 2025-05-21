interface ThemeState {
    themeId: number;
}

const initState: ThemeState = {
    themeId: 1,
}

interface ChangeThemeIdAction {
    type: 'SET_THEME_ID';
    id: number;
}

type ThemeAction = ChangeThemeIdAction;

export const themeReducer = (state = initState, action: ThemeAction): ThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id,
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any
