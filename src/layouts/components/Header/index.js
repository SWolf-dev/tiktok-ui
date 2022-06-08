import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { default as RegularTippy } from '@tippyjs/react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../../Search';
import config from '~/configs';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        subMenu: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    title: 'English',
                    code: 'en',
                },
                {
                    type: 'language',
                    title: 'Vietnamese',
                    code: 'vi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboards shortcuts',
    },
];
const USER_MENU = [
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const handleMenuChange = (menuItem) => {};
    const currentUser = true;

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('header-logo')}>
                        <img className={cx('header-logo-image')} src={images.logo} alt="TikTok" />
                    </Link>
                    <Search />
                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} normal onClick={() => alert('hh')}>
                                    Upload
                                </Button>
                                <RegularTippy content="Messages" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon width="1em" height="1em" />
                                    </button>
                                </RegularTippy>
                                <RegularTippy content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon width="1.2em" height="1.2em" />
                                    </button>
                                </RegularTippy>
                            </>
                        ) : (
                            <>
                                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} normal onClick={() => alert('hh')}>
                                    Upload
                                </Button>
                                <Button primary onClick={() => alert('hh')}>
                                    Log in
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    alt="thuong"
                                    src="https://i.imgur.com/NxoC6Lk.jpg"
                                    fallBack="https://cdn.onlinewebfonts.com/svg/img_355233.png"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
