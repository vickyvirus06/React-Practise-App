import React, { Fragment } from 'react'
import { Button, Container, FormGroup } from 'reactstrap'
import { Form } from 'reactstrap'
import {Input} from 'reactstrap'

const AddCourse = () => {
  return (
    <Fragment>
        <h1 className='text-center my-3'>Fill Course Details</h1>
        <Form>
            <FormGroup>
                <label>Course Id</label>
                <Input type="text" placeholder="Enter here" name="userId" id="userId"></Input>
            </FormGroup>
            <FormGroup>
                <label>Course Title</label>
                <Input type="text" placeholder="Enter title here" name="courseTitle" id="courseTitle"></Input>
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" style={{height: 150}} placeholder="Enter Description here" name="courseDescription" id="courseDescription"></Input>
            </FormGroup>
            <Container className='text-center'>
                <Button color='success'>Add Course</Button>
                <Button color='warning ms-2'>Add Course</Button>
            </Container>
        </Form>
    </Fragment>
  )
}

export default AddCourse
