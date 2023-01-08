import React from 'react';
import { Container, Row , Card} from 'reactstrap';
import { selectFriedriceById} from '../features/friedrices/FriedRicesSlice';
import FriedRiceDetail  from '../features/friedrices/FriedRiceDetail';
import { useParams } from 'react-router-dom';
import { FriedRiceList } from '../features/friedrices/FriedRicesList';
import {FRIEDRICE} from '../shared/FRIEDRICE'

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
                <h2 className='m-4'>Fried Rice</h2>
                <FriedRiceList  friedrice={FRIEDRICE[0]}/>
             </Card>
        </div>
    )
}

