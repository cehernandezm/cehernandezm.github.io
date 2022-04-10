import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//UI
import {
    Box,
    Container,
    Grid,
    Typography,
    Avatar,
    Divider
} from '@material-ui/core'
import { useStyle } from './style'

//IMG
import avatarImage from '../../assets/images/avatar.jpg'


const Home = () => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    return (
        <Box className={classes.body}>
            <Container className={classes.container} >
                <Grid container>
                    <Grid item xs={12} sm container>
                        <Grid 
                            item 
                            xd
                            className={classes.headerInfo}
                            >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className={classes.h5}
                            >
                                Carlos Eduardo Hernandez Molina
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                I'm a full stack developer based in Guatemala
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                alt='Avatar'
                                src={avatarImage}
                                className={classes.avatar}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Divider/>
            </Container>
        </Box>
    )
}




export default Home