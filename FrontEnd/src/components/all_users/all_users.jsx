import React from 'react';
import './all_users.css';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
// import {Link, useRouteMatch} from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = React.useState({});
    const userCards = [];
    // let {path, url} = useRouteMatch();

    React.useEffect(() => {
        fetch(`/api/all_users`)
          .then((response) => response.json())
          .then((result) => setUsers(result));
      }, []);

      for (const user of Object.values(users)) {
        const userCard = (
            <UserCard
            username={user.username}
            avg_rating={user.avg_rating}
            num_ratings={user.num_ratings}
            profile_pic={user.profile_pic}
            user_id={user.user_id} // this needs to be user_id={user.user_id} -Thu
            />
        );
        userCards.push(userCard)
      }


    return (
        <div>
            <h1>All Users - glance goes here</h1>
            <span>{userCards}</span>

        </div>
    )
}

export default AllUsers

function UserCard(props) {
    const {username, avg_rating, num_ratings, profile_pic, user_id} = props;

    return (
        <div className='usercard' id={user_id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>
          Number of Ratings: {num_ratings}
          Average Rating: {avg_rating}
        </Card.Text>
        <Link to={`user/${user_id}`}>View User</Link>
      </Card.Body>
    </Card>
            <br />
        </div>
    )
}
