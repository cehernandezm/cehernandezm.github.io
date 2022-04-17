import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeContext'
import { Dark } from '../../../themes/Dark/Dark'

//UI
import {
    Grid,
} from '@material-ui/core'
import { useStyle } from '../style'

//Components
import Paragraph from '../../../components/Paragraph/Paragraph'

//Assets 
import MindSetLatino from '../../../assets/images/mindsetlatino.png'
import Dacema from '../../../assets/images/dacema.png'
import Walmart from '../../../assets/images/walmart.png'
import Dacema_Dark from '../../../assets/images/dacema_dark.png'
import MindSetLatino_Light from '../../../assets/images/mindsetlatino_light.png'
import Walmart_Light from '../../../assets/images/walmart_light.png'


const Work = () => {
    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    return (
        <div>
            <Paragraph
                title={'<Work>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={`I have collaborated with some companies and projects`}
            />
            <Grid
                alignItems="center"
                justifyContent="center"
                container
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <img className={classes.img} src={themeContext.state.theme === Dark ? MindSetLatino : MindSetLatino_Light} alt="MindSetLatino" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <img className={classes.img} src={themeContext.state.theme === Dark ? Dacema_Dark : Dacema} alt="Dacema"/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <img className={classes.imgRectangle} src={themeContext.state.theme === Dark ? Walmart : Walmart_Light} alt="Walmart"/>
                </Grid>

            </Grid>
        </div>
    )

}

export default Work