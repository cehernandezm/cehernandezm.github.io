import { makeStyles } from "@material-ui/core";

export const useStyle = tema => makeStyles((theme) => ({
    body: {
        backgroundColor: tema.body["background-color"],
        position: "relative",
        minHeight: '90vh',
        paddingBottom: 1,
        color: tema.body["text-color"],
        width: '100%'
    },
    container: {
        [theme.breakpoints.down('md')] : {
            width: '90vw',
        },
        [theme.breakpoints.up('md')] : {
            width: '45vw',
        },
        paddingTop: 50,
    }
}))

