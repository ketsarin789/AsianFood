import {NOODLES} from '../../data';

export const selectAllNoodle = () => {
    return NOODLES;
}

export const selectNoodleById = (id) => {
    return NOODLES.find((noodle) => noodle.id === parseInt(id))
}