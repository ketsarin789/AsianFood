import {CardBody, CardImg, CardTitle, Col, Row, CardText, Card} from 'reactstrap';

export const NoodleDetail = ({noodle}) => {
    const {image,name,receipt,description,preparation} = noodle

    return(
        <Row className="row" style={{marginTop: "20px"}}>
            <Card className='col-md-6'>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
            <div className='col-md-6'>
            <h1 className='seeew'>{name}</h1>
            <h2>ingredents</h2>
            <ul>
                
                {receipt.map((receipts) =>  {
                    
                    return <li>{receipts}</li>
                })}
                
            </ul>
            <h2>Preparation</h2>
            <ul>
               {preparation.map((preparations) => {
                   
                   return <li>{preparations}</li>
               })}
            </ul>
        </div>
        </Row>
    )
}