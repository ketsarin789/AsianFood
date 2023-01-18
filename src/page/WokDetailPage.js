import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import {selectWokById}  from '../features/woks/WoksSlice';
import WokDetail from '../features/woks/WokDetail';

import React from 'react'

// const FriedRiceDetailPage = () => {
//     const [friedriceId, setFriedRiceId] = useState(0)
// }

export const WokDetaillPage = () => {

    const {wokId} = useParams();
    const wok = selectWokById(wokId)
    return (
        <div>
            <Container>
                <Row>
                    <WokDetail wok={wok} />
                </Row>
            </Container>
        </div>
    )
}

