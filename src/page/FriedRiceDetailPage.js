import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import {selectFriedriceById}  from '../features/friedrices/FriedRicesSlice';
import FriedRiceDetail from '../features/friedrices/FriedRiceDetail';

import React from 'react'

const FriedRiceDetailPage = () => {

    const {friedriceId} = useParams();
    const friedrice = selectFriedriceById(friedriceId)
    return (
        <div>
            <Container>
                <Row>
                    <FriedRiceDetail friedrice ={friedrice} />
                </Row>
            </Container>
        </div>
    )
}

export default FriedRiceDetailPage;
