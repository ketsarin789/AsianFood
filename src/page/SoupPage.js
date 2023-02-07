import React from 'react'
import {SOUPS} from '../data'
import {SoupsList} from '../features/soups/SoupsList';
import {Card} from 'reactstrap';

export const SoupPage = () => {
    return (
        <Card>
            <h2 style={{marginLeft: "40px"}} className='m-4'>Soups</h2>
            <SoupsList soup={SOUPS[0]}/>
        </Card>
    )
}
