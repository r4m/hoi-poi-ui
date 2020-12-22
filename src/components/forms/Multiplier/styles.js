export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10px',
        '&:first-child': {
            marginTop: 0,
        },
    },
    singleItem: {
        marginTop: 0,
        marginLeft: 167,
        alignItems: 'center',
        justifyContent: 'flex-start',
        '&:first-child': {
            marginLeft: '0',
        },
        '& $removeIcon': {
            marginTop: 0,
        },
    },
    separator: {
        borderBottom: `1px solid ${theme.colors.greyLight}`,
        '&:first-child': {
            paddingTop: '0',
        },
        '&:last-child': {
            borderBottom: 'none !important',
        },
        '& + $separator': {
            marginTop: 0,
        },
    },
    isFullWidth: {
        '& $buttonContainer': {
            width: '100%',
        },
    },
    buttonContainer: {
        position: 'relative',
        width: 465,
        marginLeft: 167,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    removeIcon: {
        cursor: 'pointer',
        marginLeft: 8,
        marginTop: 24,
    },
    vertical: {
        '& $buttonContainer': {
            marginLeft: 0,
        },
        '& $item': {
            '&:first-child': {
                '& $removeIcon': { marginTop: 28 },
            },
        },
        '& $singleItem': {
            marginLeft: 0,
            '& > div': {
                padding: 0,
            },
        },
    },
    form: {
        width: '100%',
        '& > [class*="Section"]': {
            padding: 0,
        },
    },
    field: {
        '& [class*="formControl"]': {
            width: 'auto',
        },
    },
    fieldModeHorizontal: {
        borderBottom: 'none',
        marginTop: 0,
        justifyContent: 'flex-start',
        '& $removeIcon': {
            flexShrink: 0,
            marginTop: 16,
        },
        '&:first-child $removeIcon': {
            flexShrink: 0,
            marginTop: 44,
        },
        '&:not(:first-child) [class*="Label"]': {
            display: 'none',
        },
    },
});
