import {CURRYS} from '../../data';

export const selectAllCurry = () => {
    return CURRYS;
};

export const selectCurryById = (id) => {
    return CURRYS.find((curry) => curry.id === parseInt(id));
}