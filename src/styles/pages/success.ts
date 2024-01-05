import { styled } from ".."

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin: '0 auto',
    height: 656,
    h1:{    
        fontSize: "$2xl",
        color: '$gray100'
    },
    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4
    },
    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
            color: '$green500'
        }
    },
    ul: {
        display: 'flex',
        justifyContent: 'center',
        
    }
})

export const ImageContainer = styled('li', {
    width:145,

    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    padding: '0.25rem',
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

    img: {
        objectFit: 'cover',
        
    }
})