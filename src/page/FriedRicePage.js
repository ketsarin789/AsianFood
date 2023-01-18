import React from 'react';
import {  Card} from 'reactstrap';
import { selectFriedriceById} from '../features/friedrices/FriedRicesSlice';
import FriedRiceDetail  from '../features/friedrices/FriedRiceDetail';
import { useParams } from 'react-router-dom';
import { FriedRiceList } from '../features/friedrices/FriedRicesList';
import {FRIEDRICE} from '../data'

// export const FriedRicePage = () => {
//     const {friedriceId} = useParams();
//     const friedrice = selectFriedriceById(friedriceId)
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     {/* <FriedRiceDetail friedrice={friedrice} />  */}
//                     <FriedRiceList />
//                 </Row>
//             </Container>
//         </div>
       
//     )
// }


export const FriedRicePage = () => {
    return (
        <div>
            <Card>
                <h2 style={{paddingLeft: "40px"}} className='m-4'>Fried Rices</h2>
                <FriedRiceList  friedrice={FRIEDRICE[0]}/>
             </Card>
        </div>
    )
}

