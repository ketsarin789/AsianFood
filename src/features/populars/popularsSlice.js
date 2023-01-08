import {POPULAR} from  '../../data'

export const selectAllPopular = () => {
    return POPULAR;
}

export const selectPopularById = (id) => { // I put parseInt
    return POPULAR.find((popular) => popular.id === parseInt(id));
};

