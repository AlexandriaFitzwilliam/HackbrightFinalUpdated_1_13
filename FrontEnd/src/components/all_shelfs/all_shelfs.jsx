import React from 'react';
import { Link } from "react-router-dom"
import ShelfDetails from '../about/shelf_details';
import CreateShelf from '../create_shelf/create_shelf';


const AllShelfs = (props) => {
    const [shelves, setShelfs] = React.useState({});
    const userShelfs = [];
    const {user_id} = props

    React.useEffect(() => {
        fetch(`/api/all_shelfs/${user_id}`)
          .then((response) => response.json())
          .then((result) => setShelfs(result));
      }, [user_id]);

      for (const shelf of Object.values(shelves)) {
        const shelfCard = (
            <ShelfCard
            shelf_name={shelf.name}
            shelf_id={shelf.shelf_id}
            />
        );
        userShelfs.push(shelfCard)
      }


    return (
        <div>
            <h2>Your Shelves</h2>
            <Link to="/create_shelf">Create New Shelf</Link>
            <span>{userShelfs}</span>

        </div>
    )
}

export default AllShelfs

function ShelfCard(props) {
    const {shelf_name, shelf_id} = props;

    return (
        <div>
            <h3>{shelf_name}</h3>
            <ShelfDetails shelf_id={shelf_id} />
        </div>
    )
}
