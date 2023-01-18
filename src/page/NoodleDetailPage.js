import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
import {selectNoodleById}  from '../features/noodles/NoddlesSlice';
import {NoodleDetail} from '../features/noodles/NoodleDetail';

import React from 'react'



const NoodleDetailPage = () => {

    const {noodleId} = useParams();
    const noodle = selectNoodleById(noodleId)
    return (
        <div>
            <Container>
                <Row>
                    <NoodleDetail noodle ={noodle} />
                </Row>
            </Container>
        </div>
    )
}

export default NoodleDetailPage;
