import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeContext'
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
                    xs={4}
                >
                    <img className={classes.img} src={MindSetLatino} />
                </Grid>
                <Grid
                    item
                    xs={4}
                >
                    <img className={classes.img} src={Dacema} />
                </Grid>
                <Grid
                    item
                    xs={4}
                >
                    <img className={classes.imgRectangle} src={Walmart} />
                </Grid>

            </Grid>
        </div>
    )

}

export default Work