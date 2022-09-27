import React from 'react';
import { Row, Col, } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


const Aboutus = () => {
    return (
        <div className='aboutus'>
            <Row className="justify-content-md-center">
            <Image src="images/about.png?100px250" fluid />
            
            <Col md="auto">RexMobile was established in 2020 with the aim of being the one stop Apple reseller in Malaysia, and is now one of the Apple Premium Reseller (APR) in Malaysia and growing. REXMobile also expanded into the service industry and obtained an Apple Authorized Service Provider (ASP) license in 2020.
REXMobile store concepts offers a full range of Apple related accessories for customers to experience. The stores also carry the largest range of Apple accessories in Malaysia.</Col>
</Row>
</div>   
    )
}

export default Aboutus
