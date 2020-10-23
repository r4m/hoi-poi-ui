export default (theme) => ({
    root: {},
    isFullWidth: {
        '& $inputComponents': {
            width: '100%',
            flex: 1,
        },
        // '& $formControl': {
        //     width: '100%',
        //     '& $inputComponents': {
        //         width: '100%',
        //         flex: 1,
        //     },
        // },
    },
    errored: {},
    select: {},
    isMulti: {},
    optionLabel: {
        display: 'flex',
        alignItems: 'center',
    },
    optionLabelIcon: {
        marginRight: 10,
    },
    optionLabelCustomIcon: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    optionLabelAvatar: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: '50%',
        position: 'relative',
    },
    optionLabelCheckbox: {
        marginRight: 10,
    },
    optionLabelBullet: {
        width: 8,
        height: 8,
        marginRight: 8,
        borderRadius: '50%',
    },
    optionLabelBulletDisabled: {
        backgroundColor: theme.colors.neutral500,
    },
    optionLabelBulletPrimary: {
        backgroundColor: theme.colors.orange500,
    },
    optionLabelBulletDanger: {
        backgroundColor: theme.colors.red500,
    },
    optionLabelBulletSuccess: {
        backgroundColor: theme.colors.green500,
    },
    optionLabelText: {},
    optionLabelSubtitle: {
        ...theme.typography.caption,
        color: theme.colors.neutral700,
    },
    disabledText: {
        color: theme.colors.neutral500,
    },
    disabledIcon: {
        '& path': {
            fill: theme.colors.neutral500,
        },
    },
    disabledAvatar: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: theme.colors.neutral500,
        opacity: '0.8',
    },
    group: {
        ...theme.typography.subtitle,
        color: theme.colors.neutral700,
        textTransform: 'initial',
    },
    inputComponents: {
        width: 300,
        minWidth: 150,
    },
    control: {
        ...theme.typography.body,
        minHeight: 40,
        outline: 'none',
        padding: 2,
        borderRadius: '4px',
        border: `1px solid ${theme.colors.neutral200}`,
        backgroundColor: theme.colors.neutral200,
        transition: 'all 0.15s ease',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    controlFocused: {
        backgroundColor: theme.colors.neutralBase,
        border: `1px solid ${theme.colors.orange500}`,
        boxShadow: 'none',
    },
    placeholder: {
        color: theme.colors.neutral900,
    },
    placeholderDisabled: {
        color: theme.colors.neutral700,
    },
    valueContainer: {
        color: theme.colors.neutral900,
    },
    valueContainerDisabled: {
        color: theme.colors.neutral700,
    },
    options: {
        ...theme.typography.body,
        color: theme.colors.neutral900,
        backgroundColor: theme.colors.neutralBase,
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.neutral200,
            cursor: 'pointer',
        },
    },
    optionDisabled: {
        '&:hover': {
            backgroundColor: 'none',
            cursor: 'default',
        },
    },
    multiValue: {
        margin: 4,
        padding: '3px 6px 3px 8px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: theme.colors.blue100,
        color: theme.colors.blue500,
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.blue200,
        },
    },
    multiValueLabel: {
        ...theme.typography.caption,
        color: theme.colors.blue500,
        padding: 0,
        paddingLeft: 0,
        paddingRight: 8,
    },
    multiValueLabelDisabled: {
        color: theme.colors.blue200,
    },
    multiValueRemove: {
        padding: 0,
        transition: 'all 0.15s ease',
        '& svg path': {
            fill: theme.colors.blue500,
        },
        '&:hover': {
            backgroundColor: 'initial',
            '& svg path': {
                fill: theme.colors.blue600,
            },
        },
    },
    multiValueRemoveDisabled: {
        '& svg path': {
            fill: theme.colors.blue200,
        },
    },
    noOptionsMessage: {
        ...theme.typography.body,
    },
    indicatorsContainer: {
        alignSelf: 'flex-start',
    },
    clearIndicator: {
        transition: 'all 0.15s ease',
        padding: '0px 8px',
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
    indicatorSeparator: {
        height: 8,
        width: 2,
        alignSelf: 'center',
        backgroundColor: theme.colors.neutral400,
    },
    dropdownIndicator: {
        padding: 4,
        transition: 'all 0.15s ease',
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
});
