import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import { selectSoupById }  from '../features/soups/SoupsSlice';
import SoupDetail from '../features/soups/SoupDetail';

import React from 'react'



const SoupDetailPage = () => {

    const {soupId} = useParams();
    const soup = selectSoupById(soupId)
    return (
        <div>
            <Container>
                <Row>
                    <SoupDetail soup ={soup} />
                </Row>
            </Container>
        </div>
    )
}

export default SoupDetailPage;
