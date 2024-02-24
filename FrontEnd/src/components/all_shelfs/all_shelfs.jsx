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
        userShelfs.unshift(shelfCard)
      }


    return (
        <div className='row'>
            <div className='container-fluid'>
                <h2 className='col review-header'id='your-shelves'>Your Shelves</h2>
            </div>
            <div className='row'>
                <Link to="/create_shelf" className='col-2 align-self-center button-52'>Create New Shelf</Link>
                <span>{userShelfs}</span>
            </div>
        </div>
    )
}

export default AllShelfs

function ShelfCard(props) {
    const {shelf_name, shelf_id} = props;

    return (
        <div className='shelf-full border-double'>
            <h3 className='shelf-name d-inline-flex p-1 '>{shelf_name}</h3>
            <ShelfDetails shelf_id={shelf_id} />
        </div>
    )
}
