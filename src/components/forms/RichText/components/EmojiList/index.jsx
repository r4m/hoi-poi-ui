import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
    useRef,
} from 'react';
import classNames from 'classnames';
import Text from '../../../../typography/Text';
import ScrollBar from '../../../../utils/ScrollBar';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'EmojiList');

const EMOJI_LIST_ITEM_HEIGHT = 28;
const MAX_MENTION_LIST_ITEMS_VISIBLE_WITHOUT_SCROLL = 8;

const EmojiList = forwardRef(
    (
        {
            texts,
            command,
            classes: classesProp,
            items = [],
            maxVisibleItems = MAX_MENTION_LIST_ITEMS_VISIBLE_WITHOUT_SCROLL,
        },
        ref,
    ) => {
        const classes = useClasses(useStyles, classesProp);
        const [selectedIndex, setSelectedIndex] = useState(0);
        const scrollBarRef = useRef();

        useEffect(() => setSelectedIndex(0), [items]);

        const selectItem = useCallback(
            (index) => {
                const item = items[index];
                if (item) {
                    command({ name: item.name });
                }
            },
            [command, items],
        );

        const scrollHandler = useCallback((index) => {
            scrollBarRef?.current?.scrollTop(index * EMOJI_LIST_ITEM_HEIGHT);
        }, []);

        const upHandler = useCallback(() => {
            const newIndex = (selectedIndex + items.length - 1) % items.length;
            setSelectedIndex(newIndex);
            scrollHandler(newIndex);
        }, [items, selectedIndex, scrollHandler]);

        const downHandler = useCallback(() => {
            const newIndex = (selectedIndex + 1) % items.length;
            setSelectedIndex(newIndex);
            scrollHandler(newIndex);
        }, [items, selectedIndex, scrollHandler]);

        const enterHandler = useCallback(() => {
            selectItem(selectedIndex);
        }, [selectItem, selectedIndex]);

        useImperativeHandle(ref, () => ({
            onKeyDown: ({ event }) => {
                if (event.key === 'ArrowUp') {
                    upHandler();
                    return true;
                }

                if (event.key === 'ArrowDown') {
                    downHandler();
                    return true;
                }

                if (event.key === 'Enter') {
                    enterHandler();
                    return true;
                }

                return false;
            },
        }));

        const scrollBarProps = useMemo(
            () => ({
                autoHeight: true,
                autoHeightMax: EMOJI_LIST_ITEM_HEIGHT * maxVisibleItems,
                ref: scrollBarRef,
            }),
            [maxVisibleItems],
        );

        return (
            <div className={classes.root}>
                {items.length ? (
                    <ScrollBar {...scrollBarProps}>
                        {items.map((item, index) => (
                            <div
                                className={classNames(classes.item, {
                                    [classes.selected]: index === selectedIndex,
                                })}
                                key={index}
                                onClick={() => selectItem(index)}
                            >
                                <Text
                                    color="neutral900"
                                    type="body"
                                    className={classes.emojiItem}
                                    isTruncated
                                >
                                    <span>
                                        {item.fallbackImage ? (
                                            <img src={item.fallbackImage} alt={item.name} />
                                        ) : (
                                            item.emoji
                                        )}
                                    </span>
                                    <span>:{item.name}:</span>
                                </Text>
                            </div>
                        ))}
                    </ScrollBar>
                ) : (
                    <Text>{texts?.noResults || 'No Results'}</Text>
                )}
            </div>
        );
    },
);

export default EmojiList;
