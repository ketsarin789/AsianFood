import { FRIEDRICE } from '../../shared/FRIEDRICE'

export const selectAllFriedRice = () => {
    return FRIEDRICE;
}

export const selectFriedriceById = (id) => {
    return FRIEDRICE.find((friedrice) => friedrice.id === parseInt(id))
}