import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    background : {
        backgroundColor: theme["background-color"]
    }
}))