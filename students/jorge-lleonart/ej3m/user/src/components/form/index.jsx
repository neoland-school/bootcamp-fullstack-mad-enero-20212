
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import { FormControlProps } from 'react-bootstrap/FormControl'
import { useState, } from 'react'
// Nuestra app almacenará la información en un fichero llamado users.json, la información tendrá la siguiente estructura {id:1, name:xxx, lastname:xxx, username:xxx, country:xxx, img:xxx}
function Formulario() {
    let [userData, updateUserData] = useState([])
    const handlerOnSubmit = e => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            country: e.target.country.value,
            // image: e.target.image.value
        }

        console.log(user)
        fetch('http://localhost:4000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(c => c.json())
        .then((r) => {
            updateUserData(...userData,user)
            console.log(r)
            // r.userData
        })
    }

    return (
        <Form onSubmit={handlerOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" />

                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="username" />

                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter e-mail" name="email" />

                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter country" name="country" />
                {/* <Form.Label>Image</Form.Label>
            <Form.Control type="url" placeholder="Enter image" name="image"/> */}
                <Form.Text className="text-muted">
                    We'll never share your info with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}
export default Formulario;