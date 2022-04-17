import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeContext'
//UI
import {
    Typography,
} from '@material-ui/core'

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@material-ui/lab'
import { useStyle } from '../style'


//Components
import Event from './Event'

const Bio = () => {

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    return (
        <div>
            <Typography
                className={classes.bio}
                variant="h4"
            >
                {"<Bio>"}
            </Typography>
            <Timeline align='alternate'>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Event
                            title="1998"
                            body="Born in Guatemala, Guatemala"
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Event
                            title="2022"
                            body={`Completed science and systems engineering at the
                            Universidad de San Carlos de Guatemala`}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Event
                            title="2021 - 2021"
                            body={`Worked at Registro y Estadistica USAC as intern`}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Event
                            title="2019 to present"
                            body={`Works as a freelance`}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Event
                            title="2021 to present"
                            body={`Works at Walmart Mexico y Centroamerica as full stack developer`}
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </div>
    )

}


export default Bio