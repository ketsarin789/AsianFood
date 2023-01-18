import { selectAllCurry } from "./CurrysSlice";
import {Row, Col} from 'reactstrap';
import CurryCard from "./CurryCard";

export const CurryList = () => {
    const currys = selectAllCurry();
    return(
        <Row>
            {currys.map((curry) => {
                return(
                    <Col md="5" className="m-4"
                        key={curry.id} >
                        <CurryCard curry={curry} />
                    </Col>
                )
            })}
        </Row>
    )
}