import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    body : {
        backgroundColor: theme.body["background-color"],
        marginTop: 60,
        minHeight: '90vh',
        paddingBottom: 1,
        color: theme.body["text-color"]
    },
    container: {
        width: '75vh',
        paddingTop: 50,
    },
    h5: {
        fontWeight: 'bold'
    },
    avatar: {
        width: 80,
        height: 80,
        marginLeft: 30
    },
    headerInfo: {
        marginTop: 10
    },
    divider : {
        marginTop: 25,
        backgroundColor: theme.divider.color
    }
}))