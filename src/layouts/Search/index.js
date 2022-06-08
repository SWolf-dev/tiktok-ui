import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';
import { getSearchResultService } from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(!showResult);
    };

    const handleSearchValue = (e) => {
        if (e.target.value.startsWith(' ') || !e.target.value.trim) {
            return;
        } else {
            setSearchValue(e.target.value);
        }
    };

    const handleGetSearchResult = async () => {
        let res = await getSearchResultService(debounce);
        if (res) {
            setSearchResult(res.data);
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        handleGetSearchResult();
    }, [debounce]);
    return (
        <Tippy
            interactive={true}
            appendTo={() => document.body}
            placement={'bottom'}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => {
                            return <AccountItem key={item.id} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts or videos"
                    spellCheck={false}
                    onChange={handleSearchValue}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue &&
                    (loading ? (
                        <button className={cx('loading-search-btn')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    ) : (
                        <button className={cx('clear-search-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    ))}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon width="2.4rem" height="2.4rem" />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
