import { WokCard } from "./WokCard";
import {selectAllWok} from '../woks/WoksSlice';
import {Col, Row} from 'reactstrap';


import React from 'react'

export const WoksList = () => {
    const woks = selectAllWok();
    return (
        <Row>
            {woks.map((wok) => {
                return(
                    <Col md="4" className="m-4" key={wok.id}>
                        <WokCard  wok={wok}/>
                    </Col>
                )
            })}
        </Row>
    )
}
