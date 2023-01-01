
import logo from '../assets/img/freagman.jpeg'
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import PopularsList from '../features/populars/PopularsList';
 import { POPULAR } from '../data';
 
const Home = () => {
     
    return (
        <div>
            <Card>
                <CardImg 
                src={logo}
                alt="logo"
                width="500%"
                height="500"
                style={{ marginRight: 20}}
                />
                <CardImgOverlay className='overlay'>
                    <CardTitle style={{marginLeft: 40}}><h1>Welcome</h1></CardTitle>
                </CardImgOverlay>
            </Card>
            <h2 className='m-4'>Popular</h2>
            <PopularsList  popular={POPULAR[0]}/>
            
        </div>
        
    )
}
export default Home
