import React from 'react';
import {Card} from 'reactstrap';
import {SaladList} from '../features/salads/SaladsList';
import {SALADS} from '../data'


export const SaladPage = () => {
    return (
        <Card>
            <h2 style={{paddingLeft: "40px"}} className='m-4'>Salads</h2>
            <SaladList salad={SALADS[0]}/>
        </Card>
    )
}


