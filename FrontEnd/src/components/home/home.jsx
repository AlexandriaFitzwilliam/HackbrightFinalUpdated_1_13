import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const Home = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const userLogin = {username, password}

        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.success);
              if (responseJson.success == true) {
                sessionStorage.setItem('login', true)
                sessionStorage.setItem('user_id', responseJson.user_id)
                navigate('/')
                // const login_test = sessionStorage.getItem('login')
                // console.log(sessionStorage.getItem('user_id'))
              }
              else {
                setShow(true)
              }
            });
    }

    return (
        <div class="container-fluid image-test"  id="log-in form">
          <Alert show={show} variant="warning">
              <Alert.Heading>Sorry. Your username and password do not match.</Alert.Heading>
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-dark">
                    X
                  </Button>
                </div>
            </Alert>
            
            <h1 className='search-title'>Log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='pink-text'>Username</Form.Label>
                    <Form.Control className='form-css' type="username" placeholder="Enter username" 
                    value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='pink-text'>Password</Form.Label>
                    <Form.Control className='form-css' type="password" placeholder="Password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button className='form-button' variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
            </Form>
        </div>
    )
}

export default Home