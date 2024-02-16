import React from 'react';
// import './create_rating.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AllShelfs from '../all_shelfs/all_shelfs';
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {redirect, useParams} from "react-router-dom"

const AddBook = (props) => {
    const [shelfs, setShelfs] = React.useState({});
    const [new_shelf, setNewShelf] = React.useState("")
    const {user_id} = props;
    const userShelfs = [];
    const book = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`/api/all_shelfs/${user_id}`)
          .then((response) => response.json())
          .then((result) => setShelfs(result));
      }, [user_id]);

      for (const shelf of Object.values(shelfs)) {
        const createOption = (
            <CreateOption
            name={shelf.name}
            shelf_id={shelf.shelf_id}
            />
        );
        userShelfs.push(createOption)
      }


    function handleSubmit(e) {
        e.preventDefault();
        
        const book_id = book['book']
        console.log(`new_shelf=${new_shelf}`)

        const newBookShelf = {new_shelf, book_id}

        // console.log(book_id)


        fetch('/api/create_bookshelf', {
            method: 'POST',
            body: JSON.stringify(newBookShelf),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.success)
              if (responseJson.success == true) {
                navigate(`/book/${book_id}`)
              }
            });

    }


    return (
        <div>
            <h1>Add book to shelf</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Book Title Goes Here</Form.Label>
                    <Form.Select 
                    aria-label="Choose a Shelf"
                    value={new_shelf} 
                    onChange={e=>setNewShelf(e.target.value)}
                    // onChange={e=>console.log(e.target.value)}
                    >
                        <option >Pick a shelf</option>
                        {userShelfs}

                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddBook

function CreateOption(props) {
    const {name, shelf_id} = props

    return (
        <option value={shelf_id}>{name}</option>

    )
  }
