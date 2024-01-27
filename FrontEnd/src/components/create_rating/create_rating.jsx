import React from 'react';
import './create_rating.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateRating = (props) => {
    const [score, setScore] = React.useState("1");
    const {book_id, user_id} = props


    function handleSubmit(e) {
        e.preventDefault();
        

        // fetch('/api/create_account', {
        //     method: 'POST',
        //     body: JSON.stringify(newUser),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //       console.log(responseJson.success);
        //     });

    }


    return (
        <div>
            <h1>Create Rating</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Book Title Goes Here</Form.Label>
                    <Form.Select aria-label="Choose a rating">
                        <option>Choose a rating</option>
                        <option value="1">One Star</option>
                        <option value="2">Two Stars</option>
                        <option value="3">Three Stars</option>
                        <option value="4">Four Stars</option>
                        <option value="5">Five Stars</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateRating
