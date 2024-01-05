import { globalCss } from "."

export const globalStyles = globalCss({
    '*':{
        margin: 0, 
        padding: 0,
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        fontSmooth:'always',
        background:'$gray900 !important',
        color:'$gray100',
        paddingBottom: '2rem'
    },
    button: {
        border: 'none',
        background: 'transparent'
    },
    ul: {
        listStyle: 'none',
        padding: '0 !important'
    },
    'body , input, textarea, button': {
        fontFamily: 'Roboto !important',
        fontWeight: '400 !important',
    }
})