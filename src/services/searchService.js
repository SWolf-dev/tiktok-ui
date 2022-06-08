import { default as axios } from '../utils/axios';

let getSearchResultService = async (debounce, type = 'less') => {
    try {
        const res = await axios.get(`/api/users/search?q=${encodeURIComponent(debounce)}&type=${type}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export { getSearchResultService };
