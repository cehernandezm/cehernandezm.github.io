
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()

    const [page, setPage] = useState(null)

    useEffect(() => {
        setPage(window.location.pathname);
    }, [])

    const handleChangeSwitch = (event) => {
        if (themeContext.state.theme === Dark) themeContext.dispatch({ type: SWITCH_LIGHT })
        else themeContext.dispatch({ type: SWITCH_DARK })
    }

    const handleRedirectHome = () => {
        setPage("/");
        navigate("/")
    }

    const handleRedirectAbout = () => {
        setPage("/about");
        navigate("/about")
    }

    const handleRedirectContact = () => {
        setPage("/contact");
        navigate("/contact")
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                className={classes.appBar}>
                <Grid item xs={12} md={2}>
                    <Button
                        disableRipple
                        className={` ${classes.button} ${page === '/' ? classes.activeButton : classes.button}`}
                        onClick={handleRedirectHome}
                    >
                        Carlos Hernandez
                    </Button>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Button
                        disableRipple
                        className={page === '/about' ? classes.activeButton : classes.button}
                        onClick={handleRedirectAbout}
                    >
                        About
                    </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button
                        disableRipple
                        className={page === '/contact' ? classes.activeButton : classes.button}
                        onClick={handleRedirectContact}
                    >
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