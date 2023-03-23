import axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Register() {
      const [name, setName] = useState("")
      const [phone, setPhone] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      async function handleSubmit(e) {
            e.preventDefault();
            

            try {
                  const formData = new FormData();
                  formData.append('name', name)
                  formData.append('phone', phone)
                  formData.append('email', email)
                  formData.append('password', password)


                  const result = await axios.post('http://localhost:5000/register', formData)
                  console.log(result.data)

                  setName("")
                  setEmail("")
                  setPhone("")
                  setPassword("")

            } catch (error) {
                  console.log(error)
            }

      }

      // const handleChange = (e) => {
      //       setName(e.target.name)
      //       setPhone(e.target.phone)
      //       setEmail(e.target.email)
      //       setPassword(e.target.password)
      // }

  return (
     <Card  className="container" style={{ width: '50rem' }}>
            <Form onSubmit={handleSubmit}>

            <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control placeholder="Enter name" 
                  onChange={(e)=> setName(e.target.value)}
                  value={name}
                  />
            </Form.Group>

            <Form.Group as={Col} controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control placeholder="Enter Phone number" 
                  onChange={(e)=> setPhone(e.target.value)}
                  value={phone}
                  />
            </Form.Group>
            </Row>

            <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type='email' placeholder="Enter email" 
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  />
            </Form.Group>

            <Form.Group as={Col} controlId="formDesignation">
                  <Form.Label>Password</Form.Label>
                  <Form.Control placeholder="Enter Designation" 
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  />
            </Form.Group>
            </Row>

            <Row>
                  <Col xs>
                  <Button variant="outline-primary">Primary</Button>
                  </Col>
            </Row>
            </Form>

     </Card>
  )
}
