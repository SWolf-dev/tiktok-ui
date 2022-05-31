import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    let [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setSearchResult([1, 2, 3]);
    // }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('header-logo')}>
                        <img className={cx('header-logo-image')} src={images.logo} alt="TikTok" />
                    </div>
                    <Tippy
                        interactive={true}
                        placement={'bottom-start'}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <div className={cx('search-input')}>
                                <input placeholder="Search accounts or videos" />
                                <button className={cx('clear-search-btn')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx('actions')}>
                        <Button
                            outline
                            small
                            // to={'https://fontawesome.com/search?s=solid%2Cbrands'}
                            onClick={() => alert('hh')}
                        >
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
