import { css } from "@stitches/react";

export const ToastStyle = css({
    background: '$green500 !important',
    position: 'fixed',
    bottom: '2rem',
    left: '2rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    zIndex: '1041 !important',
    p:{
        margin: '0',
        color: '$gray300',
        fontWeight: 'bold'
    }
})