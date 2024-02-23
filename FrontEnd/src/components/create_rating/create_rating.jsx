import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {redirect, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const CreateRating = () => {
    const [score, setScore] = React.useState(1);
    const [details, setDetails] = React.useState('');
    let { book } = useParams();
    const user_id = sessionStorage.getItem('user_id');
    const navigate = useNavigate();


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
              if (responseJson.success == true) {
                navigate(`/book/${book}`)
              }
            });

    }


    return (
        <div>
            <h1 className='search-title'>Create Rating</h1>
            <Form className='form-marg' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label className='pink-text'>How many Stars?</Form.Label>
                    <Form.Select 
                    className='form-css'
                    aria-label="Choose a rating"
                    value={score} 
                    onChange={e=>setScore(e.target.value)}
                    >
                        <option>Choose a rating</option>
                        <option className='form-css' value="1">One Star</option>
                        <option className='form-css' value="2">Two Stars</option>
                        <option value="3">Three Stars</option>
                        <option value="4">Four Stars</option>
                        <option value="5">Five Stars</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='form-css' type="text" placeholder="(Optional) Write review here" 
                    value={details} onChange={(e)=>setDetails(e.target.value)}/>
                </Form.Group>
                <Button className='form-button' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateRating
