import {POPULAR} from '../../data';
import PopularCard from './PopularsCard';
//import {selectPopularById } from '../populars/PopularsSlice';
import {selectAllPopular} from '../populars/popularsSlice'

import {Row, Col} from 'reactstrap';

const PopularList = () => {
    const populars = selectAllPopular();
   return(
        <Row>
            { populars.map((popular) => {
                return(
                    <Col md="3" className='m-4' 
                    key={popular.id}>
                   
                         <PopularCard popular={popular} /> 
                    </Col>
                )
            })}
          
        </Row>
    )
}
export default PopularList;