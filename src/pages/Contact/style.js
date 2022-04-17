import { makeStyles } from "@material-ui/core";

export const useStyle = tema => makeStyles((theme) => ({
    textField: {
        width: '95%',
        marginTop: 15,
        '& .MuiOutlinedInput-root': {
            color: tema.divider.color,
            '& fieldset': {
                borderColor: tema.divider.color,
            },
            '&:hover fieldset': {
                borderColor: tema.divider.color,
            },
            '& input': {
                color: tema.divider.color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        }
    },
    label: {
        color: tema.divider.color,
        "&.Mui-focused": {
            color: tema.divider.color
        }
    },
    multiLine: {
        width: '100%',
        marginTop: 15,
        '& .MuiOutlinedInput-root': {
            color: tema.divider.color,
            '& fieldset': {
                borderColor: tema.divider.color,
            },
            '&:hover fieldset': {
                borderColor: tema.divider.color,
            },
            '& input': {
                color: tema.divider.color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        }
    },
    button: {
        marginTop: 25,
    }
}))

