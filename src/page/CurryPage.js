import React from 'react'
import {Card} from 'reactstrap';
import { CURRYS } from '../data';
import {CurryList} from '../features/currys/CurrysList'

export const CurryPage = () => {
    return (
        <div>
            <Card >
                <h2 style={{marginLeft: "40px"}} className="m-4">Currys</h2>
                <CurryList curry={CURRYS[0]}/>
            </Card>
        </div>
    )
}
