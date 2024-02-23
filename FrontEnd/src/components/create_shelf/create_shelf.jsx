import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const CreateShelf = (props) => {
    const [shelfName, setShelfName] = React.useState("");
    const {user_id} = props;
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        const newShelf = {user_id, shelfName}

        fetch('/api/create_shelf', {
            method: 'POST',
            body: JSON.stringify(newShelf),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.success)
              if (responseJson.success == true) {
                navigate('/home')
              }
            });

    }


    return (
        <div>
            <h1 className='search-title'>Create Shelf</h1>
            <Form className='form-marg' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formShelfName">
                    <Form.Label>What would you like to name your shelf?</Form.Label>
                    <Form.Control className='form-css' placeholder="Enter name here" 
                    value={shelfName} onChange={(e)=>setShelfName(e.target.value)}/>
                </Form.Group>
                <Button className='form-button' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateShelf
