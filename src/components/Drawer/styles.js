export default (theme) => ({
    root: {
        position: 'relative',
        display: 'block',
        background: '#fff',
        height: '100%',
        boxShadow: theme.effects.boxShadow,
        transition: 'transform 0.5s',
        willChange: 'transform',
        '&:active': {
            outlineStyle: 'none',
        },
    },
    content: {
        isolate: true,
        position: 'relative',
        height: '100%',
    },
    overlay: {
        isolate: true,
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        top: 0,
        right: 0,
        bottom: 0,
        background: theme.colors.overlay,
        '&.ReactModal__Overlay--before-close': {
            background: 'transparent',
        },
    },
    right: {
        marginLeft: 'auto',
        transform: 'translateX(100%)',
        '&.ReactModal__Content--after-open': {
            transform: 'translateX(0%)',
        },
        '&.ReactModal__Content--before-close': {
            transform: 'translateX(100%)',
        },
    },
    left: {
        marginRight: 'auto',
        transform: 'translateX(-100%)',
        '&.ReactModal__Content--after-open': {
            transform: 'translateX(0%)',
        },
        '&.ReactModal__Content--before-close': {
            transform: 'translateX(-100%)',
        },
    },
});
