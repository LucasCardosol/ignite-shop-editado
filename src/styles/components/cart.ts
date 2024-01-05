
import { styled } from "@stitches/react";
import { css } from "@stitches/react";

export const OffcanvasClass = css({
    background: '$gray800 !important',
    width: '30rem !important',
})

export const OffcanvasStyle = styled('div',{
    background: '$gray800',
    height: '100%',
})

export const OffcanvasBodyStyle = styled('div',{
    padding: '0 32px',
    color:'$gray300',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100% - 80px)',
    ul:{
        maxHeight:'40vh',
        overflowY: 'auto'
    },
    table :{
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: '0 10px'
    },
    td:{
        textAlign: 'right',
        lineHeight: '200%'
    },
    footer: {
        button:{
            background: '$green500',
            textAlign: 'center',
            width: '100%',
            padding: 20,
            fontWeight: 'bold',
            color: '$white',
            borderRadius: 8,
            marginTop:55,
            marginBottom:48,
            '&:hover':{
                transition: '0.3s',
                background: '$green300',
            }
        }
    }
})

export const Button = styled('button',{
    height: 48,
    width: 48,
    background: '$gray800',
    borderRadius: 6,
    opacity: '0.8',
    position: 'relative',
    '&:hover':{
        opacity: '1',
        transition: '0.3s'
    },
    span:{
        color: '$white',
        background: '$green500',
        height: '1.5rem',
        width: '1.5rem',
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight:'160%',
        borderRadius: '1.5rem',
        fontSize: '0.875rem',
        border: '2px solid $gray900',
        marginTop: '-0.5rem',
        marginRight: '-0.5rem',
        fontWeight: 'bold'
    }
})

export const ImageContainer = styled('div',{
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height:93,
    width:102,
    borderRadius: 8
})

export const CartItem = styled('li',{
    display: 'flex',
    gap: 20,
    marginBottom: '1.5rem'
})

export const ItemDetails = styled ('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    span: {
        fontWeight: 'bold'
    },
    button: {
        color: '$green500',
        fontWeight: 'bold !important',
        '&:hover':{
            transition: '0.3s',
            color: '$green300',
        }
    }
})

