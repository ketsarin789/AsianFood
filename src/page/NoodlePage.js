import React from 'react'
import { NOODLES } from '../data'
import {NoodlesList} from '../features/noodles/NoodlesList';
import {Card} from 'reactstrap';

export const NoodlePage = () => {
    return (
        <div>
           <Card>
               <h2 style={{marginLeft: "40px"}} className='m-4'>Noodles</h2>
               <NoodlesList noodle={NOODLES[0]}/>
           </Card>
        </div>
    )
}
