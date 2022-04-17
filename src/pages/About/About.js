import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//UI
import {
    Grid,
    Divider
} from '@material-ui/core'
import { useStyle } from './style'

//IMG

//Components 
import Banner from '../../components/Banner/Banner'
import Bio from './components/Bio'
import Work from './components/Work'

const About = () => {
    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    useEffect(() => {
        document.title = "Carlos Hernandez"
    }, [])

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm container>
                    <Grid
                        item
                        xs={12}
                    >
                        <Banner text={"<About>"} />
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Bio />
            <Divider className={classes.divider} />
            <Work />
        </>
    )
}


export default About