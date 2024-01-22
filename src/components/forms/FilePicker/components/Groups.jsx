import React, { memo, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import classnames from 'classnames';
import Text from '../../../typography/Text';
import Icon from '../../../general/Icon';
import Popover from '../../../utils/Popover';
import FilesList from './FilesList';
import { useTheme } from '../../../../utils/styles';

const ROW_HEIGHT = 45;

const Groups = memo(
    ({
        classes,
        files,
        groups,
        foldedText,
        unfoldedText,
        overrides,
        imageTypes,
        imageExtensions,
        previewImages,
        cropImages,
        cropTooltip,
        filesData,
        handleOnCrop,
        onRemove,
        maxVisible,
        totalDroppedTooltip,
    }) => {
        const theme = useTheme();

        const [groupsFolded, setGroupsFolded] = useState({});
        const [isFolded, setIsFolded] = useState(true);
        const isFirstRender = useRef(true);

        useEffect(() => {
            if (isFirstRender.current) {
                isFirstRender.current = false;

                if (!groups?.length) return;
                const initialGroupsFolded = groups.reduce((obj, current, index) => {
                    obj[index] = true;
                    return obj;
                }, {});
                setGroupsFolded(initialGroupsFolded);
            }
        }, [groups]);

        const handleOnRemove = useCallback(
            (group, index) => (deletedFile) => {
                onRemove &&
                    Promise.resolve(onRemove(deletedFile)).then((result) => {
                        console.log('result', result);
                        const groupFiles = files.filter((file) => group.validateFiles(file));
                        if (groupFiles.length - 1 <= 0)
                            setGroupsFolded({ ...groupsFolded, [index]: true });
                    });
            },
            [onRemove, files, groupsFolded],
        );

        const onClick = useCallback(
            (index) => {
                if (groups?.length && !isNaN(index)) {
                    setGroupsFolded({ ...groupsFolded, [index]: !groupsFolded[index] });
                } else setIsFolded((isFolded) => !isFolded);
            },
            [groupsFolded, groups],
        );

        const getIconClassNames = useCallback(
            (index) => {
                return classnames(classes.groupFooterIcon, {
                    [classes.groupFooterIconRotate]: !isNaN(index)
                        ? !groupsFolded[index]
                        : isFolded,
                });
            },
            [classes, groupsFolded, isFolded],
        );

        const renderExpand = useCallback(
            (index) => {
                let textFolded = '';
                let textUnfolded = '';
                if (groups?.length) {
                    textFolded = groupsFolded[index] ? foldedText : '';
                    textUnfolded = !groupsFolded[index] ? unfoldedText : '';
                } else {
                    textFolded = isFolded ? foldedText : '';
                    textUnfolded = !isFolded ? unfoldedText : '';
                }

                const content = (
                    <div
                        className={classes.groupFooterTextContainer}
                        onClick={() => onClick(index)}
                    >
                        <Text type="caption" color="orange500">
                            {textFolded}
                            {textUnfolded}
                        </Text>
                        <Icon
                            className={getIconClassNames(index)}
                            name="chevron"
                            size="small"
                            color={theme.colors.orange500}
                        />
                    </div>
                );

                if (totalDroppedTooltip) {
                    return (
                        <Popover
                            content={<Text>{`+ ${totalDroppedTooltip}`}</Text>}
                            visible={!!totalDroppedTooltip}
                            overlayStyle={{ zIndex: 99999 }}
                            overrides={{
                                root: {
                                    style: {
                                        '& .hoi-poi-popover-inner': {
                                            backgroundColor: `${theme.colors.neutral700} !important`,
                                            color: `${theme.colors.neutralBase} !important`,
                                        },
                                    },
                                },
                            }}
                        >
                            {content}
                        </Popover>
                    );
                } else return content;
            },
            [
                groupsFolded,
                getIconClassNames,
                classes,
                foldedText,
                unfoldedText,
                groups,
                isFolded,
                onClick,
                theme,
                totalDroppedTooltip,
            ],
        );

        const renderGroups = useMemo(() => {
            if (!groups?.length) return null;
            return groups.map((group, index) => {
                const selectedFiles = files.filter((file) => group.validateFiles(file));

                let title = group?.title || '';
                if (group.maxFiles) {
                    title = `${title} (${selectedFiles.length}/${group.maxFiles})`;
                } else {
                    title = `${title} (${selectedFiles.length})`;
                }

                if (!selectedFiles?.length) return null;

                const groupListWrapperClassNames = classnames(classes.groupListWrapper, {
                    [classes.groupListWrapperMargin]: selectedFiles.length <= 3,
                });

                const groupClassNames = classnames(classes.group, {
                    [classes.groupMargin]: index > 0,
                });

                let inlineStyles = {};

                const stylesUnfolded = {
                    height: ROW_HEIGHT * selectedFiles.length,
                    overflow: 'auto',
                };

                const stylesFolded = {
                    height: ROW_HEIGHT * group.maxVisible,
                    overflow: 'hidden',
                };

                if (groupsFolded[index]) {
                    if (
                        group.hasOwnProperty('maxVisible') &&
                        selectedFiles.length > group.maxVisible
                    ) {
                        inlineStyles = stylesFolded;
                    } else {
                        inlineStyles = {
                            height: ROW_HEIGHT * selectedFiles.length,
                            overflow: 'auto',
                        };
                    }
                } else {
                    inlineStyles = stylesUnfolded;
                }

                return (
                    <div key={index} className={groupClassNames} {...overrides.group}>
                        <div className={classes.groupHeader} {...overrides.groupHeader}>
                            <div className={classes.groupTitle} {...overrides.groupTitle}>
                                <Text color="neutral700">{title}</Text>
                            </div>
                        </div>
                        <div className={classes.groupTitleDivider} />
                        <div className={groupListWrapperClassNames} style={inlineStyles}>
                            <FilesList
                                classes={classes}
                                files={selectedFiles}
                                imageTypes={imageTypes}
                                imageExtensions={imageExtensions}
                                previewImages={previewImages}
                                cropImages={cropImages}
                                cropTooltip={cropTooltip}
                                handleOnCrop={handleOnCrop}
                                setIsFolded={setIsFolded}
                                onRemove={handleOnRemove(group, index)}
                                filesData={filesData}
                                overrides={overrides}
                            />
                        </div>
                        {group.hasOwnProperty('maxVisible') &&
                            selectedFiles.length > group.maxVisible && (
                                <div className={classes.groupFooter}>{renderExpand(index)}</div>
                            )}
                    </div>
                );
            });
        }, [
            groups,
            classes,
            overrides,
            files,
            imageTypes,
            imageExtensions,
            previewImages,
            cropImages,
            cropTooltip,
            handleOnCrop,
            handleOnRemove,
            filesData,
            groupsFolded,
            renderExpand,
        ]);

        const renderList = useMemo(() => {
            let inlineStyles = {};
            if (isFolded && maxVisible && files.length > maxVisible) {
                inlineStyles.height = ROW_HEIGHT * maxVisible;
                inlineStyles.overflow = 'hidden';
            }
            return (
                <div className={classes.filesListWrapper} style={inlineStyles}>
                    <FilesList
                        classes={classes}
                        files={files}
                        imageTypes={imageTypes}
                        imageExtensions={imageExtensions}
                        previewImages={previewImages}
                        cropImages={cropImages}
                        cropTooltip={cropTooltip}
                        handleOnCrop={handleOnCrop}
                        setIsFolded={setIsFolded}
                        onRemove={onRemove}
                        filesData={filesData}
                        overrides={overrides}
                    />
                    {maxVisible && files.length > maxVisible && renderExpand()}
                </div>
            );
        }, [
            classes,
            cropImages,
            cropTooltip,
            files,
            filesData,
            imageTypes,
            imageExtensions,
            previewImages,
            handleOnCrop,
            onRemove,
            overrides,
            isFolded,
            maxVisible,
            renderExpand,
        ]);

        if (groups) return renderGroups;
        return renderList;
    },
);

export default Groups;
