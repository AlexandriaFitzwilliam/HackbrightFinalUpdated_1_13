import React from 'react';
import './create_account.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateAccount = () => {
    const [newUsername, setNewUsername] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");


    function handleSubmit(e) {

        e.preventDefault();
        const newUser={newUsername, newPassword}
    
        console.log(newUser)
    }



    return (
        <div>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" 
                    value={newUsername} onChange={(e)=>setNewUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateAccount
