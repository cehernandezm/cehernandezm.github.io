import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'

//UI
import {
    Grid,
    Typography,
    Avatar,
    Divider
} from '@material-ui/core'
import { useStyle } from './style'

//IMG
import avatarImage from '../../assets/images/avatar.jpg'

//Components
import Paragraph from '../../components/Paragraph/Paragraph'
import Banner from '../../components/Banner/Banner'


const Home = () => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    const softSkills = ["Communication", "Problem-Solving", "Patience", "Adaptability", "Self-Learning",
        "Collaboration", "Teamwork", "Accountability"]

    const frontEnd = ["javascript", "css", "html", "ReactJs", "Redux", "Angular", "Laravel"]

    const backend = ["Git", "Terminal", "Github", "Gitlab", "PHP", "C", "C#", "Python", "Nodejs", ".NET", "Javascript",
        "Typescript", "SQL Server", "Mysql", "Docker", "Kubernetes", "Jenkins", "Java"]

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
                        <Banner text={"<Hello World>"} />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        className={classes.headerInfo}
                    >
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            className={classes.h5}
                        >
                            Carlos Eduardo Hernandez Molina
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            I'm a full stack developer based in Guatemala
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Avatar
                            alt='Avatar'
                            src={avatarImage}
                            className={classes.avatar}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Paragraph
                title={'<Resume>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={`I'm a full stack developer based in Guatemala. 
                           I'm a person who is always discovering and learning new technologies.
                           In my free time, I enjoy playing video games with my friends and read comics.`}
            />
            <Divider className={classes.divider} />
            <Paragraph
                title={'<Soft Skills>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={`I belive every person needs soft skills in their toolbox. Check out
                    my soft skills`}
                labels={softSkills}
            />
            <Divider className={classes.divider} />
            <Paragraph
                title={'<FrontEnd>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={`I like to bring ideas to life in the browser. Checkout some languages & tools I've learned and used`}
                labels={frontEnd}
            />
            <Divider className={classes.divider} />
            <Paragraph
                title={'<BackEnd>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={`I've worked mostly as a backend developer. Checkout some languages & tools I've learned and used`}
                labels={backend}
            />
        </>
    )
}




export default Home