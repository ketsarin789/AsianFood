import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectPopularById } from '../features/populars/popularsSlice'
import {PopularDetail} from '../page/PopularDetail';



const PopularDetailPage = () => {
    const  {popularId} = useParams();
    const popular = selectPopularById(popularId)
    return(
        <div>
            <Container>
                <Row>
                    <PopularDetail popular={popular} />
                    
                </Row>
            </Container>
            
        </div>
    )
};

export default PopularDetailPage;