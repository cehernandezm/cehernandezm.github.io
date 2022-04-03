import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//UI
import { Box } from '@material-ui/core'
import { useStyle } from './style'


const Home = () => {

    const themeContext = useContext(ThemeContext)
    const classess = useStyle(themeContext.state.theme)()

    return (
        <Box
            className={classess.body}
        >
            Home
        </Box>
    )
}




export default Home