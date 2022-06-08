import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [deboundValue, setDeboundValue] = useState(value);
    useEffect(() => {
        let handller = setTimeout(() => {
            setDeboundValue(value);
        }, delay);
        return () => clearTimeout(handller);
    }, [value]);
    return deboundValue;
}

export default useDebounce;
