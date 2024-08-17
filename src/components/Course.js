import React from 'react';
import {Card, CardBody, CardText, CardTitle, CardSubtitle,CardFooter, Button, Container } from 'reactstrap';


const Course = ({course}) => {
  return (
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='fw-bold'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger'>Delete</Button>
                <Button color='warning ms-1'>Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
}

export default Course;
