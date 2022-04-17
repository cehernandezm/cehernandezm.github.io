import { makeStyles } from "@material-ui/core";

export const useStyle = tema => makeStyles((theme) => ({
    h5: {
        fontWeight: 'bold'
    },
    avatar: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 0
    },
    headerInfo: {
        marginTop: 10
    },
    divider: {
        marginTop: 25,
        backgroundColor: tema.divider.color
    },
}))

