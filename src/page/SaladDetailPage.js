import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import {selectSaladById}  from '../features/salads/SaladsSlice';
import SaladDetail from '../features/salads/SaladDeatil';

import React from 'react'



const SaladDetailPage = () => {

    const {saladId} = useParams();
    const salad = selectSaladById(saladId)
    return (
        <div>
            <Container>
                <Row>
                    <SaladDetail salad ={salad} />
                </Row>
            </Container>
        </div>
    )
}

export default SaladDetailPage;
