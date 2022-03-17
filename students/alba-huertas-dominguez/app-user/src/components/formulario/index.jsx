import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState, } from 'react'
function Formulario() {
    let [Userdata, UpdateData] = useState([])

    const handlerSubmit = e => {
        e.preventDefault();
        // console.log(e.target)
        const user = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            username: e.target.username.value,
            country: e.target.country.value,
            img: e.target.img.value,
            email: e.target.email.value
        }

        // const userFormData = new FormData(e.target)
        // body: JSON.stringify(Object.fromEntries(userFormData))
        // console.log(user)  ESTA FORMA ES MEJOR QUE CREAR EL OBJETO.
 

        fetch('http://localhost:4000/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }

        }
        )
            .then(d => d.json())
            .then((data) => {

                UpdateData(...Userdata, user)
                console.log(data)

            }


            )



    }


    return (

        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" />
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Enter Surname" name="lastname" />
                <Form.Label>User Name </Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" name="username" />
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" name="country" />
            </Form.Group>

            <Form.Label htmlFor="basic-url">Image</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    https://
                </InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" name="img" />
            </InputGroup>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )


}

export default Formulario