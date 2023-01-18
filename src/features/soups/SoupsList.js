import {SoupCard} from '../soups/SoupCard';
import {selectAllSoup} from '../soups/SoupsSlice';
import {Row, Col} from 'reactstrap';

import React from 'react'

export const SoupsList = () => {
    const soups = selectAllSoup();
    return (
        <Row>
            {soups.map((soup) => {
                return(
                    <Col md="5" className='m-4'>
                        <SoupCard soup={soup}/>
                    </Col>
                )
            })}
        </Row>
    )
}


