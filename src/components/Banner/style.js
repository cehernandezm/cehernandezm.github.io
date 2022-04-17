import { makeStyles } from "@material-ui/core";

export const useStyle = theme => makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    gradient: {
        color: 'transparent',
        background: `conic-gradient(
            #D9D7F1 12%, 
            #BAABDA 12%, #BAABDA 33%, 
            #E7FBBE 33%, #E7FBBE 55%, 
            #FFCBCB 55%, #FFCBCB 70%, 
            #B5DEFF 70%, #B5DEFF 87%, 
            #F7D1BA 87%)`,
        backgroundSize: '50%',
        backgroundClip: 'text',
        '-webkit-background-clip': 'text',
        cursor: 'pointer',
        animation: '$expand-rev 0.5s ease forwards',
        '&:hover': {
            animation: '$expand 0.5s ease forwards'
        },
        fontSize: '9vmin',
        lineHeight: '15vmin'
    },
    '@keyframes expand-rev': {
        '0%': {
            backgroundSize: '325%',
            backgroundPosition: '-10em -4em'
        },
        '20%': {
            backgroundSize: '55%',
            backgroundPosition: '0 1em'
        },
        '100%': {
            backgroundSize: '50%',
            backgroundPosition: '0 0'
        }
    },
    '@keyframes expand': {
        '0%': {
            backgroundSize: '50%',
            backgroundPosition: '0 0'
        },
        '20%': {
            backgroundSize: '55%',
            backgroundPosition: '0 1em'
        },
        '100%': {
            backgroundSize: '325%',
            backgroundPosition: '-10em -4em'
        }
    }
}))

