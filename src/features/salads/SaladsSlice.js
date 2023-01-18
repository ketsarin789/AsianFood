import {SALADS} from '../../data';

export  const selectAllSalad = () => {
    return SALADS;
}

export const selectSaladById = (id) => {
    return SALADS.find((salad) => salad.id === parseInt(id));
    
}