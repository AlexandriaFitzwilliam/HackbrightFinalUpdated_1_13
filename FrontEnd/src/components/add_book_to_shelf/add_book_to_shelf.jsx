import React from 'react';
// import './create_rating.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AllShelfs from '../all_shelfs/all_shelfs';
// import {redirect, useParams} from "react-router-dom"

const AddBook = (props) => {
    const [shelfs, setShelfs] = React.useState({});
    const [new_shelf, setNewShelf] = React.useState("")
    const {user_id} = props;
    const userShelfs = [];

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

    //   function createOption(props) {
    //     const {name, shelf_id} = props

    //     return (
    //         <option value={shelf_id}>{name}</option>
    //     )
    //   }

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(book)
        // const newRating = {user_id, book, score}
    

        // fetch('/api/create_rating', {
        //     method: 'POST',
        //     body: JSON.stringify(newRating),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //       console.log(responseJson.success)
        //       if (responseJson.succes == true) {
        //         return redirect('/home');
        //       }
        //     });

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
                    onChange={e=>setNewShelf(e.target.shelf_name)}
                    >
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
