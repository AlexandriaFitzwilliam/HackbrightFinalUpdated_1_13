import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchRequest = (props) => {

    const [searchParam, setSearchParam] = React.useState('');
    const [searchType, setSearchType] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(`searchParam=${searchParam}`)
        // console.log(`searchType=${searchType}`)

        const newSearch = {searchParam, searchType}
        console.log("request to server.py made")

        fetch('/api/search_request', {
            method: 'POST',
            body: JSON.stringify(newSearch),
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
            <h1>Search Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSearchRequest">
                    {/* <Form.Label>What would you like to name your shelf?</Form.Label> */}
                    <Form.Control placeholder="Type search keywords here" 
                        value={searchParam} onChange={(e)=>setSearchParam(e.target.value)}/>
                    <Form.Select 
                        aria-label="How would you like to search?"
                        value={searchType}
                        onChange={e=>setSearchType(e.target.value)}
                        // onChange={e=>console.log(e.target.value)}
                        >
                            <option>Search By...</option>
                            <option value='title'>title</option>
                            <option value='author'>author</option>

                        </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SearchRequest