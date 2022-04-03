import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    body : {
        backgroundColor: theme["background-color"],
        height: '90vh'
    }
}))