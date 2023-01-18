import {SOUPS} from '../../data';

export const selectAllSoup = () => {
    return SOUPS;
};

export const selectSoupById = (id) => {
    return SOUPS.find((soup) => soup.id === parseInt(id))
};

