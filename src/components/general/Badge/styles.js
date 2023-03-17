export default (theme) => ({
    root: {
        height: '20px',
        minWidth: '70px',
        padding: '2px 8px',
        borderRadius: '4px',
        display: 'inline-block',
        textAlign: 'center',
    },
    Text: {
        display: 'inline-block',
    },
    // Types
    default: {
        backgroundColor: theme.colors.neutral300,
        '& $Text': {
            color: theme.colors.neutral700,
        },
    },
    success: {
        backgroundColor: theme.colors.green100,
        '& $Text': {
            color: theme.colors.green600,
        },
    },
    warning: {
        backgroundColor: theme.colors.yellow100,
        '& $Text': {
            color: theme.colors.yellow600,
        },
    },
    error: {
        backgroundColor: theme.colors.red100,
        '& $Text': {
            color: theme.colors.red500,
        },
    },
    info: {
        backgroundColor: theme.colors.blue100,
        '& $Text': {
            color: theme.colors.blue400,
        },
    },

    ongoing: {
        backgroundColor: theme.colors.purple100,
        '& $Text': {
            color: theme.colors.purple500,
        },
    },
    promo: {
        backgroundColor: theme.colors.neutral150,
        '& $Text': {
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            backgroundImage: `linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
        },
    },
    inverted: {
        '& $Text': {
            color: theme.colors.neutralBase,
        },
        '&$default': {
            backgroundColor: theme.colors.neutral600,
        },
        '&$success': {
            backgroundColor: theme.colors.green400,
        },
        '&$warning': {
            backgroundColor: theme.colors.yellow400,
        },
        '&$error': {
            backgroundColor: theme.colors.red400,
        },
        '&$info': {
            backgroundColor: theme.colors.blue400,
        },
        '&$ongoing': {
            backgroundColor: theme.colors.purple400,
        },
        '&$promo': {
            backgroundImage: `linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
            '& $Text': {
                color: theme.colors.neutralBase,
            },
        },
    },
});
