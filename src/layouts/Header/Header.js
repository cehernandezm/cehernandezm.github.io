import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { SWITCH_DARK, SWITCH_LIGHT } from '../../redux/actions/theme.action'
import { Dark } from '../../themes/Dark/Dark'
import { useStyle } from './style'


const Header = () => {

    const themeContext = useContext(ThemeContext)
    const classess = useStyle(themeContext.state.theme)()

    const onClick = () => {

        if(themeContext.state.theme === Dark) themeContext.dispatch({type: SWITCH_LIGHT})
        else themeContext.dispatch({type: SWITCH_DARK})

    }

    return (
        <div>
            {console.log(classess)}
            {console.log(classess.background)}
            Header {themeContext.state.theme.title}
            <button  onClick={onClick} className={classess.background}>
                Cambiar
            </button>
        </div>
    )
}



export default Header