import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import {selectCurryById}  from '../features/currys/CurrysSlice';
import CurryDetail from '../features/currys/CurryDetail';

import React from 'react'



const CurryDetailPage = () => {

    const {curryId} = useParams();
    const curry = selectCurryById(curryId)
    return (
        <div>
            <Container>
                <Row>
                    <CurryDetail curry ={curry} />
                </Row>
            </Container>
        </div>
    )
}

export default CurryDetailPage;