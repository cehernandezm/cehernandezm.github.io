import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    appBar : {
        backgroundColor: theme.appBar["background-color"],
        boxShadow: 'none',
        height: '8vh'
    },
    button : {
        color: theme.appBar["text-button"],
        paddingTop: 20,
        paddingBottom: 5,
        marginRight: 25,
        "&:hover" : {
            backgroundColor: 'transparent',
            borderBottom : `3px solid ${theme.appBar["text-button"]}`
        }
    }
}))