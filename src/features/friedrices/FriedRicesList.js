import FriedRiceCard  from "./FriedRiceCard";
import { selectAllFriedRice} from './FriedRicesSlice';
import {Row, Col} from 'reactstrap';



export const FriedRiceList = () => {
    const friedrices = selectAllFriedRice();
    return (
        <Row>
             {friedrices.map((friedrice) => {
                return(
                    <Col md="3" className='m-4' 
                    key={friedrice.id}>
                   
                         <FriedRiceCard friedrice={friedrice} /> 
                    </Col>
                )
            })}
        </Row>
    )
}
