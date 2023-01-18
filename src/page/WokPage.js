import {Card} from 'reactstrap';
import { WoksList} from '../features/woks/WoksList';
import {WOKS} from '../data'


import React from 'react'

export const WoksPage = () => {
    return (
        <div>
            <Card>
                <h2 style={{marginLeft: "40px"}} className='m-4'>Woks</h2>
                <WoksList wok={WOKS[0]}/>
            </Card>
        </div>
    )
}
