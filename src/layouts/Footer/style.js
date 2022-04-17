import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    container: {
        color: theme.body["text-color"],
        backgroundColor: theme.body["background-color"],
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginRight: 40,
        marginLeft: 40,
        width: 18,
        height: 18
    },
    link: {
        color: theme.body["text-color"],
    }
}))