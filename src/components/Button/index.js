import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ to, outline = false, small = 'medium', primary = false, href, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        props.href = href;
        Comp = 'a';
    }
    const className = cx('wrapper', {
        primary,
        outline,
        small,
    });
    return (
        <Comp className={className} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
