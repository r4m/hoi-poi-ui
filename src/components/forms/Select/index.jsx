import React, { memo, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createFilter, filterKeyValue } from './utils'; // Local utils
import InputWrapper from '../components/InputWrapper';
import { default as RSelect } from 'react-select';
import AsyncSelect from 'react-select/async';

import Control from './components/Control';
import DropdownIndicator from './components/DropdownIndicator';
import ClearIndicator from './components/ClearIndicator';
import LockIndicator from './components/LockIndicator';
import SingleValue from './components/SingleValue';
import MultiValueLabel from './components/MultiValueLabel';
import MultiValueRemove from './components/MultiValueRemove';
import LoadingIndicator from './components/LoadingIndicator';
import Menu from './components/Menu';
import MenuSingle from './components/MenuSingle';
import MenuMulti from './components/MenuMulti';
import Group from './components/Group';
import Option from './components/Option';
import { isEqual } from '../../../utils/arrays';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import defaultTheme from '../../../utils/styles/defaultTheme';

const useStyles = createUseStyles(styles, 'Select');
const newStyles = styles(defaultTheme);

const Select = memo(
    ({
        error,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        isReadOnly,
        isFullWidth,
        isFuzzy,
        isMulti,
        isRequired,
        isClearable,
        isSearchable,
        placeholder,
        options,
        defaultSearch,
        defaultValue,
        value,
        onChange,
        onBlur,
        hideSelectedOptions,
        filterByKey,
        defaultMenuIsOpen,
        loadOptions,
        groupOptions,
        loadingMessage,
        loadingPlaceholder,
        noOptionsMessage,
        actions,
        onClickAction,
        size,
        onlyText,
        dropdownWidth,
        afterControl,
        beforeControl,
        ...props
    }) => {
        const selectRef = useRef();
        const [focused, setFocused] = useState(false);
        const [newValue, setNewValue] = useState(defaultValue || value);
        const [innerOptions, setInnerOptions] = useState(options || []);
        const [lazyOptions, setLazyOptions] = useState({
            areLoaded: false,
            options: null,
            isLoading: false,
        });
        const debounce = useRef(null);
        const menuPlacementRef = useRef('bottom');
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Select.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isFullWidth]: isFullWidth,
                [classes.focused]: focused,
                [classes.async]: loadOptions && isFuzzy,
                [classes[size]]: size,
                [classes.onlyText]: onlyText,
            },
            classNameProp,
        );

        const selectClassName = classnames(classes.select, {
            [classes.isMulti]: isMulti,
        });

        useEffect(() => {
            setNewValue(value);
        }, [value]);

        useEffect(() => {
            if (!isFuzzy && !isEqual(options, innerOptions)) setInnerOptions(options);
        }, [options, innerOptions, isFuzzy]);

        const loadOptionsCb = useCallback(
            (text, cb) => {
                if (debounce.current) clearTimeout(debounce.current);
                if (!loadOptions) return cb();
                debounce.current = setTimeout(() => {
                    const loader = loadOptions(text, cb);
                    if (loader && typeof loader.then === 'function') {
                        loader.then(
                            (results) => {
                                setInnerOptions(results);
                                cb(results);
                            },
                            () => cb(),
                        );
                    }
                }, 500);
            },
            [loadOptions],
        );

        const handleOnChange = useCallback(
            (data, action) => {
                setNewValue(data);
                if (!isMulti) setFocused(false);
                onChange && onChange(data);
            },
            [isMulti, onChange],
        );

        const setMenuPlacement = useCallback(
            (e) => {
                const { y } = e.currentTarget.getBoundingClientRect();
                const bodyHeight = document.body.clientHeight;
                let overrideHeight;
                if (
                    override.menuList?.style?.maxHeight &&
                    !isNaN(override.menuList?.style?.maxHeight)
                ) {
                    overrideHeight = override.menuList?.style?.maxHeight;
                }

                const overrideMenu = override?.menu?.style || null;
                const overrideMenuPaddingTop =
                    (!isNaN(parseInt(overrideMenu?.paddingTop, 10)) &&
                        parseInt(overrideMenu?.paddingTop, 10)) ||
                    null;
                const overrideMenuPaddingBottom =
                    (!isNaN(parseInt(overrideMenu?.paddingBottom, 10)) &&
                        parseInt(overrideMenu?.paddingBottom, 10)) ||
                    null;
                const overrideMenuMarginTop =
                    (!isNaN(parseInt(overrideMenu?.marginTop, 10)) &&
                        parseInt(overrideMenu?.marginTop, 10)) ||
                    null;
                const overrideMenuMarginBottom =
                    (!isNaN(parseInt(overrideMenu?.marginBottom, 10)) &&
                        parseInt(overrideMenu?.marginBottom, 10)) ||
                    null;

                const margins =
                    (newStyles.menu.paddingTop || overrideMenuPaddingTop || 4) +
                    (newStyles.menu.paddingBottom || overrideMenuPaddingBottom || 4) +
                    (newStyles.menu.marginTop || overrideMenuMarginTop || 8) +
                    (newStyles.menu.marginBottom || overrideMenuMarginBottom || 8);
                const baseMenuHeight =
                    (overrideHeight || newStyles.menuList.maxHeight || 300) + margins;
                if (bodyHeight - y > baseMenuHeight) menuPlacementRef.current = 'bottom';
                else menuPlacementRef.current = 'top';
            },
            [override],
        );

        const handleOnFocus = useCallback(
            (e) => {
                setMenuPlacement(e);
                setFocused(true);
                if (loadOptions && !isFuzzy && !lazyOptions.areLoaded) {
                    setLazyOptions({
                        ...lazyOptions,
                        isLoading: true,
                    });
                    loadOptions().then((options) => {
                        setLazyOptions({
                            areLoaded: true,
                            isLoading: false,
                            options,
                        });
                    });
                } else if (defaultSearch && loadOptions && isFuzzy && !lazyOptions.areLoaded) {
                    setLazyOptions({
                        ...lazyOptions,
                        isLoading: true,
                    });
                    const text = defaultSearch || '';
                    loadOptions(text).then((options) => {
                        setInnerOptions(options);
                        setLazyOptions({
                            areLoaded: true,
                            isLoading: false,
                            options,
                        });
                    });
                }
            },
            [isFuzzy, defaultSearch, lazyOptions, loadOptions, setMenuPlacement],
        );

        const handleOnBlur = useCallback(() => {
            setFocused(false);
            onBlur && onBlur();
        }, [onBlur]);

        const controlStyles = useCallback(
            ({ isFocused }) => {
                let styles = {
                    ...newStyles.control,
                    ...(override.control?.style || {}),
                };

                if (isFocused) {
                    styles = {
                        ...styles,
                        ...newStyles.controlFocused,
                        ...(override.controlFocused?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const optionsStyles = useCallback(
            ({ isDisabled, isSelected }) => {
                let styles = {
                    ...newStyles.option,
                    ...(override.option?.style || {}),
                };

                if (isSelected) {
                    styles = {
                        ...styles,
                        ...newStyles.optionSelected,
                    };
                }

                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.optionDisabled,
                        ...(override.optionDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const valueContainerStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.valueContainer,
                    ...(override.valueContainer?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.valueContainerDisabled,
                        ...(override.valueContainerDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const placeholderStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.placeholder,
                    ...(override.placeholder?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...newStyles.placeholderDisabled,
                        ...(override.placeholderDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const multiValueLabelStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.multiValueLabel,
                    ...(override.multiValueLabel?.style || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueLabelDisabled,
                        ...(override.multiValueLabelDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const multiValueRemoveStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.multiValueRemove,
                    ...(override.multiValueRemove?.style || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueRemoveDisabled,
                        ...(override.multiValueRemoveDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const menuListStyles = useMemo(() => {
            let styles = {
                ...newStyles.menuList,
                ...(override.menuList?.style || {}),
            };

            return styles;
        }, [override]);

        const indicatorSeparatorStyles = useMemo(() => {
            if (isRequired && !isMulti) {
                return newStyles.indicatorSeparatorHidden;
            } else if (
                !isReadOnly &&
                newValue &&
                ((isMulti && newValue.length > 0) || (!isMulti && newValue))
            ) {
                return newStyles.indicatorSeparator;
            } else return newStyles.indicatorSeparatorHidden;
        }, [isReadOnly, isMulti, newValue, isRequired]);

        const formatOptionLabel = useCallback(
            (option) => {
                if (isMulti) return MenuMulti({ option, value: newValue, classes, override });
                else return MenuSingle({ option, classes, override });
            },
            [isMulti, classes, override, newValue],
        );

        const formatGroupLabel = useCallback(
            (data) => (
                <div key={data.value} className={classes.groupLabel} {...override.groupLabel}>
                    {data.label}
                </div>
            ),
            [classes, override],
        );

        const onMouseDown = useCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
            selectRef.current.focus();
            setFocused(true);
            return false;
        }, []);

        const newIsClearable = useMemo(() => {
            if (isRequired) return false;
            else return isClearable;
        }, [isRequired, isClearable]);

        const selectProps = useMemo(() => {
            const menuIsOpen = focused && (!(loadOptions && isFuzzy) || innerOptions.length);
            let Indicator = DropdownIndicator;
            if (loadOptions && isFuzzy) Indicator = null;
            if (isReadOnly) Indicator = LockIndicator;

            return {
                ref: selectRef,
                className: selectClassName,
                classNamePrefix: 'hoi-poi-select',
                placeholder,
                options: lazyOptions.options || innerOptions,
                defaultOptions: innerOptions,
                cacheOptions: true,
                noOptionsMessage,
                loadingMessage,
                defaultValue: newValue,
                value: newValue,
                defaultMenuIsOpen,
                actions,
                isMulti,
                isDisabled: isReadOnly,
                isClearable: isMulti ? true : newIsClearable,
                isSearchable,
                isLoading: lazyOptions.isLoading,
                autoFocus: focused,
                blurInputOnSelect: !isMulti,
                hideSelectedOptions: isMulti ? false : hideSelectedOptions,
                closeMenuOnSelect: isMulti ? false : true,
                menuPlacement: menuPlacementRef.current,
                menuPosition: 'fixed',
                menuPortalTarget: document.body,
                loadOptions,
                openMenuOnClick: !(loadOptions && isFuzzy),
                openMenuOnFocus: !(loadOptions && isFuzzy),
                menuIsOpen,
                onChange: handleOnChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                filterOption: filterByKey ? filterKeyValue : createFilter,
                formatOptionLabel,
                formatGroupLabel,
                isFuzzy,
                beforeControl,
                afterControl,
                onMouseDown,
                menuProps: {
                    dropdownWidth,
                    className: classes.menu,
                    actionContainerClassName: classes.actionContainer,
                    actionClassName: classes.action,
                    actionIconClassName: classes.actionIcon,
                    actionTextClassName: classes.actionText,
                    actionTextWithIconClassName: classes.actionTextWithIcon,
                    actions,
                    onClickAction,
                    override: {
                        menu: override.menu,
                        actionContainer: override.actionContainer,
                        action: override.action,
                        actionIcon: override.actionIcon,
                        actionText: override.actionText,
                        actionTextWithIcon: override.actionTextWithIcon,
                    },
                },
                components: {
                    DropdownIndicator: Indicator,
                    Control,
                    ClearIndicator,
                    SingleValue,
                    MultiValueLabel,
                    MultiValueRemove,
                    LoadingIndicator,
                    Menu,
                    Group: Group({
                        className: classes.group,
                        override: {
                            group: override.group,
                        },
                    }),
                    Option: Option({
                        className: classes.option,
                        override: {
                            option: override.option,
                        },
                    }),
                },
                styles: {
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...controlStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    placeholder: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...placeholderStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    valueContainer: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...valueContainerStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    input: (styles) => ({
                        ...styles,
                        ...newStyles.input,
                        ...(override.input?.style || {}),
                    }),
                    group: (styles) => ({
                        ...styles,
                        ...newStyles.group,
                        ...(override.group?.style || {}),
                    }),
                    groupHeading: (styles) => ({
                        ...styles,
                        ...newStyles.groupHeading,
                        ...(override.groupHeading?.style || {}),
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...optionsStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    indicatorsContainer: (styles) => ({
                        ...styles,
                        ...newStyles.indicatorsContainer,
                        ...(override.indicatorsContainer?.style || {}),
                    }),
                    clearIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.clearIndicator,
                        ...(override.clearIndicator?.style || {}),
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        ...indicatorSeparatorStyles,
                        ...(override.indicatorSeparator?.style || {}),
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.dropdownIndicator,
                        ...(override.dropdownIndicator?.style || {}),
                    }),
                    menuList: (styles) => ({
                        ...styles,
                        ...menuListStyles,
                    }),
                    multiValue: (styles) => ({
                        ...styles,
                        ...newStyles.multiValue,
                        ...(override.multiValue?.style || {}),
                    }),
                    multiValueLabel: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueLabelStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    multiValueRemove: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueRemoveStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    noOptionsMessage: (styles) => ({
                        ...styles,
                        ...newStyles.noOptionsMessage,
                        ...(override.noOptionsMessage?.style || {}),
                    }),
                    loadingMessage: (styles) => ({
                        ...styles,
                        ...newStyles.loadingMessage,
                        ...(override.loadingMessage?.style || {}),
                    }),
                },
                ...override['react-select'],
            };
        }, [
            focused,
            loadOptions,
            isFuzzy,
            innerOptions,
            isReadOnly,
            selectClassName,
            placeholder,
            lazyOptions.options,
            lazyOptions.isLoading,
            noOptionsMessage,
            loadingMessage,
            newValue,
            defaultMenuIsOpen,
            actions,
            isMulti,
            newIsClearable,
            isSearchable,
            hideSelectedOptions,
            handleOnChange,
            handleOnFocus,
            handleOnBlur,
            filterByKey,
            formatOptionLabel,
            formatGroupLabel,
            beforeControl,
            afterControl,
            onMouseDown,
            dropdownWidth,
            classes.menu,
            classes.actionContainer,
            classes.action,
            classes.actionIcon,
            classes.actionText,
            classes.actionTextWithIcon,
            classes.group,
            classes.option,
            onClickAction,
            override,
            controlStyles,
            placeholderStyles,
            valueContainerStyles,
            optionsStyles,
            indicatorSeparatorStyles,
            menuListStyles,
            multiValueLabelStyles,
            multiValueRemoveStyles,
        ]);

        let SelectComponent = RSelect;
        if (loadOptions && isFuzzy) {
            SelectComponent = AsyncSelect;
            selectProps.loadOptions = loadOptionsCb;
        }

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
                isRequired={isRequired}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    <SelectComponent {...selectProps} />
                </div>
            </InputWrapper>
        );
    },
);

Select.overrides = [
    'root',
    'react-select',
    'inputComponents',
    'control',
    'controlFocused',
    'options',
    'optionsDisabled',
    'valueContainer',
    'valueContainerDisabled',
    'placeholder',
    'placeholderDisabled',
    'multipleValueLabel',
    'multipleValueLabelDisabled',
    'multipleValueRemove',
    'multipleValueRemoveDisabled',
    'optionLabel',
    'optionLabelIcon',
    'optionLabelCustomIcon',
    'optionLabelAvatar',
    'disabledAvatar',
    'disabledText',
    'disabledIcon',
    'label',
    'optionLabelBlock',
    'optionLabelText',
    'optionLabelSubLabel',
    'menu',
    'actionContainer',
    'action',
    'actionIcon',
    'actionText',
    'actionTextWithIcon',
];

Select.defaultProps = {
    labelMode: 'vertical',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
    overrides: {},
    hideOptions: false,
    filterByKey: false,
    defaultMenuIsOpen: false,
    size: 'medium',
    onlyText: false,
    isSearchable: true,
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
    /** Async mode */
    loadOptions: PropTypes.func,
    groupOptions: PropTypes.func,
    /* Autocomplete/Search UI */
    isFuzzy: PropTypes.bool,
    onChange: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
            isDisabled: PropTypes.bool,
            src: PropTypes.string,
            icon: PropTypes.element,
            iconType: PropTypes.string,
            subLabel: PropTypes.string,
        }),
    ),
    defaultSearch: PropTypes.string,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    loadingPlaceholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isSearchable: PropTypes.bool,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** Is the select value clearable */
    isClearable: PropTypes.bool,
    /** React select component customization */
    components: PropTypes.object,
    /** multiple select support */
    isMulti: PropTypes.bool,
    /** Fixed actions added at the bottom con menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    /** Filter by keys as well */
    filterByKey: PropTypes.bool,
    defaultMenuIsOpen: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    onlyText: PropTypes.bool,
    dropdownWidth: PropTypes.string,
    beforeControl: PropTypes.node,
    afterControl: PropTypes.node,
};

export default Select;
