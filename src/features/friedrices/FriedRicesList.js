import FriedRiceCard  from "./FriedRiceCard";
import { selectAllFriedRice} from './FriedRicesSlice';
import {Row, Col} from 'reactstrap';



export const FriedRiceList = () => {
    const friedrices = selectAllFriedRice();
    return (
        <Row>
             {friedrices.map((friedrice) => {
                return(
                    <Col md="4" className='m-4'  style={{padding: "30px"}}
                    key={friedrice.id}>
                   
                         <FriedRiceCard friedrice={friedrice} /> 
                    </Col>
                )
            })}
        </Row>
    )
}
