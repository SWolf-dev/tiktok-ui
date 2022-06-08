import { faL } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    outline = false,
    to,
    text = false,
    large = false,
    small = false,
    primary = false,
    disabled = false,
    rounded = false,
    href,
    children,
    className,
    onClick,
    leftIcon,
    rightIcon,
    normal,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
        leftIcon,
        rightIcon,
        normal,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: propTypes.node.isRequired,
    outline: propTypes.bool,
    to: propTypes.string,
    text: propTypes.bool,
    large: propTypes.bool,
    small: propTypes.bool,
    primary: propTypes.bool,
    disabled: propTypes.bool,
    rounded: propTypes.bool,
    href: propTypes.string,
    className: propTypes.string,
    onClick: propTypes.func,
    leftIcon: propTypes.node,
    rightIcon: propTypes.node,
    normal: propTypes.bool,
};

export default Button;
