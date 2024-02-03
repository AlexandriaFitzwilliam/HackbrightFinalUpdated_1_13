import React from 'react';
// import './all_users.css';
import ShelfDetails from '../about/shelf_details';


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
            <h1>All Shelves - glance goes here</h1>
            <span>{userShelfs}</span>

        </div>
    )
}

export default AllShelfs

function ShelfCard(props) {
    const {shelf_name, shelf_id} = props;

    return (
        <div>
            {shelf_name}
            <ShelfDetails shelf_id={shelf_id} />
        </div>
    )
}
