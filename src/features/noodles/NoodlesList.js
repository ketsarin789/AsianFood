import { Col, Row} from 'reactstrap';
import {selectAllNoodle} from '../noodles/NoddlesSlice';
import {NoodleCard} from '../noodles/NoddleCard';

import React from 'react'

export const NoodlesList = () => {
    const noodles = selectAllNoodle();
    return (
        <Row>
            {noodles.map((noodle) => {
                return(
                    <Col md="5" className='m-4'>
                        <NoodleCard noodle={noodle}/>
                    </Col>
                )
            })}
        </Row>
    )
}
