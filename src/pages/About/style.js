import { makeStyles } from "@material-ui/core";

export const useStyle = tema => makeStyles((theme) => ({
    divider: {
        marginTop: 25,
        backgroundColor: tema.divider.color
    },
    bio: {
        marginTop: 25
    },
    img : {
        width: 200,
        height: 200
    },
    imgRectangle : {
        width: 250,
        height: 200
    }
}))