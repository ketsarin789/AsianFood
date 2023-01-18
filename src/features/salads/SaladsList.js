import { SaladsCard } from "./SaladsCard";
import {selectAllSalad} from '../salads/SaladsSlice';
import {Row, Col} from 'reactstrap';


export const SaladList = () => {
    const salads = selectAllSalad();
     return(
         <Row>
             {salads.map((salad) => {
                 return(
                    <Col md="4" className='m-4'  style={{padding: "30px"}}
                    key={salad.id}>
                        <SaladsCard  salad={salad}/>
                    </Col>
                 )
             })}
         </Row>
     )
}