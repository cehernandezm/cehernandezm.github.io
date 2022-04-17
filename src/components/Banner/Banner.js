import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { useStyle } from './style'

const Banner = (props) => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    const { text } = props

    return (
        <div className={classes.container}>
            <h1 className={classes.gradient}>{text}</h1>
        </div>
    )
}

export default Banner