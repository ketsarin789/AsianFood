import {WOKS} from '../../data';

export const selectAllWok = () => {
    return WOKS;
};

export const selectWokById = (id) => {
    return WOKS.find((wok) => wok.id === parseInt(id))
};
