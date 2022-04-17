import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    container: {
        marginTop: 40,
        marginBottom: 40,
    },
    bodyParagraph: {
        marginTop: 10,
        marginBottom:10,
    },
    label: {
        color: theme.body['text-color'],
        borderColor: theme.body['text-color'],
        marginRight: 20,
        marginTop: 10
    }
}))