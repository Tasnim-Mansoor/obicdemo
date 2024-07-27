import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';// Updated image path
import 'aos/dist/aos.css'; 

const Checkout = () => {
    const [rowsToShow, setRowsToShow] = useState(5);

    const initialRows = [
            { id: 1, service: 'Flight Booking', description: 'Arrange domestic and international flights with multiple airlines to ensure the best prices and schedules.' },
            { id: 2, service: 'Hotel Reservations', description: 'Book accommodations ranging from budget hotels to luxury resorts, tailored to your preferences.' },
            { id: 3, service: 'Travel Insurance', description: 'Provide comprehensive travel insurance packages to cover unexpected events and emergencies.' },
            { id: 4, service: 'Tour Packages', description: 'Offer curated tour packages for popular destinations, including guided tours, activities, and transportation.' },
            { id: 5, service: 'Car Rentals', description: 'Facilitate car rental services at your destination for easy and convenient transportation.' },
            { id: 6, service: 'Market Research', description: 'Conduct thorough market analysis to provide insights and strategic recommendations for business growth.' },
            { id: 7, service: 'Brand Management', description: 'Develop and manage brand identity, ensuring consistent and effective communication across all channels.' },
            { id: 8, service: 'Advertising Campaigns', description: 'Plan and execute targeted advertising campaigns across various media platforms to reach your audience.' },
            { id: 9, service: 'Event Planning', description: 'Organize corporate events, trade shows, and product launches to enhance brand presence and engagement.' },
            { id: 10, service: 'Public Relations', description: 'Manage public relations efforts to maintain a positive image and build strong relationships with stakeholders.' },
        ];
        
    const handlePagination = (number) => {
        if (number === 1) {
            setRowsToShow(5);
        } else if (number === 2) {
            setRowsToShow(initialRows.length);
        }
    };

    return (
        <Container fluid className="mt-5 mb-5">
            <Row>
                <Col lg={12}>
                    <h1 style={{ fontWeight: 'bold', fontFamily: '"Anek Malayalam", sans-serif',fontSize: '45px'  }} className="display-4 text-center mb-4" data-aos="zoom-in" data-aos-duration="1500">What We Do</h1>
                    <Table striped bordered hover data-aos="zoom-in" data-aos-duration="1500">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialRows.slice(0, rowsToShow).map((row, index) => (
                                <tr 
                                    key={row.id}
                                    style={{ 
                                        backgroundColor: index % 2 === 0 ? '#d8e6f0' : '#182641',
                                        color: index % 2 === 0 ? 'white' : 'white',
                                    }}
                                >
                                    <td>{row.id}</td>
                                    <td>{row.service}</td>
                                    <td>{row.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="text-center mt-4">
                        <Button 
                            variant="dark" 
                            onClick={() => handlePagination(1)}
                            className="mx-2"
                        >
                            1
                        </Button>
                        <Button 
                            variant="dark" 
                            onClick={() => handlePagination(2)}
                            className="mx-2"
                        >
                            2
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
AOS.init();
export default Checkout;
