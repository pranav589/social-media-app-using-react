import React from 'react'
import {Input,Row,Col,Container} from 'react-materialize'


export default ()=>{
  return(
     <Container>
       <Row>
         <Col className='teal' s={12} m={4}>Profile</Col>
         <Col className='red' s={12} m={8}>Feedback</Col>
         
       </Row>
     
     </Container>
  )
}
