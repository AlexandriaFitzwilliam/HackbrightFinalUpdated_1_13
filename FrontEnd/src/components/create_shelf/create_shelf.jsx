import React from 'react';
import './create_shelf.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateShelf = (props) => {
    const [shelfName, setShelfName] = React.useState("");
    const {user_id} = props;


    function handleSubmit(e) {
        e.preventDefault();

        const newShelf = {user_id, shelfName}
        console.log(shelfName)

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
            });

    }


    return (
        <div>
            <h1>Create Shelf</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formShelfName">
                    <Form.Label>What would you like to name your shelf?</Form.Label>
                    <Form.Control placeholder="Enter name here" 
                    value={shelfName} onChange={(e)=>setShelfName(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateShelf
