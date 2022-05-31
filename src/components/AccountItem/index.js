import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/a/AGF-l79kz9Pl051VLQEZrT_itqFB-i7GrEIO9KpKQQ=s900-c-k-c0xffffffff-no-rj-mo"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>Nguyen van a</span>
            </div>
        </div>
    );
}

export default AccountItem;
