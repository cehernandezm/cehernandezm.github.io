
import React, { useContext } from 'react'

// UI
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    IconButton
} from '@material-ui/core'

//Theme
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { SWITCH_DARK, SWITCH_LIGHT } from '../../redux/actions/theme.action'
import { Dark } from '../../themes/Dark/Dark'

//Style
import { useStyle } from './style'


const Header = () => {

    const themeContext = useContext(ThemeContext)
    const classess = useStyle(themeContext.state.theme)()

    const onClick = () => {

        if (themeContext.state.theme === Dark) themeContext.dispatch({ type: SWITCH_LIGHT })
        else themeContext.dispatch({ type: SWITCH_DARK })

    }

    return (
        <AppBar position="fixed" className={classess.appBar}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className={classess.appBar}>
                <Grid>
                    <Button className={classess.button} >
                        Carlos Hernandez
                    </Button>
                </Grid>

                <Grid>
                    <Button className={classess.button} >
                        About
                    </Button>
                </Grid>
            </Grid>

        </AppBar>
    )
}



export default Header