export default (theme) => ({
    root: {
        gap: '14px',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '1em',
        right: '1em',
        zIndex: 9999,
    },
    preComponent: {},
    postComponent: {},
    topLeft: {
        top: '1em',
        left: '1em',
        bottom: 'initial',
        right: 'initial',
    },
    topCenter: {
        top: '1em',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 'initial',
        right: 'initial',
    },
    topRight: {
        top: '1em',
        right: '1em',
        bottom: 'initial',
        left: 'initial',
    },
    bottomLeft: {
        bottom: '1em',
        left: '1em',
        top: 'initial',
        right: 'initial',
        flexDirection: 'column-reverse',
    },
    bottomCenter: {
        bottom: '1em',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 'initial',
        right: 'initial',
        flexDirection: 'column-reverse',
    },
    bottomRight: {
        bottom: '1em',
        right: '1em',
        top: 'initial',
        left: 'initial',
        flexDirection: 'column-reverse',
    },
});
