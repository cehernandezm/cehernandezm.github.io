
import React, { useContext } from 'react'

// UI
import {
    AppBar,
    Button,
    Grid,
    Switch
} from '@material-ui/core'

//Theme
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { SWITCH_DARK, SWITCH_LIGHT } from '../../redux/actions/theme.action'
import { Dark } from '../../themes/Dark/Dark'

//Style
import { useStyle } from './style'


const Header = () => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()


    const handleChangeSwitch = (event) => {
        if (themeContext.state.theme === Dark) themeContext.dispatch({ type: SWITCH_LIGHT })
        else themeContext.dispatch({ type: SWITCH_DARK })
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className={classes.appBar}>
                <Grid item xs={12} md={2}>
                    <Button className={` ${classes.button} ${classes.buttonName}`} >
                        Carlos Hernandez
                    </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button className={classes.button} >
                        About
                    </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button className={classes.button} >
                        Contact me
                    </Button>
                </Grid>
                <Grid item>
                    <Switch
                        className={classes.switch}
                        onChange={handleChangeSwitch}
                        defaultChecked />
                </Grid>
            </Grid>

        </AppBar>
    )
}



export default Header