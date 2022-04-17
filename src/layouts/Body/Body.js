import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//UI
import {
    Box,
    Container,
} from '@material-ui/core'
import { useStyle } from './style'
const Body = (
    props
) => {
    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()


    return (
        <Box className={classes.body}>
            <Container className={classes.container} >
                {props.children}
            </Container>
        </Box>
    )
}


export default Body;