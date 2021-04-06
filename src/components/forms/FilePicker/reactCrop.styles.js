export default (theme) => ({
    '& .ReactCrop': {
        position: 'relative',
        display: 'inline-block',
        cursor: 'crosshair',
        overflow: 'hidden',
        maxWidth: '100%',
    },
    '& .ReactCrop:focus': { outline: 'none' },
    '& .ReactCrop--disabled, .ReactCrop--locked': { cursor: 'inherit' },
    '& .ReactCrop__image': {
        display: 'block',
        maxWidth: '100%',
        touchAction: 'manipulation',
    },
    '& .ReactCrop__crop-selection': {
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'translate3d(0, 0, 0)',
        boxSizing: 'border-box',
        cursor: 'move',
        boxShadow: '0 0 0 9999em rgba(0, 0, 0, 0.5)',
        touchAction: 'manipulation',
        border: '1px solid',
        borderImageSource:
            'url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==")',
        borderImageSlice: '1',
        borderImageRepeat: 'repeat',
    },
    '& .ReactCrop--disabled .ReactCrop__crop-selection': { cursor: 'inherit' },
    '& .ReactCrop--circular-crop .ReactCrop__crop-selection': {
        borderRadius: '50%',
        boxShadow: '0px 0px 1px 1px white, 0 0 0 9999em rgba(0, 0, 0, 0.5)',
    },
    '& .ReactCrop--invisible-crop .ReactCrop__crop-selection': { display: 'none' },
    '& .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after, .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    '& .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after': {
        width: '1px',
        height: '100%',
    },
    '& .ReactCrop__rule-of-thirds-vt::before': {
        left: ['33.3333%', 'calc(100% / 3)'],
    },
    '& .ReactCrop__rule-of-thirds-vt::after': {
        left: ['66.6666%', 'calc(100% / 3 * 2)'],
    },
    '& .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after': {
        width: '100%',
        height: '1px',
    },
    '& .ReactCrop__rule-of-thirds-hz::before': {
        top: ['33.3333%', 'calc(100% / 3)'],
    },
    '& .ReactCrop__rule-of-thirds-hz::after': {
        top: ['66.6666%', 'calc(100% / 3 * 2)'],
    },
    '& .ReactCrop__drag-handle': { position: 'absolute' },
    '& .ReactCrop__drag-handle::after': {
        position: 'absolute',
        content: "''",
        display: 'block',
        width: '10px',
        height: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        boxSizing: 'border-box',
        outline: '1px solid transparent',
    },
    '& .ord-nw': {
        top: '0',
        left: '0',
        marginTop: '-5px',
        marginLeft: '-5px',
        cursor: 'nw-resize',
    },
    '& .ord-nw::after': { top: '0', left: '0' },
    '& .ord-n': {
        top: '0',
        left: '50%',
        marginTop: '-5px',
        marginLeft: '-5px',
        cursor: 'n-resize',
    },
    '& .ord-n::after': { top: '0' },
    '& .ord-ne': {
        top: '0',
        right: '0',
        marginTop: '-5px',
        marginRight: '-5px',
        cursor: 'ne-resize',
    },
    '& .ord-ne::after': { top: '0', right: '0' },
    '& .ord-e': {
        top: '50%',
        right: '0',
        marginTop: '-5px',
        marginRight: '-5px',
        cursor: 'e-resize',
    },
    '& .ord-e::after': { right: '0' },
    '& .ord-se': {
        bottom: '0',
        right: '0',
        marginBottom: '-5px',
        marginRight: '-5px',
        cursor: 'se-resize',
    },
    '& .ord-se::after': { bottom: '0', right: '0' },
    '& .ord-s': {
        bottom: '0',
        left: '50%',
        marginBottom: '-5px',
        marginLeft: '-5px',
        cursor: 's-resize',
    },
    '& .ord-s::after': { bottom: '0' },
    '& .ord-sw': {
        bottom: '0',
        left: '0',
        marginBottom: '-5px',
        marginLeft: '-5px',
        cursor: 'sw-resize',
    },
    '& .ord-sw::after': { bottom: '0', left: '0' },
    '& .ord-w': {
        top: '50%',
        left: '0',
        marginTop: '-5px',
        marginLeft: '-5px',
        cursor: 'w-resize',
    },
    '& .ord-w::after': { left: '0' },
    '& .ReactCrop__disabled .ReactCrop__drag-handle': { cursor: 'inherit' },
    '& .ReactCrop__drag-bar': { position: 'absolute' },
    '& .ReactCrop__drag-bar.ord-n': {
        top: '0',
        left: '0',
        width: '100%',
        height: '6px',
        marginTop: '-3px',
    },
    '& .ReactCrop__drag-bar.ord-e': {
        right: '0',
        top: '0',
        width: '6px',
        height: '100%',
        marginRight: '-3px',
    },
    '& .ReactCrop__drag-bar.ord-s': {
        bottom: '0',
        left: '0',
        width: '100%',
        height: '6px',
        marginBottom: '-3px',
    },
    '& .ReactCrop__drag-bar.ord-w': {
        top: '0',
        left: '0',
        width: '6px',
        height: '100%',
        marginLeft: '-3px',
    },
    '& .ReactCrop--new-crop .ReactCrop__drag-bar,\n  .ReactCrop--new-crop .ReactCrop__drag-handle,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-bar': {
        display: 'none',
    },
    '& .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w': {
        display: 'none',
    },
    '@media (pointer: coarse)': {
        '& .ReactCrop .ord-n,\n    .ReactCrop .ord-e,\n    .ReactCrop .ord-s,\n    .ReactCrop .ord-w': {
            display: 'none',
        },
        '& .ReactCrop__drag-handle': { width: '24px', height: '24px' },
    },
});
