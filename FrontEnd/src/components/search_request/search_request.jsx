import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchRequest = (props) => {

    const [searchParam, setSearchParam] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`searchParam=${searchParam}`)

        // const newShelf = {user_id, shelfName}
        // console.log(shelfName)

        // fetch('/api/create_shelf', {
        //     method: 'POST',
        //     body: JSON.stringify(newShelf),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //       console.log(responseJson.success)
        //     });

    }


    return (
        <div>
            <h1>Search Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSearchRequest">
                    {/* <Form.Label>What would you like to name your shelf?</Form.Label> */}
                    <Form.Control placeholder="Type search keywords here" 
                    value={searchParam} onChange={(e)=>setSearchParam(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SearchRequest