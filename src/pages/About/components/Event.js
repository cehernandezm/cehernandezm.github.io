import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({

    container: {
        alignContent: 'justify'
    }
}))


const Event = (props) => {

    const {
        title,
        body
    } = props

    const classes = useStyle()

    return (
        <div className={classes.container}>
            <b>{title}</b> {body}
        </div>
    )


}

export default Event