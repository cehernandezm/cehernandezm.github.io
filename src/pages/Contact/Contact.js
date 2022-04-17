import React, { useContext, useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

//Theme
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
// UI
import {
    TextField,
    Grid,
    Button
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { useStyle } from './style'

//Components
import Banner from '../../components/Banner/Banner'
import Paragraph from '../../components/Paragraph/Paragraph'

//Constants 
import {
    TEXT_VALIDATOR,
    TEXT_ERRORS,
    EMAIL_ERRORS,
    EMAIL_VALIDATOR
} from '../../utils/constants';


const Contact = () => {

    const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY

    const themeContext = useContext(ThemeContext)
    const classes = useStyle(themeContext.state.theme)()

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        document.title = "Carlos Hernandez"
    }, [])

    const handleChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, dataForm, PUBLIC_KEY)
            .then((result) => {
                setDataForm({
                    name: '',
                    email: '',
                    message: ''
                })
                Swal.fire(
                    'Good job!',
                    'Mail sent successfully!',
                    'success'
                )
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div>
            <Banner text={"<Contact me>"} />
            <Paragraph
                title={'<Send me a message>'}
                titleVariant={"h4"}
                bodyVariant={"body1"}
                body={``}
            />
            <ValidatorForm
                onSubmit={handleSubmit}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <TextValidator
                            variant='outlined'
                            label='Name'
                            onChange={handleChange}
                            name='name'
                            value={dataForm.name}
                            validators={TEXT_VALIDATOR}
                            errorMessages={TEXT_ERRORS}
                            className={classes.textField}
                            autoComplete='off'
                            InputLabelProps={{
                                className: classes.label
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <TextValidator
                            variant='outlined'
                            label='Email'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={dataForm.email}
                            className={classes.multiLine}
                            validators={EMAIL_VALIDATOR}
                            errorMessages={EMAIL_ERRORS}
                            autoComplete='off'
                            InputLabelProps={{
                                className: classes.label
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextValidator
                            variant='outlined'
                            label='Message'
                            multiline
                            maxRows={4}
                            minRows={4}
                            name='message'
                            onChange={handleChange}
                            validators={TEXT_VALIDATOR}
                            errorMessages={TEXT_ERRORS}
                            value={dataForm.message}
                            className={classes.multiLine}
                            autoComplete='off'
                            InputLabelProps={{
                                className: classes.label
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            fullWidth
                            type='submit'
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Grid>


                </Grid>

            </ValidatorForm>



        </div>
    )
}

export default Contact