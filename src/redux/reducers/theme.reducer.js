import { SWITCH_DARK, SWITCH_LIGHT } from "../actions/theme.action"
import { Dark } from "../../themes/Dark/Dark"
import { Light } from "../../themes/Light/Light"

export const initialState = {
    theme: Dark
}


export const themeReducer = (state = initialState, action) => {

    switch(action.type){
        case SWITCH_DARK: 
            return { ...state, theme: Dark }

        case SWITCH_LIGHT:
            return { ...state, theme: Light }

        default: 
            return state
    }
}

