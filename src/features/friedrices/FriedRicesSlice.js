import { FRIEDRICE } from '../../data'

export const selectAllFriedRice = () => {
    return FRIEDRICE;
}

export const selectFriedriceById = (id) => {
    return FRIEDRICE.find((friedrice) => friedrice.id === parseInt(id))
}