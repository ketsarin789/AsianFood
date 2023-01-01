import {POPULAR} from  '../../data'

export const selectAllPopular = () => {
    return POPULAR;
}

export const selectPopularById = (id) => {
    return POPULAR.find((popular) => popular.id ===id)
};

