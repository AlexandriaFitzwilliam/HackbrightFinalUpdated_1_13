import React from 'react';
import './create_rating.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {redirect, useParams} from "react-router-dom"

const CreateRating = () => {
    const [score, setScore] = React.useState(1);
    const [details, setDetails] = React.useState('');
    let { book } = useParams();
    const user_id = sessionStorage.getItem('user_id');


    function handleSubmit(e) {
        e.preventDefault();

        const newRating = {user_id, book, score, details}
    

        fetch('/api/create_rating', {
            method: 'POST',
            body: JSON.stringify(newRating),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.success)
              if (responseJson.succes == true) {
                return redirect('/home');
              }
            });

    }


    return (
        <div>
            <h1>Create Rating</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>How many Stars?</Form.Label>
                    <Form.Select 
                    aria-label="Choose a rating"
                    value={score} 
                    onChange={e=>setScore(e.target.value)}
                    >
                        {/* <option>Choose a rating</option> */}
                        <option value="1">One Star</option>
                        <option value="2">Two Stars</option>
                        <option value="3">Three Stars</option>
                        <option value="4">Four Stars</option>
                        <option value="5">Five Stars</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="(Optional) Write review here" 
                    value={details} onChange={(e)=>setDetails(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateRating
