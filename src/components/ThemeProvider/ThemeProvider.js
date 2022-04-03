import { useReducer } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import { themeReducer, initialState } from "../../redux/reducers/theme.reducer"

const ThemeProvider = (
    props
) => {

    const [state, dispatch] = useReducer(themeReducer,initialState)

    return (
        <ThemeContext.Provider value={{state: state, dispatch: dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider