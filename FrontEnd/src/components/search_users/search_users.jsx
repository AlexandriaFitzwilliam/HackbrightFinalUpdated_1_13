import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const SearchUsers = (props) => {

    const [searchParam, setSearchParam] = React.useState('');
    const [userSearched, setUserSearched] = React.useState({});
    const userCards = [];

    function handleSubmit(e) {
        e.preventDefault();

        const newSearch = {searchParam}
        console.log("request to server.py made")

        fetch('/api/search_users', {
            method: 'POST',
            body: JSON.stringify(newSearch),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            return response.json()
          })
          .then((result) => {
            setUserSearched(result)
          });

    }

    for (const user of Object.values(userSearched)) {
        const userCard = (
            <Card className='searchUserCard' id={`searchUserCard_${user.user_id}`} border="success" style={{ width: '18rem' }}>
                <Card.Header>
                <Card.Link href={`/users/user/${user.user_id}`}>{user.username}</Card.Link>
                </Card.Header>
            </Card>
        )
        // console.log(bookCard)
        userCards.push(userCard)
    }


    return (
        <div>
            <h1>Search Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSearchRequest">
                    <Form.Control placeholder="Type search keywords here" 
                         value={searchParam} onChange={(e)=>setSearchParam(e.target.value)}/>
                        {/* // value={SearchUsers} onChange={(e)=>setUserParam(e.target.value)}/> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {userCards}
        </div>
    )
}

export default SearchUsers