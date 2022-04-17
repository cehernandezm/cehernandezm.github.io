import React, { useContext } from 'react'
import {
    Typography,
    Chip
} from '@material-ui/core'
import { useStyle } from './style'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'


const Paragraph = (props) => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    const {
        title,
        titleVariant,
        body,
        bodyVariant,
        labels
    } = props


    return (
        <div className={classes.container}>
            <Typography variant={titleVariant}>
                {title}
            </Typography>
            <Typography
                variant={bodyVariant}
                component="p"
                className={classes.bodyParagraph}>
                {body}
            </Typography>
            {labels && (
                labels.map((label,index) => {
                    return (
                        <Chip
                            key={index}
                            variant="outlined"
                            label={label}
                            className={classes.label}
                        />
                    )
                })
            )}
        </div>
    )
}


export default Paragraph