import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// UI
import {
    Container,
    Grid
} from '@material-ui/core'
//Theme
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//Style
import { useStyle } from './style'

//Constants 
import {
    GITHUB_URL,
    LINKEDIN_URL,
    TWITTER_URL
} from '../../utils/constants'

const Footer = () => {
    library.add(fab);
    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    return (
        <Container
            maxWidth='xl'
            className={classes.container}
        >
            <Grid container >
                <Grid
                    item
                    xs={12}
                    className={classes.grid}
                >
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}>
                        <FontAwesomeIcon
                            icon={['fab', 'github-square']}
                            className={classes.icon}
                        />
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}>
                        <FontAwesomeIcon
                            icon={['fab', 'linkedin']}
                            className={classes.icon}
                        />
                    </a>
                    <a
                        href={TWITTER_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}>
                        <FontAwesomeIcon
                            icon={['fab', 'twitter-square']}
                            className={classes.icon} />
                    </a>
                </Grid>
                <Grid
                    item
                    xs={12}
                    className={classes.grid}
                >
                    <p>&copy; 2022 Carlos Hernandez</p>
                </Grid>
            </Grid>

        </Container >
    )
}


export default Footer