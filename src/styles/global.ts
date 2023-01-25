import { globalCss } from ".";

export const globalStyles = globalCss({
    "*, *::before, *::after": {
       margin: 0,
       padding: 0,
       
       boxSizing: "border-box"
    },

    "body": {
        "-webkit-font-smoothing": "antialiased",
        
        backgroundColor: '$gray900',
        color: '$gray100'
    },

    "body *": {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400
    }
})