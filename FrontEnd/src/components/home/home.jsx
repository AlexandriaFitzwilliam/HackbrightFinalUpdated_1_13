import React from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

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
                // const login_test = sessionStorage.getItem('login')
                // console.log(sessionStorage.getItem('user_id'))
              }
            });
    }

    return (
        <div>
            <h1>Log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" 
                    value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
                {/* <Button variant="primary" type="submit">
                    Create Account
                </Button> */}
            </Form>
        </div>
    )
}

export default Home